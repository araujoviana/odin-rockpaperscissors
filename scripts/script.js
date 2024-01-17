
// Returns randomly rock, paper or scissors
function getComputerChoice() {
    let computerOptions = ["rock","paper","scissors"];
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function convertToTitle(string) {
    return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
}

function playRound() {
    let playerSelection = prompt("Rock, Paper or Scissors?: ");
    let computerSelection = getComputerChoice();

    convertToTitle(playerSelection);
    convertToTitle(computerSelection);

    // Tie
    if (playerSelection === computerSelection) {
        return 2;
    }
    // Check who wins
    // Print message like "You Lose! Paper beats Rock"
    // Ties replay the round
  }
   
 


  console.log(playRound());


  function game() {
  // Does a best of five games
  // Keeps the score
  // Print the result of each game
  // Prints if you win or lose at the end
  }