const { lessons, topics, glossary } = window.TinHoc6;

const MAX_WORDS = 8;
const MIN_LETTERS = 3;
const MAX_LETTERS = 14;
const STORAGE_PREFIX = 'crosswordScore';

const topicPicker = document.getElementById('topicPicker');
const board = document.getElementById('crosswordBoard');
const boardTitle = document.getElementById('boardTitle');
const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
const shuffleButton = document.getElementById('shuffleButton');
const statusMessage = document.getElementById('statusMessage');
const savedScore = document.getElementById('savedScore');
const confettiLayer = document.getElementById('confettiLayer');

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      // The game remains playable when storage is disabled.
    }
  }
};

function toAnswer(term) {
  return term
    .replace(/\s*\([^)]*\)/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toUpperCase()
    .replace(/[^A-Z ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getLesson(number) {
  return lessons.find((lesson) => lesson.number === number);
}

function getTopicWords(topic) {
  return glossary
    .filter((item) => topic.lessons.includes(item.lesson))
    .filter((item) => !item.term.includes(','))
    .map((item) => ({ ...item, answer: toAnswer(item.term) }))
    .filter((item) => {
      const letters = item.answer.replace(/ /g, '').length;
      return letters >= MIN_LETTERS && letters <= MAX_LETTERS;
    });
}

function pickWords(topic) {
  const pool = getTopicWords(topic);

  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, MAX_WORDS).sort((a, b) => a.lesson - b.lesson);
}

let currentTopic = topics[0];
let currentWords = [];
let rows = [];

function renderTopicPicker() {
  const fragment = document.createDocumentFragment();

  topics.forEach((topic) => {
    const button = document.createElement('button');
    button.className = 'topic-pill';
    button.type = 'button';
    button.dataset.topic = String(topic.number);
    button.setAttribute('aria-pressed', String(topic.number === currentTopic.number));
    button.setAttribute('aria-controls', 'crosswordBoard');

    const label = document.createElement('strong');
    label.textContent = `Chủ đề ${topic.number}`;

    const title = document.createElement('span');
    title.textContent = topic.title;

    button.append(label, title);
    button.addEventListener('click', () => startTopic(topic));
    fragment.append(button);
  });

  topicPicker.replaceChildren(fragment);
}

function updateTopicPicker() {
  topicPicker.querySelectorAll('.topic-pill').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.topic === String(currentTopic.number)));
  });
}

function createRow(word, index) {
  const row = document.createElement('div');
  row.className = 'word-row';

  const clue = document.createElement('div');
  clue.className = 'word-row__clue';

  const number = document.createElement('span');
  number.className = 'word-row__number';
  number.textContent = String(index + 1);

  const text = document.createElement('p');
  text.id = `clue-${index + 1}`;
  text.textContent = word.definition;

  const source = document.createElement('span');
  source.className = 'word-row__source';
  source.textContent = `Bài ${word.lesson}. ${getLesson(word.lesson).title}`;

  clue.append(number, text, source);

  const cells = document.createElement('div');
  cells.className = 'word-row__cells';

  const inputs = [];

  Array.from(word.answer).forEach((letter) => {
    if (letter === ' ') {
      const gap = document.createElement('span');
      gap.className = 'cell cell--gap';
      gap.setAttribute('aria-hidden', 'true');
      cells.append(gap);
      return;
    }

    const cell = document.createElement('div');
    cell.className = 'cell cell--active';

    const input = document.createElement('input');
    input.type = 'text';
    input.maxLength = 1;
    input.inputMode = 'text';
    input.autocomplete = 'off';
    input.autocapitalize = 'characters';
    input.spellcheck = false;
    input.dataset.row = String(index);
    input.dataset.index = String(inputs.length);
    input.setAttribute('aria-label', `Từ hàng ${index + 1}, chữ cái ${inputs.length + 1}`);
    input.setAttribute('aria-describedby', text.id);

    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleKeydown);
    input.addEventListener('focus', () => cell.classList.remove('cell--wrong', 'cell--correct'));

    cell.append(input);
    cells.append(cell);
    inputs.push(input);
  });

  row.append(clue, cells);

  return { element: row, inputs, answer: word.answer.replace(/ /g, '') };
}

function renderBoard() {
  const fragment = document.createDocumentFragment();
  rows = currentWords.map((word, index) => createRow(word, index));
  rows.forEach((row) => fragment.append(row.element));
  board.replaceChildren(fragment);

  boardTitle.textContent = `Chủ đề ${currentTopic.number}. ${currentTopic.title}`;
  statusMessage.textContent = '';
  statusMessage.className = 'status';
  confettiLayer.replaceChildren();
}

function focusInput(rowIndex, index) {
  rows[rowIndex]?.inputs[index]?.focus();
}

function handleInput(event) {
  const input = event.target;
  const value = input.value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(-1);
  input.value = value;

  const rowIndex = Number(input.dataset.row);
  const index = Number(input.dataset.index);

  if (value && index < rows[rowIndex].inputs.length - 1) {
    focusInput(rowIndex, index + 1);
  }
}

