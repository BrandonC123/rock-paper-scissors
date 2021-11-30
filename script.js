let decision;

function computerPlay () {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        decision = false;
        return 'You lose! Paper beats rock!';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        decision = true;
        return 'You win! Rock beats scissors!';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        decision = true;
        return 'You win! Paper beats rock!';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        decision = false;
        return 'You lose! Scissors beats paper!';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        decision = false;
        return 'You lose! Rock beats scissors!';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        decision = true;
        return 'You win! Scissors beats paper!';
    } else {
        return 'Tie!';
    }
}

function game () {
    let player = prompt('Please choose rock, paper, or scissors');
    let random = computerPlay();
    console.log(random + ' computer selection');
    console.log(playRound(player, random));
}

let playerScore = 0;
let computerScore = 0;
for (let i = 0; i < 5; i++) {
    game();
    if (decision == true) {
        playerScore++;
    } if (decision == false) {
        computerScore++;
    }
    console.log(playerScore + ' - ' + computerScore);
}
