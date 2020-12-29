const options = ["rock", "paper", "scissor"];

function computerPlay() {
  const computerRandomChoose = Math.floor(Math.random() * options.length);
  const randomChoose = options[computerRandomChoose];
  return randomChoose;
}
//
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt(`Type your weapon: rock, paper, or scissor`);
  if (playerSelection == "rock" && computerSelection == "rock") {
    alert("This round was a tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You lose this round");
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    alert("You won this round");
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    alert("This round was a tie");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You won this round");
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    alert("You lose this round");
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    alert("This round was a tie");
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    alert("You lose this round");
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    alert("You won this round");
  }
}

function game() {
  return playRound();
}