'use strict'
function game() {
   //to do draw the cards

    let cards = [];
    for (let i = 1; i < 9; i++) {
        cards.push([i]);
        cards.push([i]);
    }

    //to make timer which start counting after click on start button
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let startButton = document.getElementById('start');
    let totalSeconds = 0;
    let timer = null;

    
    startButton.addEventListener('click', startGame); 

    function startGame() {
    if (!timer) {
      timer = setInterval(setTime, 1000);
    }
  };

    function setTime() {
    ++totalSeconds;
    seconds.innerHTML = pad(totalSeconds % 60);
    minutes.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(value) {
    let valueString = value + "";
    if (valueString.length < 2) {
        return "0" + valueString;
    } else {
        return valueString;
    }
    }
    

    //shuffling cards
    cards = cards.sort(() => Math.random() - 0.5);

    //drawing the board
    for(let j = 0; j < 16; j++) document.getElementById('board').innerHTML += '<a card="' + cards[j] + '" class="card' + cards[j] + ' hidden"> </a>';

    //to do: check cards
    //on click card shows color, if another card click shows the same color status turns to open

        let check = false; 
        let selectedColor = 0; 
        let selectedElement;
        let openElement = 0;
        
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function(e) {
            let element = e.target;
            element.className = element.className.replace('hidden', '');

            setTimeout (function() {
                if (check) {
                    check = false;

                    if (element.getAttribute('card') == selectedColor) {
                        openElement++;
                        if (openElement === 8) {
                            alert('You win! Your time was ' + minutes.innerHTML + ':' + seconds.innerHTML);
                            location.reload();
                        }
                    }
                    else {
                        selectedElement.className += 'hidden'; 
                        element.className += 'hidden';
                    }
                }
                else {
                    selectedColor = element.getAttribute('card');
                    selectedElement = element;
                    check = true;
                }
            }, 200); 

        });
    };
    
    //add timer with start button

    




    //to do make the start button

    //make the counter
    //make the win alert 
};

game();
