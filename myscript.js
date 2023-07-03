let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let cpuChoice = undefined;
let player = 0;
let cpu = 0;
const array = ["rock", "paper", "scissors"];

/* Prompt user for input */
let playerSelection = prompt("Enter your choice: ");
playerSelection = playerSelection.toLowerCase();

/* Function to get random choice from cpu */
function getComputerChoice(arr) {
     
    const randInt = Math.floor(Math.random() * arr.length);
    const result = arr[randInt];
    return result;
}

const result = getComputerChoice(array);
console.log(result);
const computerSelection = result;

/* Function takes cpu choice and player choice, compares it and determines a winner */
function playRound (playerSelection, computerSelection) {

    if (((playerSelection == "rock") && (computerSelection == "rock")) || ((playerSelection == "paper") && (computerSelection == "paper")) || ((playerSelection == "scissors") && (computerSelection == "scissors"))) 
    {
        alert("It's a tie!");
    }
    
    else if (((playerSelection == "rock") && (computerSelection == "paper")) || ((playerSelection == "paper") && (computerSelection == "scissors")) || ((playerSelection == "scissors") && (computerSelection == "rock")))
    {
        cpu = cpu + 1;
        alert("You lose! Paper beats rock!");
    }
    
    else 
    {
        player += 1;
        alert("You win!");
    }

}

function game() {
    for (let i = 0; i < 5; i++)
    {
        playRound();
    }
    if (player > cpu)
    {
        alert("You are the winner of the game!");
    }

    else if (cpu > player) 
    {
        alert("You lose! Try again");
    }

    else 
    {
        alert("Its a tie!");
    }

}

game();
