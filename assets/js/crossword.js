const ANSWER = 'THUDIENTU';
const GRID_SIZE = 9;
const ACTIVE_COLUMN = 4;
const STORAGE_KEY = 'crosswordScore';

const board = document.getElementById('crosswordBoard');
const checkButton = document.getElementById('checkButton');
const resetButton = document.getElementById('resetButton');
const statusMessage = document.getElementById('statusMessage');
const savedScore = document.getElementById('savedScore');
const confettiLayer = document.getElementById('confettiLayer');

const cellMap = [];

function createBoard() {
  board.innerHTML = '';

  for (let row = 0; row < GRID_SIZE; row += 1) {
    for (let col = 0; col < GRID_SIZE; col += 1) {
      const isActive = col === ACTIVE_COLUMN;
      const cell = document.createElement('div');
      cell.className = isActive ? 'cell cell--active' : 'cell';
      cell.dataset.row = String(row);
      cell.dataset.col = String(col);

      if (isActive) {
        const input = document.createElement('input');
        input.type = 'text';
        input.maxLength = 1;
        input.setAttribute('inputmode', 'text');
        input.setAttribute('aria-label', `Ô ${row + 1}`);
        input.dataset.index = String(row);

        if (row === 0) {
          const number = document.createElement('span');
          number.className = 'cell__number';
          number.textContent = '1';
          cell.appendChild(number);
        }

        input.addEventListener('input', handleInput);
        input.addEventListener('keydown', handleKeydown);
        input.addEventListener('focus', () => cell.classList.remove('cell--wrong'));
        cell.appendChild(input);
        cellMap.push(input);
      }

      board.appendChild(cell);
    }
  }
}

function handleInput(event) {
  const input = event.target;
  const value = input.value.replace(/[^a-zA-ZđĐ]/g, '').toUpperCase().slice(-1);
  input.value = value;

  const index = Number(input.dataset.index);
  const nextInput = cellMap[index + 1];
  if (value && nextInput) {
    nextInput.focus();
  }
}

function handleKeydown(event) {
  const input = event.target;
  const index = Number(input.dataset.index);

  if (event.key === 'Backspace' && !input.value && index > 0) {
    const previousInput = cellMap[index - 1];
    previousInput.focus();
    previousInput.value = '';
  }
}

function getPlayerAnswer() {
  return cellMap.map((input) => input.value.trim().toUpperCase()).join('');
}

function showStatus(message, type) {
  statusMessage.className = `status status--${type}`;
  statusMessage.textContent = message;
}

function markCells(isCorrect) {
  cellMap.forEach((input, index) => {
    const cell = input.parentElement;
    const correct = ANSWER[index];
    const current = input.value.trim().toUpperCase();

    cell.classList.remove('cell--wrong', 'cell--correct');
    if (isCorrect || current === correct) {
      cell.classList.add('cell--correct');
    } else if (current) {
      cell.classList.add('cell--wrong');
    }
  });
}

function createConfetti() {
  confettiLayer.innerHTML = '';
  const colors = ['#ff6b6b', '#ffd93d', '#6bcB77', '#4d96ff', '#b967ff', '#ff8fab'];

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
    confettiLayer.appendChild(piece);
  }

  window.setTimeout(() => {
    confettiLayer.innerHTML = '';
  }, 1400);
}

function saveScore() {
  localStorage.setItem(STORAGE_KEY, '100');
  savedScore.textContent = '100';
}

function loadScore() {
  const score = localStorage.getItem(STORAGE_KEY) || '0';
  savedScore.textContent = score;
}

function checkAnswer() {
  const playerAnswer = getPlayerAnswer();

  if (playerAnswer.length < ANSWER.length) {
    showStatus('Hãy điền đủ 9 chữ cái trước khi kiểm tra.', 'error');
    markCells(false);
    return;
  }

  if (playerAnswer === ANSWER) {
    showStatus('Chính xác rồi! Em đã giải đúng ô chữ.', 'success');
    markCells(true);
    saveScore();
    createConfetti();
    return;
  }

  showStatus('Chưa đúng. Hãy kiểm tra lại từng chữ cái.', 'error');
  markCells(false);
}

function resetGame() {
  cellMap.forEach((input) => {
    input.value = '';
    input.parentElement.classList.remove('cell--correct', 'cell--wrong');
  });

  statusMessage.textContent = '';
  statusMessage.className = 'status';
  confettiLayer.innerHTML = '';
  cellMap[0]?.focus();
}

checkButton.addEventListener('click', checkAnswer);
resetButton.addEventListener('click', resetGame);

createBoard();
loadScore();
cellMap[0]?.focus();