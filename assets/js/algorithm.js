const nodeIds = ['node-start', 'node-input', 'node-decision', 'node-mix', 'node-freeze', 'node-end', 'node-wrong-end'];
const lineIds = [
  'line-start-input',
  'line-input-decision',
  'line-decision-yes',
  'line-mix-freeze',
  'line-freeze-end',
  'line-decision-no'
];

const ingredientInputs = document.querySelectorAll('input[name="ingredient"]');
const runButton = document.getElementById('runButton');
const resetButton = document.getElementById('resetButton');
const statusBox = document.getElementById('statusBox');
const flowWrap = document.getElementById('flowWrap');
const yesLabel = document.querySelector('.yes-label');
const noLabel = document.querySelector('.no-label');

const nodes = Object.fromEntries(nodeIds.map((id) => [id, document.getElementById(id)]));
const lines = Object.fromEntries(lineIds.map((id) => [id, document.getElementById(id)]));

if (runButton && resetButton && statusBox && flowWrap && ingredientInputs.length > 0) {
  const STEP_DELAY = 550;
  let timers = [];
  let isRunning = false;

  function setRunState(running) {
    isRunning = running;
    runButton.disabled = running;
    runButton.textContent = running ? 'Đang chạy…' : 'Chạy thuật toán';
    runButton.setAttribute('aria-busy', String(running));
    ingredientInputs.forEach((input) => {
      input.disabled = running;
    });
  }

  function toViewBoxPoint(point, wrapRect) {
    return {
      x: ((point.x - wrapRect.left) / wrapRect.width) * 1000,
      y: ((point.y - wrapRect.top) / wrapRect.height) * 1000
    };
  }

  function getNodeRect(nodeId) {
    return nodes[nodeId]?.getBoundingClientRect();
  }

  function setLinePath(lineId, path) {
    lines[lineId]?.setAttribute('d', path);
  }

  function syncFlowLines() {
    const wrapRect = flowWrap.getBoundingClientRect();
    if (!wrapRect.width || !wrapRect.height) return;
    const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));

    const verticalPath = (fromId, toId) => {
      const fromRect = getNodeRect(fromId);
      const toRect = getNodeRect(toId);
      if (!fromRect || !toRect) return null;

      const from = toViewBoxPoint({
        x: fromRect.left + fromRect.width / 2,
        y: fromRect.bottom
      }, wrapRect);
      const to = toViewBoxPoint({
        x: toRect.left + toRect.width / 2,
        y: toRect.top
      }, wrapRect);

      return `M${from.x} ${from.y} L${to.x} ${to.y}`;
    };

    setLinePath('line-start-input', verticalPath('node-start', 'node-input'));
    setLinePath('line-input-decision', verticalPath('node-input', 'node-decision'));
    setLinePath('line-decision-yes', verticalPath('node-decision', 'node-mix'));
    setLinePath('line-mix-freeze', verticalPath('node-mix', 'node-freeze'));
    setLinePath('line-freeze-end', verticalPath('node-freeze', 'node-end'));

    const decisionRect = getNodeRect('node-decision');
    const mixRect = getNodeRect('node-mix');
    const wrongEndRect = getNodeRect('node-wrong-end');
    if (decisionRect && mixRect && wrongEndRect) {
      const from = toViewBoxPoint({
        x: decisionRect.right,
        y: decisionRect.top + decisionRect.height / 2
      }, wrapRect);
      const to = toViewBoxPoint({
        x: wrongEndRect.left,
        y: wrongEndRect.top + wrongEndRect.height / 2
      }, wrapRect);
      const laneGap = wrapRect.width < 520 ? 64 : 100;
      const laneX = Math.min(982, Math.max(from.x + laneGap, to.x - 36));
      const verticalDirection = to.y >= from.y ? 1 : -1;
      const incomingDirection = laneX >= from.x ? 1 : -1;
      const outgoingDirection = to.x >= laneX ? 1 : -1;
      const corner = Math.min(24, Math.abs(to.y - from.y) / 2, Math.abs(laneX - from.x) / 2);
      const incomingCornerX = laneX - incomingDirection * corner;
      const outgoingCornerX = laneX + outgoingDirection * corner;

      setLinePath(
        'line-decision-no',
        `M${from.x} ${from.y} L${incomingCornerX} ${from.y} Q${laneX} ${from.y} ${laneX} ${from.y + verticalDirection * corner} L${laneX} ${to.y - verticalDirection * corner} Q${laneX} ${to.y} ${outgoingCornerX} ${to.y} L${to.x} ${to.y}`
      );

      if (yesLabel) {
        const yesMiddle = (decisionRect.bottom + mixRect.top) / 2 - wrapRect.top;
        const yesLineX = (decisionRect.left + decisionRect.width / 2) - wrapRect.left;
        yesLabel.style.left = `${clamp(yesLineX + 52, 52, wrapRect.width - 52)}px`;
        yesLabel.style.top = `${yesMiddle}px`;
      }

      if (noLabel) {
        const fromLocalX = decisionRect.right - wrapRect.left;
        const laneLocalX = (laneX / 1000) * wrapRect.width;
        const fromLocalY = decisionRect.top + decisionRect.height / 2 - wrapRect.top;
        noLabel.style.left = `${clamp((fromLocalX + laneLocalX) / 2, 56, wrapRect.width - 56)}px`;
        noLabel.style.top = `${fromLocalY - 22}px`;
      }
    }
  }

  function getSelectedIngredient() {
    return document.querySelector('input[name="ingredient"]:checked')?.value ?? 'vanilla';
  }

  function clearTimers() {
    timers.forEach((timer) => window.clearTimeout(timer));
    timers = [];
  }

  function resetHighlights() {
    Object.values(nodes).forEach((node) => node?.classList.remove('node--active', 'node--done', 'node--wrong'));
    Object.values(lines).forEach((line) => {
      line?.classList.remove('flow-line--active');
      line?.setAttribute('marker-end', 'url(#arrowHead)');
    });
    syncFlowLines();
  }

  function setActive(nodeId) {
    Object.values(nodes).forEach((node) => node?.classList.remove('node--active'));
    nodes[nodeId]?.classList.add('node--active');
    syncFlowLines();
  }

  function setDone(nodeId) {
    const node = nodes[nodeId];
    node?.classList.remove('node--active', 'node--wrong');
    node?.classList.add('node--done');
  }

  function setWrong(nodeId) {
    const node = nodes[nodeId];
    node?.classList.remove('node--active', 'node--done');
    node?.classList.add('node--wrong');
    syncFlowLines();
  }

  function activateLine(lineId) {
    const line = lines[lineId];
    line?.classList.add('flow-line--active');
    line?.setAttribute('marker-end', 'url(#arrowHeadActive)');
  }

  function setStatus(message) {
    statusBox.textContent = message;
  }

  function runSequence(steps) {
    clearTimers();
    resetHighlights();
    setRunState(true);

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
          setStatus(step.message);
        }

        if (index === steps.length - 1) {
          setRunState(false);
          timers = [];
        }
      }, index * STEP_DELAY);

      timers.push(timer);
    });
  }

  function buildSuccessfulPath(ingredientLabel) {
    return [
      { type: 'node', id: 'node-start', state: 'active', message: `Đang bắt đầu thuật toán với nguyên liệu ${ingredientLabel}.` },
      { type: 'line', id: 'line-start-input' },
      { type: 'node', id: 'node-start', state: 'done' },
      { type: 'node', id: 'node-input', state: 'active', message: 'Bước 1: Chọn nguyên liệu cho món kem.' },
      { type: 'line', id: 'line-input-decision' },
      { type: 'node', id: 'node-input', state: 'done' },
      { type: 'node', id: 'node-decision', state: 'active', message: 'Bước 2: Kiểm tra xem có nguyên liệu hay không.' },
      { type: 'line', id: 'line-decision-yes' },
      { type: 'node', id: 'node-decision', state: 'done' },
      { type: 'node', id: 'node-mix', state: 'active', message: 'Nhánh Đúng: Trộn sữa, đường và nguyên liệu đã chọn.' },
      { type: 'line', id: 'line-mix-freeze' },
      { type: 'node', id: 'node-mix', state: 'done' },
      { type: 'node', id: 'node-freeze', state: 'active', message: 'Làm lạnh hỗn hợp để kem đông lại.' },
      { type: 'line', id: 'line-freeze-end' },
      { type: 'node', id: 'node-freeze', state: 'done' },
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
      { type: 'node', id: 'node-decision', state: 'active', message: 'Không có nguyên liệu nên đi vào nhánh Sai.' },
      { type: 'line', id: 'line-decision-no' },
      { type: 'node', id: 'node-decision', state: 'done' },
      { type: 'node', id: 'node-wrong-end', state: 'wrong', message: 'Luồng đã đi vào nhánh Sai và kết thúc.' }
    ];
  }

  function runAlgorithm() {
    if (isRunning) return;

    const ingredient = getSelectedIngredient();
    if (ingredient === 'none') {
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
    setRunState(false);
    resetHighlights();
    setStatus('Chọn nguyên liệu rồi bấm “Chạy thuật toán”.');
    ingredientInputs.forEach((input) => {
      input.checked = input.value === 'vanilla';
    });
  }

  runButton.addEventListener('click', runAlgorithm);
  resetButton.addEventListener('click', resetAlgorithm);

  if ('ResizeObserver' in window) {
    const flowObserver = new ResizeObserver(syncFlowLines);
    flowObserver.observe(flowWrap);
  } else {
    window.addEventListener('resize', syncFlowLines);
  }

  resetAlgorithm();
}
