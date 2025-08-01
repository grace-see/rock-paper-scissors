function getComputerChoice() {
    let choice = Math.random() * 10;
    if (choice < 3)
        return "rock";
    else if (choice < 6)
        return "paper";
    else
        return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (hasWon) //One player has hit 5 points, so stop playing the game
        return;
    if (humanChoice === computerChoice) {
        roundMessage.textContent = "Tie!";
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            roundMessage.textContent = "You lose! Paper beats Rock.";
            computerScoreBoard.textContent = "Computer's Score: " + ++computerScore;
        }
        else if (computerChoice === "scissors") {
            roundMessage.textContent = "You win! Rock beats Scissors.";
            humanScoreBoard.textContent = "Player's Score: " + ++humanScore;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            roundMessage.textContent = "You win! Paper beats Rock.";
            humanScoreBoard.textContent = "Player's Score: " + ++humanScore;
        }
        else if (computerChoice === "scissors") {
            roundMessage.textContent = "You lose! Scissors beats Paper.";
            computerScoreBoard.textContent = "Computer's Score: " + ++computerScore;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            roundMessage.textContent = "You lose! Scissors beats Rock.";
            computerScoreBoard.textContent = "Computer's Score: " + ++computerScore;
        }
        else if (computerChoice === "paper") {
            roundMessage.textContent = "You win! Scissors beats Paper.";
            humanScoreBoard.textContent = "Player's Score: " + ++humanScore;
        }
    }
    checkWin();
}

function checkWin() {
    if (humanScore >= 5) {
        roundMessage.textContent = "You win!";
        hasWon = true;
    }
    else if (computerScore >= 5) {
        roundMessage.textContent = "You lose.";
        hasWon = true;
    }
}

let humanScore = 0;
let computerScore = 0;
let hasWon = false;

//add event listeners to the buttons
const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

//add in round results and current score of both players
const resultsDiv = document.querySelector("#results");
const roundMessage = document.createElement("p");
resultsDiv.appendChild(roundMessage);
const humanScoreBoard = document.createElement("p");
humanScoreBoard.textContent = "Player's Score: 0";
const computerScoreBoard = document.createElement("p");
computerScoreBoard.textContent = "Computer's Score: 0";
resultsDiv.appendChild(humanScoreBoard);
resultsDiv.appendChild(computerScoreBoard);