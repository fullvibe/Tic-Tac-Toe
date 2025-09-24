const fields = document.querySelectorAll(".board__field");
const [xValue, drawValue, oValue] = document.querySelectorAll(".board__value");
const modal = document.querySelector(".modal");
const modalTitle = document.querySelector(".modal__title");
const modalBtn = document.querySelector(".modal__btn");
let player = "x";
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

modalBtn.addEventListener("click", resetGame);

fields.forEach((field) => {
  field.addEventListener("click", () => {
    if (field.innerHTML === "") {
      field.innerHTML = player;
      field.classList.add(player);
      checkWin();
      if (player === "x") {
        player = "o";
      } else {
        player = "x";
      }
    }
  });
});

function checkWin() {
  winCombinations.forEach((win) => {
    const [index1, index2, index3] = win;
    if (
      fields[index1].innerHTML === player &&
      fields[index2].innerHTML === player &&
      fields[index3].innerHTML === player
    ) {
      showModal(`Player ${player} win!`);
      calcScore(player);
      return;
    }
  });
  let isDraw = true;

  fields.forEach((field) => {
    if (field.innerHTML === "") {
      isDraw = false;
    }
  });
  if (isDraw) {
    showModal("Draw!");
    calcScore();
  }
}
function showModal(text) {
  modalTitle.innerHTML = text;
  modal.classList.add("modal__open");
}
function resetGame() {
  modal.classList.remove("modal__open");
  fields.forEach((field) => {
    field.innerHTML = "";
    field.classList.remove("x", "o");
  });
  player = "x";
}
function calcScore(player) {
  if (player === "x") {
    xValue.innerHTML = +xValue.innerHTML + 1;
  } else if (player === "o") {
    oValue.innerHTML = +oValue.innerHTML + 1;
  } else {
    drawValue.innerHTML = +drawValue.innerHTML + 1;
  }
}
