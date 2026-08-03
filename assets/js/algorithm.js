const nodeIds = ['node-start', 'node-input', 'node-decision', 'node-mix', 'node-freeze', 'node-end', 'node-wrong-end'];
const lineIds = [
  'line-start-input',
  'line-input-decision',
  'line-decision-yes',
  'line-yes-mix',
  'line-mix-freeze',
  'line-freeze-end',
  'line-decision-no'
];

const ingredientInputs = document.querySelectorAll('input[name="ingredient"]');
const runButton = document.getElementById('runButton');
const resetButton = document.getElementById('resetButton');
const statusBox = document.getElementById('statusBox');

const nodes = Object.fromEntries(nodeIds.map((id) => [id, document.getElementById(id)]));
const lines = Object.fromEntries(lineIds.map((id) => [id, document.getElementById(id)]));

let timers = [];

function getSelectedIngredient() {
  return document.querySelector('input[name="ingredient"]:checked')?.value ?? 'vanilla';
}

function clearTimers() {
  timers.forEach((timer) => window.clearTimeout(timer));
  timers = [];
}

function resetHighlights() {
  Object.values(nodes).forEach((node) => node.classList.remove('node--active', 'node--done', 'node--wrong'));
  Object.values(lines).forEach((line) => line.classList.remove('flow-line--active'));
}

function setActive(nodeId) {
  Object.values(nodes).forEach((node) => node.classList.remove('node--active'));
  nodes[nodeId]?.classList.add('node--active');
}

function setDone(nodeId) {
  nodes[nodeId]?.classList.add('node--done');
}

function setWrong(nodeId) {
  nodes[nodeId]?.classList.add('node--wrong');
}

function activateLine(lineId) {
  lines[lineId]?.classList.add('flow-line--active');
  const marker = lines[lineId];
  if (marker) {
    marker.setAttribute('marker-end', 'url(#arrowHeadActive)');
  }
}

function runSequence(steps) {
  clearTimers();
  resetHighlights();

  steps.forEach((step, index) => {
    const timer = window.setTimeout(() => {
      if (step.type === 'node') {
        if (step.state === 'active') {
          setActive(step.id);
        } else if (step.state === 'done') {
          setDone(step.id);
        } else if (step.state === 'wrong') {
          setWrong(step.id);
        }
      }

      if (step.type === 'line') {
        activateLine(step.id);
      }

      if (step.message) {
        statusBox.innerHTML = step.message;
      }
    }, index * 550);

    timers.push(timer);
  });
}

function buildSuccessfulPath(ingredientLabel) {
  return [
    { type: 'node', id: 'node-start', state: 'active', message: `Đang bắt đầu thuật toán với nguyên liệu <strong>${ingredientLabel}</strong>.` },
    { type: 'line', id: 'line-start-input' },
    { type: 'node', id: 'node-start', state: 'done' },
    { type: 'node', id: 'node-input', state: 'active', message: 'Bước 1: Chọn nguyên liệu cho món kem.' },
    { type: 'line', id: 'line-input-decision' },
    { type: 'node', id: 'node-input', state: 'done' },
    { type: 'node', id: 'node-decision', state: 'active', message: 'Bước 2: Kiểm tra xem có nguyên liệu hay không.' },
    { type: 'line', id: 'line-decision-yes' },
    { type: 'node', id: 'node-decision', state: 'done' },
    { type: 'node', id: 'node-mix', state: 'active', message: 'Nhánh Đúng: Trộn sữa, đường và nguyên liệu đã chọn.' },
    { type: 'line', id: 'line-yes-mix' },
    { type: 'node', id: 'node-mix', state: 'done' },
    { type: 'node', id: 'node-freeze', state: 'active', message: 'Làm lạnh hỗn hợp để kem đông lại.' },
    { type: 'line', id: 'line-mix-freeze' },
    { type: 'node', id: 'node-freeze', state: 'done' },
    { type: 'line', id: 'line-freeze-end' },
    { type: 'node', id: 'node-end', state: 'active', message: 'Hoàn thành: món kem đã sẵn sàng!' },
    { type: 'node', id: 'node-end', state: 'done', message: 'Thuật toán hoàn tất. Em đã đi đúng luồng sơ đồ khối.' }
  ];
}

function buildWrongPath() {
  return [
    { type: 'node', id: 'node-start', state: 'active', message: 'Đang bắt đầu thuật toán.' },
    { type: 'line', id: 'line-start-input' },
    { type: 'node', id: 'node-start', state: 'done' },
    { type: 'node', id: 'node-input', state: 'active', message: 'Bước 1: Chọn nguyên liệu.' },
    { type: 'line', id: 'line-input-decision' },
    { type: 'node', id: 'node-input', state: 'done' },
    { type: 'node', id: 'node-decision', state: 'active', message: 'Không có nguyên liệu nên đi vào nhánh <strong>Sai</strong>.' },
    { type: 'line', id: 'line-decision-no' },
    { type: 'node', id: 'node-wrong-end', state: 'wrong', message: 'Luồng đã đi vào nhánh Sai và kết thúc.' }
  ];
}

function runAlgorithm() {
  const ingredient = getSelectedIngredient();

  if (ingredient === 'none') {
    statusBox.innerHTML = 'Đã chọn <strong>Không có gì</strong>. Luồng sẽ đi sang nhánh Sai.';
    runSequence(buildWrongPath());
    return;
  }

  const ingredientLabelMap = {
    vanilla: 'Vani',
    strawberry: 'Dâu',
    chocolate: 'Sô cô la'
  };

  runSequence(buildSuccessfulPath(ingredientLabelMap[ingredient] ?? 'Vani'));
}

function resetAlgorithm() {
  clearTimers();
  resetHighlights();
  statusBox.innerHTML = 'Chọn nguyên liệu rồi bấm <strong>Chạy thuật toán</strong>.';
  ingredientInputs.forEach((input) => {
    if (input.value === 'vanilla') {
      input.checked = true;
    }
  });
}

runButton.addEventListener('click', runAlgorithm);
resetButton.addEventListener('click', resetAlgorithm);

statusBox.innerHTML = 'Chọn nguyên liệu rồi bấm <strong>Chạy thuật toán</strong>.';