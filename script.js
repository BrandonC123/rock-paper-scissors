//Generate random number and use it to determine rock/paper/scissors
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

//Using two parameters determine win/lose/tie and returns appropriate message
let decision;
function playRound (playerSelection, computerSelection) {
    decision = null;
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
    } else if (playerSelection === computerSelection) {
        return 'Tie!';
    } else {
        return 'Not an option';
    }
}

//Game function to prompt user for input and runs playRound with a random computer entry
function game () {
    let player = prompt('Please choose rock, paper, or scissors');
    let random = computerPlay();
    // console.log(player + ' player selection')
    // console.log(random + ' computer selection');
    console.log(playRound(player, random));
}

//Score variables and for loop to loop through game 5 times and display score each time
// let playerScore = 0;
// let computerScore = 0;
// for (let i = 0; i < 5; i++) {
//     game();
//     if (decision == true) {
//         playerScore++;
//     } if (decision == false) {
//         computerScore++;
//     }
//     console.log(playerScore + ' - ' + computerScore);
// }

let resultsDivText;
let compSelect;
const resultsDiv = document.querySelector('#result');

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
    let compSelect = computerPlay();
    resultsDiv.textContent = playRound('rock', compSelect);
    console.log('r');
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
    let compSelect = computerPlay();
    resultsDiv.textContent = playRound('paper', compSelect);
    console.log('p');
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
    let compSelect = computerPlay();
    resultsDiv.textContent = playRound('scissors', compSelect);
    console.log('scis');
});





// function playRound (playerSelection, computerSelection) {
//     if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
//         console.log('You lose! Paper beats rock!');
//         return false;
//     } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
//         console.log('You win! Rock beats scissors!');
//         return true;
//     } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
//         console.log('You win! Paper beats rock!');
//         return true;
//     } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
//         console.log('You lose! Scissors beats paper!');
//         return false;
//     } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
//         console.log('You lose! Rock beats scissors!');
//         return false;
//     } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
//         console.log('You win! Scissors beats paper!');
//         return true;
//     } else if (playerSelection === computerSelection) {
//         console.log('Tie!');
//     } else {
//         console.log('Not an option');
//     }
// }
