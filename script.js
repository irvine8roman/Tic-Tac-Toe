let startingPlayer = "X";

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("letter")) {
    if (startingPlayer === "X" && e.target.children[0].innerHTML == "") {
      e.target.children[0].innerHTML = "X";
      startingPlayer = "O";
    } else if (startingPlayer === "O" && e.target.children[0].innerHTML == "") {
      e.target.children[0].innerHTML = "O";
      startingPlayer = "X";
    } else {
      console.log("What?");
    }
  }
});
