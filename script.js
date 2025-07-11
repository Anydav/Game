const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playersDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;
function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result= "";

    if(playerChoice === computerChoice) {
        result = "It's a tie!";
    }else{
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greentext", "redtext");
    switch(result) {
        case "You win!":
            resultDisplay.classList.add("greentext")
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultDisplay.classList.add("redtext")
            computerScore++;
            computerScoreDisplay.textContent =computerScore;
            break;
        }
}