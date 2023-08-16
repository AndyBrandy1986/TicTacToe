function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("Please Enter correct player names");
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
  activeGameElement.style.display = "block";
}

function playerSelect() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerNameElement.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;
  if (gameField[selectedColumn][selectedRow] > 0) {
    alert("Please select an empty field");
    return;
  }
  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");
  gameField[selectedColumn][selectedRow] = activePlayer + 1;

  const winnerId = winnerCheck();
  console.log(winnerId);
  if (winnerId !== 0) {
    endGame(winnerId);
  }
  currentRound++;
  playerSelect();
}
function winnerCheck() {
  for (let i = 0; i < 3; i++) {
    if (
      gameField[i][0] > 0 &&
      gameField[i][0] === gameField[i][1] &&
      gameField[i][1] === gameField[i][2]
    ) {
      return gameField[i][0];
    }
  }
  for (let i = 0; i < 3; i++) {
    if (
      gameField[0][i] > 0 &&
      gameField[0][i] === gameField[0][i] &&
      gameField[0][i] === gameField[0][i]
    ) {
      return gameField[0][i];
    }
  }
  if (
    gameField[0][0] > 0 &&
    gameField[0][0] === gameField[1][1] &&
    gameField[1][1] === gameField[2][2]
  ) {
    return gameField[0][0];
  }
  if (
    gameField[2][0] > 0 &&
    gameField[2][0] === gameField[1][1] &&
    gameField[1][1] === gameField[0][2]
  ) {
    return gameField[2][0];
  }
  if (currentRound === 9) {
    return -1;
  }
  return 0;
}

function endGame(winnerId) {
  gameOverElement.style.display = "block";
  if (winnerId > 0) {
    const winnerName = players[winnerId - 1].name;
    gameOverElement.firstElementChild.firstElementChild.textContent =
      winnerName;
  } else {
    gameOverElement.firstElementChild.textContent = "It's a draw!";
  }
}
