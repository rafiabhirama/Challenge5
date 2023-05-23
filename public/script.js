const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "draw";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function playGame(playerChoice) {
  let computerChoice = getComputerChoice();
  let result = determineWinner(playerChoice, computerChoice);
  console.log("hasil", result);
  let resultDisplay = document.getElementById("result-display");
  let imgSrc = "";

  if (result === "win") {
    imgSrc = "assets/img/WIN.png";
  } else if (result === "lose") {
    imgSrc = "assets/img/COM.png";
  } else {
    imgSrc = "assets/img/DRAW.png";
  }

  resultDisplay.innerHTML = '<img src="' + imgSrc + '" alt="Result">';

  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

function resetGame() {
  let resultDisplay = document.getElementById("result-display");
  resultDisplay.innerHTML = "VS";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
}

document.getElementById("reset-button").addEventListener("click", resetGame);
