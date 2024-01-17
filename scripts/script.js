
// Returns randomly rock, paper or scissors
function getComputerChoice() {

    let computerOptions = ["rock","paper","scissors"];

    // Returns a random option
    return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    
    // Compare the two values
    // Check who wins
    // Print message like "You Lose! Paper beats Rock"
    // Ties replay the round
  }
   
  const playerSelection = "rock"; // use prompt
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


  function game() {
  // Does a best of five games
  // Keeps the score
  // Print the result of each game
  // Prints if you win or lose at the end
  }