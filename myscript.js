let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let player = 0;
let cpu = 0;
const array = ["rock", "paper", "scissors"];
let playerSelection = "";



/* Function to get random choice from cpu */
function getComputerChoice(arr) {
     
    const randInt = Math.floor(Math.random() * arr.length);
    const result = arr[randInt];
    return result;
}

const computerSelection = getComputerChoice(array);
console.log("cpu: " + computerSelection);


/* Function takes cpu choice and player choice, compares it and determines a winner */
function playRound (playerSelection, computerSelection) {

    /* Prompt user for input */
    playerSelection = prompt("Enter your choice: ");let playerSelection = "";
    console.log("Player: " + playerSelection);

    if (playerSelection == null)
    {
        alert("Cancelled");
    }

    else
    {
        playerSelection = playerSelection.toLowerCase();
    }

    if (playerSelection == "rock" && computerSelection == "rock") 
    {
    console.log("It's a tie!\n");
    }

    else {
        console.log("GG");
    }
}

playRound();

    