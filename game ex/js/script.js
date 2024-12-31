document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.querySelector('.game-board');
  const startButton = document.getElementById('start-game');
  const restartButton = document.getElementById('restart-game');
  const moveCounter = document.getElementById('move-counter');
  const timerDisplay = document.getElementById('timer');
  const progressBar = document.getElementById('progress-bar');
  const difficultySelect = document.getElementById('difficulty');
  const themeSelect = document.getElementById('theme');

  let cards = [];
  let flippedCards = [];
  let matches = 0;
  let moves = 0;
  let timer;
  let elapsedTime = 0;

  const themes = {
    animals: ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'],
    fruits: ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥭', '🍋'],
    numbers: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣']
  };

  function startGame() {
    resetGame();
    const difficulty = difficultySelect.value;
    const theme = themeSelect.value;
    const gridSize = parseInt(difficulty.split('x')[0]);
    const totalCards = gridSize * gridSize;

    cards = generateCards(totalCards, themes[theme]);
    shuffleArray(cards);

    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    renderBoard(cards);
    startTimer();
  }

  function resetGame() {
    clearInterval(timer);
    moves = 0;
    elapsedTime = 0;
    matches = 0;
    flippedCards = [];
    moveCounter.textContent = 'Moves: 0';
    timerDisplay.textContent = 'Time: 0:00';
    progressBar.value = 0;
    gameBoard.innerHTML = '';
  }

  function generateCards(totalCards, themeIcons) {
    const icons = [...themeIcons];
    while (icons.length * 2 < totalCards) {
      icons.push(...themeIcons);
    }
    return icons.slice(0, totalCards / 2).flatMap(icon => [icon, icon]);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function renderBoard(cards) {
    cards.forEach(icon => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">${icon}</div>
          <div class="card-back"></div>
        </div>`;
      card.addEventListener('click', () => flipCard(card));
      gameBoard.appendChild(card);
    });
  }

  function flipCard(card) {
    if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
      card.classList.add('flipped');
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        checkMatch();
      }
    }
  }

  function checkMatch() {
    const [card1, card2] = flippedCards;
    const isMatch =
      card1.querySelector('.card-front').textContent ===
      card2.querySelector('.card-front').textContent;

    if (isMatch) {
      matches++;
      flippedCards = [];
      updateProgress();
      if (matches === cards.length / 2) {
        clearInterval(timer);
        alert(`Congratulations! You completed the game in ${elapsedTime} seconds with ${moves} moves.`);
      }
    } else {
      setTimeout(() => {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        flippedCards = [];
      }, 1000);
    }

    moves++;
    moveCounter.textContent = `Moves: ${moves}`;
  }

  function updateProgress() {
    const totalPairs = cards.length / 2;
    progressBar.value = (matches / totalPairs) * 100;
  }

  function startTimer() {
    elapsedTime = 0;
    timerDisplay.textContent = 'Time: 0:00';
    timer = setInterval(() => {
      elapsedTime++;
      const minutes = Math.floor(elapsedTime / 60);
      const seconds = elapsedTime % 60;
      timerDisplay.textContent = `Time: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
  }

  startButton.addEventListener('click', startGame);
  restartButton.addEventListener('click', startGame);
});
