
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
    
    // Could optimize this
    // Player wins
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return 0;
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return 0;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return 0;
    }

    // Computer wins
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        return 1;
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        return 1;
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        return 1;
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