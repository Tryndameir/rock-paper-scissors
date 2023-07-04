let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let player = 0;
let cpu = 0;
const array = ["rock", "paper", "scissors"];
let playerChoice = "";


/* Function takes player choice and cpu choice, compares it and determines a winner */
function playRound (playerSelection, computerSelection) {

    /* Function to get random choice from cpu */
    function getComputerChoice(arr) {
     
    const randInt = Math.floor(Math.random() * arr.length);
    const result = arr[randInt];
    return result;
}
    computerSelection = getComputerChoice(array);
    console.log("Cpu: " + computerSelection);
    
    /* Prompt user for input */
    function getPlayerChoice(playerChoice) {

    playerChoice = prompt("Enter your choice: ");
    return playerChoice;
    }

    playerSelection = getPlayerChoice(playerChoice);
    console.log("Player: " + playerSelection);

    if (playerSelection == null)
    {
        alert("Cancelled");
    }

    else
    {
        playerSelection = playerSelection.toLowerCase();
    }

    if (((playerSelection == "rock") && (computerSelection == "rock")) || ((playerSelection == "paper") && (computerSelection == "paper")) || ((playerSelection == "scissors") && (computerSelection == "scissors"))) 
    {
    console.log("It's a tie!\n");
    }

    else {
        console.log("GG");
    }
}

playRound();

    