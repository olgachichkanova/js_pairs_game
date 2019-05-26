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

    //drawing the board
    for(let j = 0; j < 16; j++) document.getElementById('board').innerHTML += '<a card="' + cards[j] + '" class="card' + cards[j] + ' hidden"> </a>';

    //to do: check cards
    //on click card shows color, if another card click shows the same color status turns to open

        let check = false; 
        let selectedColor = 0; 
        let selectedElement;
        let open = 0;;
        // let timer; 
    let a = document.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('click', function(e) {
            let element = e.target;
            element.className = element.className.replace('hidden', '');

            setTimeut (function() {
                if (check) {
                    check = false;

                    if (element.getAttribute('card') == selectedColor) {
                        open++;
                    }
                    else {
                        selectedElement.className += ' hidden'; 
                        element.className += ' hidden';
                    }
                }
                else {
                    selectedColor = element.getAttribute('card');
                    selectedElement = element;
                    check = true;
                }
            }, 100); 

        });
    };
    
    


    //to do make the start button

    //make the counter
    //make the win alert 
};

game();
