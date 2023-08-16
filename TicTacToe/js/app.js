const gameField = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;

const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const formElement = document.querySelector("form");
const cancelButtonElement = document.getElementById("cancel");

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");

const player1NameEditButton = document.getElementById("player-1-edit-btn");
const player2NameEditButton = document.getElementById("player-2-edit-btn");
const startNewGameButtonElement = document.getElementById("start-new-game-btn");
const gameFieldElements = document.querySelectorAll("#game-field li");

const allertMessage = document.getElementById("config-error");
const activeGameElement = document.getElementById("active-game");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

player1NameEditButton.addEventListener("click", openPlayerConfig);
player2NameEditButton.addEventListener("click", openPlayerConfig);

cancelButtonElement.addEventListener("click", closePlayerConfig);

backdropElement.addEventListener("click", clickBackdrop);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameButtonElement.addEventListener("click", startNewGame);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
