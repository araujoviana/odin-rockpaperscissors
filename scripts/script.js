let playerScoreValue = 0;
let computerScoreValue = 0;

const computerDisplayScore = document.querySelector('#computerDisplay');
const playerDisplayScore = document.querySelector('#playerDisplay');

const rockButtonSelection = document.querySelector('#rockButton');
const paperButtonSelection = document.querySelector('#paperButton');
const scissorsButtonSelection = document.querySelector('#scissorsButton');

function playRock() { playRound('Rock'); }
function playPaper() { playRound('Paper'); }
function playScissors() { playRound('Scissors'); }

rockButtonSelection.addEventListener('click', playRock);
paperButtonSelection.addEventListener('click', playPaper);
scissorsButtonSelection.addEventListener('click', playScissors);

const resultDisplayGroup = document.querySelector('.resultGroup');


// Returns randomly rock, paper or scissors
function getComputerChoice() { 
    const choiceOptionSelection = ["Rock","Paper","Scissors"];
    return choiceOptionSelection[Math.floor(Math.random() * choiceOptionSelection.length)];
}

// function convertToTitle(string) {
//     string = string.toLowerCase();
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }

function updateDisplayedScores() {
    computerDisplayScore.textContent = computerScoreValue;
    playerDisplayScore.textContent = playerScoreValue;
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {

    // The use of buttons makes the conversion useless
    // playerSelection = convertToTitle(playerSelection);
    
    // Tie
    if (playerSelection === computerSelection) {
        resultDisplayGroup.textContent =  "It's a tie!";
    } 
    
    // Could optimize this
    // Player wins
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        ++playerScoreValue;
        updateDisplayedScores();
        if (!(checkGameWinner())) {
            resultDisplayGroup.textContent =  "You Win! Rock beats Scissors";
        }
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++playerScoreValue;
        updateDisplayedScores();
        if (!(checkGameWinner())) {
            resultDisplayGroup.textContent =  "You Win! Paper beats Rock";
        }
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        ++playerScoreValue;
        updateDisplayedScores();
        if (!(checkGameWinner())) {
            resultDisplayGroup.textContent =  "You Win! Scissors beats Paper";
        }
    }

    // Computer wins
    else if (computerSelection == "Rock" && playerSelection == "Scissors") {
        ++computerScoreValue;
        updateDisplayedScores();
        if (!(checkGameWinner())) {
            resultDisplayGroup.textContent =  "You Lose! Rock beats Scissors";
        }
    }
    else if (computerSelection == "Paper" && playerSelection == "Rock") {
        ++computerScoreValue;
        updateDisplayedScores();
        if (!(checkGameWinner())) {
            resultDisplayGroup.textContent =  "You Lose! Paper beats Rock";
        }    
    }
    else if (computerSelection == "Scissors" && playerSelection == "Paper") {
        ++computerScoreValue;
        updateDisplayedScores();
        if (!(checkGameWinner())) {
           resultDisplayGroup.textContent =  "You Lose! Scissors beats Paper";
        }
        
    }

    //else {
    //    resultGroup.textContent =  "Invalid option!";
    //} 

  }

function checkGameWinner() {
    // Could also disable the buttons instead of removing the event listener
    if (playerScoreValue > 4) {
        resultDisplayGroup.textContent = 'The player wins!';
        rockButtonSelection.removeEventListener('click', playRock);
        paperButtonSelection.removeEventListener('click', playPaper);
        scissorsButtonSelection.removeEventListener('click', playScissors);
        return true;
    }
    else if (computerScoreValue > 4) {
        resultDisplayGroup.textContent = 'The computer wins!';
        rockButtonSelection.removeEventListener('click', playRock);
        paperButtonSelection.removeEventListener('click', playPaper);
        scissorsButtonSelection.removeEventListener('click', playScissors);
        return true;
    }
    return false;
}