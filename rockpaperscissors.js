function getComputerChoice() {
    let choice = Math.random() * 10;
    if (choice < 3)
        return "rock";
    else if (choice < 6)
        return "paper";
    else
        return "scissors";
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());