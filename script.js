/** Javascript for Rock, Paper, Scissors **/
/** Written by Autumn Arnold **/
/** Dated 6/4/2022 **/

var win = 0; 
var loss = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("#results");
const playerResult = document.createElement("p");
const score = document.createElement("p");

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
        playerResult.textContent = "It's a tie!";
        score.textContent = "Number of wins: " + win + ", Number of losses: " + loss;
        results.appendChild(playerResult);
        results.appendChild(score);
    }
    else if(playerSelection == "paper" && computerSelection == "rock") {
        win += 1;
        playerResult.textContent = "Congratulations! You win.";
        score.textContent = "Number of wins: " + win + ", Number of losses: " + loss;
        results.appendChild(playerResult);
        results.appendChild(score);
    }
    else if(playerSelection == "rock" && computerSelection == "scissors") {
        win += 1;
        playerResult.textContent = "Congratulations! You win.";
        score.textContent = "Number of wins: " + win + ", Number of losses: " + loss;
        results.appendChild(playerResult);
        results.appendChild(score);
    }
    else if(playerSelection == "scissors" && computerSelection == "paper") {
        win += 1;
        playerResult.textContent = "Congratulations! You win.";
        score.textContent = "Number of wins: " + win + ", Number of losses: " + loss;
        results.appendChild(playerResult);
        results.appendChild(score);
    }
    else {
        loss += 1;
        playerResult.textContent = "Sorry! You lose.";
        score.textContent = "Number of wins: " + win + ", Number of losses: " + loss;
        results.appendChild(playerResult);
        results.appendChild(score);
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

