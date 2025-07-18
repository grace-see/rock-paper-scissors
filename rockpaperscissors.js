function getComputerChoice() {
    let choice = Math.random() * 10;
    if (choice < 3)
        return "rock";
    else if (choice < 6)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice() {
    let choice = window.prompt("Enter a choice: rock, paper, or scissors");
    switch (choice.toLowerCase()) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            console.log("Tie! Rock doesn't beat Rock.");
        }
        else if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice === "paper") {
            console.log("Tie! Paper doesn't beat Paper.");
        }
        else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Scissors beats Rock.");
            computerScore++;
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
        else if (computerChoice === "scissors") {
            console.log("Tie! Scissors doesn't beat Scissors.");
        }
    }
}

//Scores for the game
let humanScore = 0;
let computerScore = 0;

let playerChoice = getHumanChoice();
console.log("my choice: "+playerChoice);
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());