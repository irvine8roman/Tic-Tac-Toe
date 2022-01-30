let currentPlayer = "X";

// document.addEventListener("click", function (e) {
//   if (e.target.classList.contains("letter")) {
//     if (currentPlayer === "X" && e.target.children[0].innerHTML == "") {
//       e.target.children[0].innerHTML = "X";
//       checkWinner();
//       currentPlayer = "O";
//       document.querySelector(
//         "#player-turn"
//       ).innerHTML = `${currentPlayer}'s turn!`;
//     } else if (currentPlayer === "O" && e.target.children[0].innerHTML == "") {
//       e.target.children[0].innerHTML = "O";
//       currentPlayer = "X";
//       document.querySelector(
//         "#player-turn"
//       ).innerHTML = `${currentPlayer}'s turn!`;
//     } else {
//       console.log("What?");
//     }
//   }
// });

//Game logic. Listens to clicks in the divs and responds accordingly.

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("letter")) {
    if (currentPlayer === "X" && e.target.children[0].innerHTML == "") {
      e.target.children[0].innerHTML = "X";
      if (checkWinner()) {
      } else {
        currentPlayer = "O";
        document.querySelector(
          "#player-turn"
        ).innerHTML = `${currentPlayer}'s turn!`;
      }
    } else if (currentPlayer === "O" && e.target.children[0].innerHTML == "") {
      e.target.children[0].innerHTML = "O";
      if (checkWinner()) {
      } else {
        currentPlayer = "X";
        document.querySelector(
          "#player-turn"
        ).innerHTML = `${currentPlayer}'s turn!`;
      }
    } else {
      console.log("What?");
    }
  }
});

//Function to check for a winner adn if there is a tie. Every possible combination listed. Need to refractor.

function checkWinner() {
  if (
    (document.querySelector("#letter-one").innerHTML === "X" &&
      document.querySelector("#letter-two").innerHTML === "X" &&
      document.querySelector("#letter-three").innerHTML === "X") ||
    (document.querySelector("#letter-one").innerHTML === "O" &&
      document.querySelector("#letter-two").innerHTML === "O" &&
      document.querySelector("#letter-three").innerHTML === "O") ||
    (document.querySelector("#letter-four").innerHTML === "X" &&
      document.querySelector("#letter-five").innerHTML === "X" &&
      document.querySelector("#letter-six").innerHTML === "X") ||
    (document.querySelector("#letter-four").innerHTML === "O" &&
      document.querySelector("#letter-five").innerHTML === "O" &&
      document.querySelector("#letter-six").innerHTML === "O") ||
    (document.querySelector("#letter-seven").innerHTML === "X" &&
      document.querySelector("#letter-eight").innerHTML === "X" &&
      document.querySelector("#letter-nine").innerHTML === "X") ||
    (document.querySelector("#letter-seven").innerHTML === "O" &&
      document.querySelector("#letter-eight").innerHTML === "O" &&
      document.querySelector("#letter-nine").innerHTML === "O") ||
    (document.querySelector("#letter-one").innerHTML === "X" &&
      document.querySelector("#letter-four").innerHTML === "X" &&
      document.querySelector("#letter-seven").innerHTML === "X") ||
    (document.querySelector("#letter-one").innerHTML === "O" &&
      document.querySelector("#letter-four").innerHTML === "O" &&
      document.querySelector("#letter-seven").innerHTML === "O") ||
    (document.querySelector("#letter-two").innerHTML === "X" &&
      document.querySelector("#letter-five").innerHTML === "X" &&
      document.querySelector("#letter-eight").innerHTML === "X") ||
    (document.querySelector("#letter-two").innerHTML === "O" &&
      document.querySelector("#letter-five").innerHTML === "O" &&
      document.querySelector("#letter-eight").innerHTML === "O") ||
    (document.querySelector("#letter-three").innerHTML === "X" &&
      document.querySelector("#letter-six").innerHTML === "X" &&
      document.querySelector("#letter-nine").innerHTML === "X") ||
    (document.querySelector("#letter-three").innerHTML === "O" &&
      document.querySelector("#letter-six").innerHTML === "O" &&
      document.querySelector("#letter-nine").innerHTML === "O") ||
    (document.querySelector("#letter-one").innerHTML === "X" &&
      document.querySelector("#letter-five").innerHTML === "X" &&
      document.querySelector("#letter-nine").innerHTML === "X") ||
    (document.querySelector("#letter-one").innerHTML === "O" &&
      document.querySelector("#letter-five").innerHTML === "O" &&
      document.querySelector("#letter-nine").innerHTML === "O") ||
    (document.querySelector("#letter-three").innerHTML === "X" &&
      document.querySelector("#letter-five").innerHTML === "X" &&
      document.querySelector("#letter-seven").innerHTML === "X") ||
    (document.querySelector("#letter-three").innerHTML === "O" &&
      document.querySelector("#letter-five").innerHTML === "O" &&
      document.querySelector("#letter-seven").innerHTML === "O")
  ) {
    document.querySelector("#player-alert").classList = "alert alert-primary";
    document.querySelector(
      "#player-turn"
    ).innerHTML = `${currentPlayer} is the winner!`;
    return true;
  } else if (
    document.querySelector("#letter-one").innerHTML !== "" &&
    document.querySelector("#letter-two").innerHTML !== "" &&
    document.querySelector("#letter-three").innerHTML !== "" &&
    document.querySelector("#letter-four").innerHTML !== "" &&
    document.querySelector("#letter-five").innerHTML !== "" &&
    document.querySelector("#letter-six").innerHTML !== "" &&
    document.querySelector("#letter-seven").innerHTML !== "" &&
    document.querySelector("#letter-eight").innerHTML !== "" &&
    document.querySelector("#letter-nine").innerHTML !== ""
  ) {
    document.querySelector("#player-alert").classList = "alert alert-warning";
    document.querySelector("#player-turn").innerHTML = "It's a tie!";
    return true;
  }
}

// Event listener for the button to start a new game. Places the game back in the beginning state.

document.querySelector("#new-game").addEventListener("click", function () {
  currentPlayer = "X";
  document.querySelector("#player-alert").classList = "alert alert-secondary";
  document.querySelector("#player-turn").innerHTML = `${currentPlayer}'s turn!`;
  document.querySelector("#letter-one").innerHTML = "";
  document.querySelector("#letter-two").innerHTML = "";
  document.querySelector("#letter-three").innerHTML = "";
  document.querySelector("#letter-four").innerHTML = "";
  document.querySelector("#letter-five").innerHTML = "";
  document.querySelector("#letter-six").innerHTML = "";
  document.querySelector("#letter-seven").innerHTML = "";
  document.querySelector("#letter-eight").innerHTML = "";
  document.querySelector("#letter-nine").innerHTML = "";
});
