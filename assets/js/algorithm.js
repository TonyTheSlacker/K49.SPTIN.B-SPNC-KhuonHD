/**
 * Mô phỏng thuật toán làm kem bằng sơ đồ khối (algorithm.html)
 * Chạy tự động hoặc từng bước; khối đang chạy sáng màu cam, khối đã đi qua màu xanh lá.
 */
(function () {
  const flow = document.getElementById('flow');
  const runButton = document.getElementById('runButton');
  const stepButton = document.getElementById('stepButton');
  const resetButton = document.getElementById('resetButton');
  const statusBox = document.getElementById('statusBox');
  const stepCounter = document.getElementById('stepCounter');
  const outText = document.getElementById('outText');
  const inputs = Array.from(document.querySelectorAll('input[name="ingredient"]'));
  if (!flow || !runButton || !stepButton || !resetButton || !statusBox || inputs.length === 0) return;

  const STEP_DELAY = 900;
  const LABELS = { vanilla: 'vani', strawberry: 'dâu', chocolate: 'sô cô la' };
  const node = id => document.getElementById('n-' + id);
  const edge = id => document.getElementById('e-' + id);
  const word = id => document.querySelector(`#wordSteps [data-word="${id}"]`);

  let steps = [];
  let index = -1;
  let timer = null;

  const selected = () => (inputs.find(input => input.checked) || inputs[0]).value;

  // Lần lượt các khối mà thuật toán đi qua với nguyên liệu đã chọn
  function buildSteps(ingredient) {
    const has = ingredient !== 'none';
    const label = LABELS[ingredient];
    const list = [
      { node: 'start', text: 'Bắt đầu thuật toán.' },
      { node: 'input', edge: 'start-input', text: has ? `Nhập nguyên liệu: ${label}.` : 'Nhập nguyên liệu: không có gì.' },
      { node: 'decision', edge: 'input-decision', branch: has ? 'yes' : 'no',
        text: has ? 'Có nguyên liệu không? Có, nên đi theo nhánh Đúng.' : 'Có nguyên liệu không? Không, nên đi theo nhánh Sai.' }
    ];
    if (has) {
      list.push(
        { node: 'mix', edge: 'decision-mix', text: `Trộn sữa, đường và ${label}.` },
        { node: 'freeze', edge: 'mix-freeze', text: 'Làm lạnh hỗn hợp cho kem đông lại.' },
        { node: 'out', edge: 'freeze-out', text: `Xuất kết quả: một cốc kem ${label}.` },
        { node: 'end', edge: 'out-end', text: 'Kết thúc. Thuật toán đã chạy xong theo nhánh Đúng.', tone: 'ok' }
      );
    } else {
      list.push(
        { node: 'none', edge: 'decision-none', alert: true, text: 'Xuất thông báo: “Chưa có nguyên liệu”, không làm được kem.' },
        { node: 'end', edge: 'none-end', text: 'Kết thúc. Thuật toán dừng sau nhánh Sai.', tone: 'alert' }
      );
    }
    return list;
  }

  function clearView() {
    flow.querySelectorAll('.fnode').forEach(el => el.classList.remove('is-active', 'is-done', 'is-alert'));
    flow.querySelectorAll('.edge').forEach(el => el.classList.remove('is-active', 'is-done'));
    flow.querySelectorAll('.branch-label').forEach(el => el.classList.remove('is-on'));
    document.querySelectorAll('#wordSteps li').forEach(el => el.classList.remove('is-active', 'is-done'));
  }

  function setStatus(html, tone) {
    statusBox.innerHTML = html;
    statusBox.classList.toggle('is-ok', tone === 'ok');
    statusBox.classList.toggle('is-alert', tone === 'alert');
  }

  function show(i) {
    const prev = steps[i - 1];
    const step = steps[i];
    if (prev) {
      node(prev.node).classList.remove('is-active');
      node(prev.node).classList.add('is-done');
      const w = word(prev.node);
      if (w) { w.classList.remove('is-active'); w.classList.add('is-done'); }
      if (prev.edge) edge(prev.edge).classList.replace('is-active', 'is-done');
    }
    if (step.edge) edge(step.edge).classList.add('is-active');
    node(step.node).classList.add(step.alert ? 'is-alert' : 'is-active');
    const w = word(step.node);
    if (w) w.classList.add('is-active');
    if (step.branch) document.getElementById(step.branch === 'yes' ? 'lbl-yes' : 'lbl-no').classList.add('is-on');
    setStatus(step.text, step.tone || (step.alert ? 'alert' : ''));
    stepCounter.textContent = `Bước ${i + 1}/${steps.length}`;

    const last = i === steps.length - 1;
    if (last) {
      // Khối cuối: giữ màu "đã xong" cho cả đường vừa đi
      if (step.edge) edge(step.edge).classList.replace('is-active', 'is-done');
      node(step.node).classList.replace('is-active', 'is-done');
      if (w) w.classList.replace('is-active', 'is-done');
      finish();
    }
  }

  function lock(running) {
    inputs.forEach(input => { input.disabled = running; });
    runButton.disabled = running;
  }

  function start() {
    stop();
    clearView();
    steps = buildSteps(selected());
    index = -1;
    const ingredient = selected();
    outText.textContent = ingredient === 'none' ? 'Xuất: cốc kem' : `Xuất: cốc kem ${LABELS[ingredient]}`;
  }

  function next() {
    index += 1;
    show(index);
  }

  function stop() {
    if (timer) window.clearInterval(timer);
    timer = null;
  }

  function finish() {
    stop();
    lock(false);
    stepButton.disabled = false;
    stepButton.textContent = 'Chạy từng bước';
    runButton.textContent = 'Chạy lại';
  }

  runButton.addEventListener('click', () => {
    start();
    lock(true);
    stepButton.disabled = true;
    next();
    timer = window.setInterval(() => {
      if (index < steps.length - 1) next(); else stop();
    }, STEP_DELAY);
  });

  stepButton.addEventListener('click', () => {
    // Bấm lần đầu (hoặc sau khi đã chạy xong) thì bắt đầu lại từ khối đầu tiên
    if (index < 0 || index >= steps.length - 1) {
      start();
      runButton.textContent = 'Chạy tự động';
      inputs.forEach(input => { input.disabled = true; });
    }
    next();
    if (index < steps.length - 1) stepButton.textContent = 'Bước tiếp theo';
  });

  function reset() {
    stop();
    clearView();
    steps = [];
    index = -1;
    lock(false);
    stepButton.disabled = false;
    stepButton.textContent = 'Chạy từng bước';
    runButton.textContent = 'Chạy tự động';
    stepCounter.textContent = 'Chưa chạy';
    outText.textContent = 'Xuất: cốc kem';
    setStatus('Chọn nguyên liệu rồi bấm <strong>Chạy tự động</strong> hoặc <strong>Chạy từng bước</strong>.');
  }

  resetButton.addEventListener('click', reset);
  inputs.forEach(input => input.addEventListener('change', reset));
  reset();
})();
