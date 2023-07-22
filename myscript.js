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

        /* While loop incase user enters wrong choice */
        while ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")) {
            playerChoice = prompt("Please enter a valid choice: "); 
        }
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
    alert("It's a tie!");
    }

    /* Win condition*/
    else if (((playerSelection == "rock") && ((computerSelection == "scissors")) || ((playerSelection == "paper") && (computerSelection == "rock")) || ((playerSelection == "scissors") && computerSelection == "paper")))
    {
        player += 1;
        alert("You Win! " + playerSelection + " beats " + computerSelection);
    }

    /* Lose condition */
    else {
        cpu += 1;
        alert("You lose! " + playerSelection + " loses to " + computerSelection);
    }
}

function game() {

    /* Loop to play game 5 times */
    /* for (let i = 0; i < 5; i++)
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
    } */
}

game();

    