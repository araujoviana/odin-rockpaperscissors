let playerScore = 0;
let computerScore = 0;
const choiceOptions = ["Rock","Paper","Scissors"];

// Returns randomly rock, paper or scissors
function getComputerChoice() {
    
    return choiceOptions[Math.floor(Math.random() * choiceOptions.length)];
}

function convertToTitle(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {

    playerSelection = convertToTitle(playerSelection);
    
    // Tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } 
    
    // Could optimize this
    // Player wins
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        ++playerScore;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++playerScore;
        return "You Win! Paper beats Rock";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        ++playerScore;
        return "You Win! Scissors beats Paper";
    }

    // Computer wins
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        ++computerScore;
        return "You Lose! Rock beats Scissors"
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        ++computerScore;
        return "You Lose! Paper beats Rock"
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        ++computerScore;
        return "You Lose! Scissors beats Paper"
    }

    else {
        return "Invalid option!";
    } 

  }
   
  function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?: ");
        let computerSelection = getComputerChoice();  

        let gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);
        
        // Tie rounds are replayed
        if (gameResult == "It's a tie!" || gameResult == "Invalid option!") {
            --i; 
        }
  
    }

    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You Lose");
    }
  }

  game();