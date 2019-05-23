'use strict'
function game() {
   //to do draw the cards

let cards = [];
for (let i = 1; i < 9; i++) {
    cards.push([i]);
    cards.push([i]);
}

//shuffling cards
cards = cards.sort(() => Math.random() - 0.5);

//to do draw the board
for(let j = 0; j < 16; j++) document.getElementById('board').innerHTML += '<a card="' + cards[j] + '" class="card' + cards[j] + ' hidden" card=""> </a>';




//to do make the start button

//make the counter
//make the win alert 
}

game();
