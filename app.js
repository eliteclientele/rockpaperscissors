const rock = "assets/rock.jpeg";
const paper = "assets/paper.jpg";
const scissors = "assets/scissors.jpg";
const defaultImg = "assets/placeholder.png";

let player01 = {};
let player02 = {};

let displayResult = document.getElementById('display-results');

const buttons = document.querySelectorAll('.button-grp button')
buttons.forEach(elem => { 
    elem.addEventListener('click', getSelection);
});

// calculate the results
document.getElementById('calcResults').addEventListener('click', calcResults);

// clear game
document.getElementById('reset').addEventListener('click', resetGame);

function getSelection(evt) {
    let placeholder = evt.target.parentElement.parentElement.firstElementChild.firstElementChild;
    let player = evt.target.parentElement.parentElement;
    let selection = this.textContent.toLowerCase();

    if(selection === 'rock') {
        placeholder.src = rock;
        if(player.id === 'player01') {
            player01.selection = 'Rock';
            return player01;
        } else {
            player02.selection = 'Rock';
            return player02;
        }
    } else if(selection === 'paper') {
        placeholder.src = paper;
        if(player.id === 'player01') {
            player01.selection = 'Paper';
            return player01;
        } else {
            player02.selection = 'Paper';
            return player02;
        }
    } else {
        placeholder.src = scissors;
        if(player.id === 'player01') {
            player01.selection = 'Scissors';
            return player01;
        } else {
            player02.selection = 'Scissors';
            return player02;
        }
    } 
}

function calcResults() {
    if(!(player01.selection && player02.selection)) {
        alert("both player must make a selection");
    }
    if ((player01.selection === 'Rock' && player02.selection === 'Scissors') || (player01.selection === 'Paper' && player02.selection === 'Rock') || (player01.selection === 'Scissors' && player02.selection === 'Paper')) {
        displayResult.textContent = `${player01.selection} beats ${player02.selection}. Player 1 wins`;
    }

    if ((player02.selection === 'Rock' && player01.selection === 'Scissors') || (player02.selection === 'Paper' && player01.selection === 'Rock') || (player02.selection === 'Scissors' && player01.selection === 'Paper')) {
        displayResult.textContent = `${player02.selection} beats ${player01.selection}. Player 2 wins`;
    }
    else {
        displayResult.textContent = "It's a draw";
    }
}

function resetGame() {
    displayResult.textContent = '';
    player01 = {};
    player02 = {};
    document.querySelectorAll('img').forEach(elem => elem.src = defaultImg);
}

