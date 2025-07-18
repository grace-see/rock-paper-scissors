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

let playerChoice = getHumanChoice();
console.log("my choice: "+playerChoice);
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());