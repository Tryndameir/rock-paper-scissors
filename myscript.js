/* Function to get random choice from cpu */
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let cpuChoice = undefined;
const array = ["rock", "paper", "scissors"];
function getComputerChoice(arr) {
     
    const randInt = Math.floor(Math.random() * arr.length);
    const result = arr[randInt];
    return result;
}

const result = getComputerChoice(array);
console.log(result);


