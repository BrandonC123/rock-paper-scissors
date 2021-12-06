//Generate random number and use it to determine rock/paper/scissors
function computerPlay () {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        document.getElementById('imgCompSelect').src = './images/rock.png';
        return 'rock';
    } else if (randomNumber === 1) {
        document.getElementById('imgCompSelect').src = './images/paper.png';
        return 'paper';
    } else {
        document.getElementById('imgCompSelect').src = './images/scissorComp.png';
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

let playerScore = 0;
let compScore = 0;
function scoreCounter () {
    if (decision == true) {
        playerScore++;
    } 
    if (decision == false) {
        compScore++;
    }
    if (playerScore == 5) {
        resetGame();
        return 'Player winner!';
    } else if (compScore == 5) {
        resetGame();
        return 'Computer winner!';
    }
    return playerScore + ' - ' + compScore;
}

function playerImage (selection) {
    if (selection === 'rock') {
        document.getElementById('imgPlayerSelect').src = './images/rock.png';
    } else if (selection === 'paper') {
        document.getElementById('imgPlayerSelect').src = './images/paper.png';
    } else {
        document.getElementById('imgPlayerSelect').src = './images/scissor.png';
    }
}

function resetGame () {
    playerScore = 0;
    compScore = 0;
    decision = null;
    document.getElementById('imgPlayerSelect').src = '';
    document.getElementById('imgCompSelect').src = '';
    scoreDiv.textContent = scoreCounter();
}

let resultsDivText;
const resultsDiv = document.querySelector('#result');
const scoreDiv = document.querySelector('#score');

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
    resultsDiv.textContent = playRound('rock', computerPlay());
    playerImage('rock');
    scoreDiv.textContent = scoreCounter();
    console.log('r');
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
    resultsDiv.textContent = playRound('paper', computerPlay());
    playerImage('paper');
    scoreDiv.textContent = scoreCounter();
    console.log('p');
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
    resultsDiv.textContent = playRound('scissors', computerPlay());
    playerImage('scissor');
    scoreDiv.textContent = scoreCounter();
    console.log('scis');
});

const resetBtn = document.querySelector('#reset-btn');
resetBtn.addEventListener('click', () => { 
    resetGame();
});