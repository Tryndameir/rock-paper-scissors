let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let player = 0;
let cpu = 0;
const array = ["rock", "paper", "scissors"];

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
//function getPlayerChoice(playerChoice) {

        

    /* While loop incase user enters wrong choice */
    //while ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")) {
      //  playerChoice = prompt("Please enter a valid choice: "); 
    //}
   // return playerSelection;
    //} 


/* Function takes player choice and cpu choice, compares it and determines a winner */
function playRound (playerSelection, computerSelection) {

    computerSelection = getComputerChoice(array);

    if (playerSelection != null)
    {
        playerSelection = playerSelection.toLowerCase();
    }

    if (((playerSelection == "rock") && (computerSelection == "rock")) || ((playerSelection == "paper") && (computerSelection == "paper")) || ((playerSelection == "scissors") && (computerSelection == "scissors"))) 
    {
    const p = document.createElement('p');
    p.innerText = `It's a tie ${playerSelection}`;
    outcomeDiv.appendChild(p);
    }

    /* Win condition*/
    else if (((playerSelection == "rock") && ((computerSelection == "scissors")) || ((playerSelection == "paper") && (computerSelection == "rock")) || ((playerSelection == "scissors") && computerSelection == "paper")))
    {
        player += 1;
        const p = document.createElement('p'); 
        p.innerText = `You win! ${playerSelection} beats ${computerSelection}`;
        outcomeDiv.appendChild(p);
    }

    /* Lose condition */
    else if (((playerSelection == "rock") && ((computerSelection == "paper")) || ((playerSelection == "paper") && (computerSelection == "scissors")) || ((playerSelection == "scissors") && computerSelection == "rock")))
    {
        cpu += 1;
        const p = document.createElement('p');
        p.innerText = `You lose! ${playerSelection} loses to ${computerSelection}`;
        outcomeDiv.appendChild(p);
    }
}

    rockButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(array);
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    })
    
    paperButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(array);
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    })
    
    scissorsButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(array);
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    })

playRound();



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

    