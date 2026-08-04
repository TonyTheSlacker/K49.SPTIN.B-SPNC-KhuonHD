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

if (board && checkButton && resetButton && statusMessage && savedScore && confettiLayer) {
  const cellMap = [];

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

  function createBoard() {
    cellMap.length = 0;
    board.replaceChildren();

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
          input.inputMode = 'text';
          input.autocomplete = 'off';
          input.autocapitalize = 'characters';
          input.spellcheck = false;
          input.setAttribute('aria-label', `Ô chữ hàng ${row + 1}`);
          input.setAttribute('aria-describedby', 'statusMessage');
          input.dataset.index = String(row);

          if (row === 0) {
            const number = document.createElement('span');
            number.className = 'cell__number';
            number.textContent = '1';
            cell.append(number);
          }

          input.addEventListener('input', handleInput);
          input.addEventListener('keydown', handleKeydown);
          input.addEventListener('focus', () => cell.classList.remove('cell--wrong', 'cell--correct'));
          cell.append(input);
          cellMap.push(input);
        }

        board.append(cell);
      }
    }
  }

  function focusCell(index) {
    cellMap[index]?.focus();
  }

  function handleInput(event) {
    const input = event.target;
    const value = input.value.replace(/[^a-zA-Z]/g, '').toUpperCase().slice(-1);
    input.value = value;

    const index = Number(input.dataset.index);
    if (value && index < cellMap.length - 1) {
      focusCell(index + 1);
    }
  }

  function handleKeydown(event) {
    const input = event.target;
    const index = Number(input.dataset.index);

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      focusCell(Math.max(0, index - 1));
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      focusCell(Math.min(cellMap.length - 1, index + 1));
      return;
    }

    if (event.key === 'Backspace' && !input.value && index > 0) {
      event.preventDefault();
      const previousInput = cellMap[index - 1];
      previousInput.value = '';
      focusCell(index - 1);
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      checkAnswer();
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

  function saveScore() {
    storage.set(STORAGE_KEY, '100');
    savedScore.textContent = '100';
  }

  function loadScore() {
    const score = storage.get(STORAGE_KEY) === '100' ? '100' : '0';
    savedScore.textContent = score;
  }

  function checkAnswer() {
    const playerAnswer = getPlayerAnswer();

    if (playerAnswer.length < ANSWER.length) {
      showStatus('Hãy điền đủ 9 chữ cái trước khi kiểm tra.', 'error');
      markCells(false);
      focusCell(cellMap.findIndex((input) => !input.value));
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
    confettiLayer.replaceChildren();
    focusCell(0);
  }

  checkButton.addEventListener('click', checkAnswer);
  resetButton.addEventListener('click', resetGame);

  createBoard();
  loadScore();
}
