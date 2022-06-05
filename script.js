/** Javascript for Rock, Paper, Scissors **/
/** Written by Autumn Arnold **/
/** Dated 6/4/2022 **/

var win = 0; 
var loss = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    let choice;

    switch(num) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        console.log("It's a tie!");
        return "It's a tie!";
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        win += 1;
        console.log("Congratulations! You win.");
        return "Congratulations! You win.";
    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        win += 1;
        console.log("Congratulations! You win.");
        return "Congratulations! You win.";
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        win += 1;
        console.log("Congratulations! You win.");
        return "Congratulations! You win.";
    }
    else {
        loss += 1;
        console.log("Sorry! You lose.");
        return "Sorry! You lose.";
    }
}


rock.addEventListener("click", () => {
    playRound("rock", computerPlay());
});

paper.addEventListener("click", () => {
    playRound("paper", computerPlay());
});

scissors.addEventListener("click", () => {
    playRound("scissors", computerPlay());
});