function handleKeydown(event) {
  const input = event.target;
  const rowIndex = Number(input.dataset.row);
  const index = Number(input.dataset.index);
  const lastIndex = rows[rowIndex].inputs.length - 1;

  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    focusInput(rowIndex, Math.max(0, index - 1));
    return;
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault();
    focusInput(rowIndex, Math.min(lastIndex, index + 1));
    return;
  }

  if (event.key === 'ArrowUp') {
    event.preventDefault();
    focusInput(Math.max(0, rowIndex - 1), 0);
    return;
  }

  if (event.key === 'ArrowDown') {
    event.preventDefault();
    focusInput(Math.min(rows.length - 1, rowIndex + 1), 0);
    return;
  }

  if (event.key === 'Backspace' && !input.value && index > 0) {
    event.preventDefault();
    const previousInput = rows[rowIndex].inputs[index - 1];
    previousInput.value = '';
    focusInput(rowIndex, index - 1);
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    checkAnswers();
  }
}

function getRowAnswer(row) {
  return row.inputs.map((input) => input.value.trim().toUpperCase()).join('');
}

function showStatus(message, type) {
  statusMessage.className = `status status--${type}`;
  statusMessage.textContent = message;
}

function markRow(row, isCorrect) {
  row.inputs.forEach((input, index) => {
    const cell = input.parentElement;
    const current = input.value.trim().toUpperCase();

    cell.classList.remove('cell--wrong', 'cell--correct');
    if (isCorrect || current === row.answer[index]) {
      cell.classList.add('cell--correct');
    } else if (current) {
      cell.classList.add('cell--wrong');
    }
  });
}

function createConfetti() {
  const prefersReducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  if (prefersReducedMotion) return;

  confettiLayer.replaceChildren();
  const colors = ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#b967ff', '#ff8fab'];

  for (let i = 0; i < 80; i += 1) {
    const piece = document.createElement('span');
    piece.className = 'confetti-piece';
    const startX = Math.random() * 100;
    const drift = (Math.random() * 2 - 1) * 120;
    piece.style.left = `${startX}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--x', '0px');
    piece.style.setProperty('--x-end', `${drift}px`);
    piece.style.animationDelay = `${Math.random() * 120}ms`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confettiLayer.append(piece);
  }

  window.setTimeout(() => confettiLayer.replaceChildren(), 1400);
}

function getScoreKey(topic) {
  return `${STORAGE_PREFIX}:topic-${topic.number}`;
}

function loadScore() {
  const score = Number(storage.get(getScoreKey(currentTopic)));
  savedScore.textContent = Number.isFinite(score) && score > 0 ? String(score) : '0';
}

function saveScore(score) {
  const best = Math.max(score, Number(storage.get(getScoreKey(currentTopic))) || 0);
  storage.set(getScoreKey(currentTopic), String(best));
  savedScore.textContent = String(best);
}

function checkAnswers() {
  const unfinished = rows.find((row) => getRowAnswer(row).length < row.answer.length);

  if (unfinished) {
    showStatus('Hãy điền đủ chữ cái cho tất cả các từ trước khi kiểm tra.', 'error');
    focusInput(rows.indexOf(unfinished), unfinished.inputs.findIndex((input) => !input.value));
    return;
  }

  let correctCount = 0;
  rows.forEach((row) => {
    const isCorrect = getRowAnswer(row) === row.answer;
    if (isCorrect) correctCount += 1;
    markRow(row, isCorrect);
  });

  const score = Math.round((correctCount / rows.length) * 100);
  saveScore(score);

  if (correctCount === rows.length) {
    showStatus(`Chính xác cả ${rows.length} từ! Em được ${score} điểm.`, 'success');
    createConfetti();
    return;
  }

  showStatus(`Đúng ${correctCount}/${rows.length} từ (${score} điểm). Hãy sửa lại những ô màu đỏ nhé.`, 'error');
}

function resetGame() {
  rows.forEach((row) => {
    row.inputs.forEach((input) => {
      input.value = '';
      input.parentElement.classList.remove('cell--correct', 'cell--wrong');
    });
  });

  statusMessage.textContent = '';
  statusMessage.className = 'status';
  confettiLayer.replaceChildren();
  focusInput(0, 0);
}

function startTopic(topic) {
  currentTopic = topic;
  currentWords = pickWords(topic);
  updateTopicPicker();
  renderBoard();
  loadScore();
}

if (topicPicker && board && boardTitle && checkButton && resetButton && shuffleButton && statusMessage && savedScore && confettiLayer) {
  checkButton.addEventListener('click', checkAnswers);
  resetButton.addEventListener('click', resetGame);
  shuffleButton.addEventListener('click', () => startTopic(currentTopic));

  renderTopicPicker();
  startTopic(currentTopic);
}
