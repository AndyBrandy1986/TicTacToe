function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  allertMessage.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function clickBackdrop() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  allertMessage.textContent = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    allertMessage.textContent = "Please enter a valid Name!";
    return;
  }

  const updatedPlayerName = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerName.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
