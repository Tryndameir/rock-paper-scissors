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
const resetButton = document.querySelector('.reset');
const playerScoreSpan = document.querySelector('.player-score');
const cpuScoreSpan = document.querySelector('.cpu-score');


/* Function to get random choice from cpu */
function getComputerChoice(arr) {
     
    const randInt = Math.floor(Math.random() * arr.length);
    const result = arr[randInt];
    return result;
}


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
    p.innerText = `It's a tie`;
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

const updateScore = (player, cpu) => {
    playerScoreSpan.innerText = `Player: ${player}`;
    cpuScoreSpan.innerText = `Cpu: ${cpu}`;
}

    const winner = (player, cpu) => {
        if (player == 5)
        {
            const h2 = document.createElement('h2');
            h2.innerText = `You won the game!`;
            outcomeDiv.appendChild(h2);
        }

        if (cpu == 5) {
            const h2 = document.createElement('h2');
            h2.innerText = `You lost the game..`;
            outcomeDiv.appendChild(h2);
        }
    }

    rockButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(array);
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    winner(player, cpu);
    updateScore(player, cpu);
    })
    
    paperButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(array);
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    winner(player, cpu);
    updateScore(player, cpu);

    })
    
    scissorsButton.addEventListener('click', () => {
    computerSelection = getComputerChoice(array);
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    winner(player, cpu);
    updateScore(player, cpu);

    })

    resetButton.addEventListener('click', () => {
        window.location.reload();
    })

playRound();


    