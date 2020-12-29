const options = ["rock", "paper", "scissor"];
let loses = 0;
let wins = 0;

function computerPlay() {
  const computerRandomChoose = Math.floor(Math.random() * options.length);
  const randomChoose = options[computerRandomChoose];
  return randomChoose;
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = prompt(`Type your weapon: rock, paper, or scissor`);
  if (playerSelection == "rock" && computerSelection == "rock") {
    alert("This round was a tie");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    alert("You lose this round, paper beats rock!");
    loses += 1;
  } else if (playerSelection == "rock" && computerSelection == "scissor") {
    alert("You won this round, rock beats scissor!");
    wins += 1;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    alert("This round was a tie");
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    alert("You won this round, paper beats rock!");
    wins += 1;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    alert("You lose this round, scissor beats paper!");
    loses += 1;
  } else if (playerSelection == "scissor" && computerSelection == "scissor") {
    alert("This round was a tie");
  } else if (playerSelection == "scissor" && computerSelection == "rock") {
    alert("You lose this round, rock beats scissor!");
    loses += 1;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    alert("You won this round, scissor beats paper!");
    wins += 1;
  }
}
// 
function game() {
 return playRound();
}
game();

window.onload = () => {
  document.querySelector('.restart').onclick = () => {
    game();
  }
}
 
