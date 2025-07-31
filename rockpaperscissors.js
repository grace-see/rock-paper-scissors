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
    if (humanChoice === computerChoice) {
        console.log("Tie!");
        return;
    }
    if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("You lose! Paper beats Rock.");
            return "c";
        }
        else if (computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors.");
            return "h";
        }
    }
    else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats Rock.");
            return "h";
        }
        else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            return "c";
        }
    }
    else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Scissors beats Rock.");
            return "c";
        }
        else if (computerChoice === "paper") {
            console.log("You win! Scissors beats Paper.");
            return "h";
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice, computerChoice;
    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        let winner = playRound(humanChoice, computerChoice);
        switch (winner) {
            case "c":
                computerScore++;
                break;
            case "h":
                humanScore++;
                break;
        }
    }
}

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

//play the game
playGame();