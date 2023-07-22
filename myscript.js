let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let player = 0;
let cpu = 0;
const array = ["rock", "paper", "scissors"];
let playerChoice = "";

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');

/* Function to get random choice from cpu */
function getComputerChoice(arr) {
     
    const randInt = Math.floor(Math.random() * arr.length);
    const result = arr[randInt];
    return result;
}

/* Prompt user for input */
function getPlayerChoice(playerChoice) {

    playerChoice = prompt("Enter your choice: "); 

    /* While loop incase user enters wrong choice */
    while ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")) {
        playerChoice = prompt("Please enter a valid choice: "); 
    }
    return playerChoice;
    }


/* Function takes player choice and cpu choice, compares it and determines a winner */
function playRound (playerSelection, computerSelection) {

    computerSelection = getComputerChoice(array);
    console.log("Cpu: " + computerSelection);
    
    playerSelection = getPlayerChoice(playerChoice);
    console.log("Player: " + playerSelection);
    const p = document.createElement('p');

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
    alert("It's a tie!");
    const p = document.createElement('p');
    p.innerText = `It's a tie ${playerSelection}`;
    }

    /* Win condition*/
    else if (((playerSelection == "rock") && ((computerSelection == "scissors")) || ((playerSelection == "paper") && (computerSelection == "rock")) || ((playerSelection == "scissors") && computerSelection == "paper")))
    {
        player += 1;
        alert("You Win! " + playerSelection + " beats " + computerSelection);
        const p = document.createElement('p'); 
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
    }

    /* Lose condition */
    else {
        cpu += 1;
        alert("You lose! " + playerSelection + " loses to " + computerSelection);
        const p = document.createElement('p');
        p.innerText = `You lose! ${playerSelection} loses to ${computerSelection}`;
    }
}

rockButton.addEventListener('click'); {
computerSelection = getComputerChoice(array);
playerSelection = "rock";
playRound(playerSelection, computerSelection);

}

/* function game() {

    // Loop to play game 5 times 
     for (let i = 0; i < 5; i++)
    {
        playRound();
    }

    if (player > cpu)
    {
        alert("You win the game!!!!!");
    }

    else if (cpu > player)
    {
        alert("You lose...");
    }

    else 
    {
        alert("It's a tie!");
    } 
}

  game();  */

    