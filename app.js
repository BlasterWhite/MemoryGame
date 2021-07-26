console.log("App.js Loaded");
var card1 = '';
var card2 = '';
var matchNumber = 0;
var moves = 0;
var playable = true;

var cards = ['🍒', '👓', '🎱', '🦺', '🐘', '🐳', '🍓', '🐅', '🐳', '🥁', '🐅', '🍇', '🍓', '♟', '⚽️', '🍒', '🏈', '🏈', '🦺', '🎱', '⚽️', '👓', '🍇', '💡', '💡', '🧻', '🐘', '♟', '🧻', '🥁'];

//Shuffle the Array Below
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

function setCardsValue(caseDisplay) {
    document.getElementById(caseDisplay).innerHTML = cards[parseInt(caseDisplay)-1];
};

function choice(caseChoice) {
    //is the card hidden ?
    if(document.getElementById(caseChoice).innerHTML == '?' && playable == true){
        setCardsValue(caseChoice);
        if(card1 == '') {
            card1 = caseChoice;
        } else {
            card2 = caseChoice;
            //Moves played
            moves++;
            //console.log(document.getElementById(card1).innerHTML + ' AND ' + document.getElementById(card2).innerHTML);
            if(document.getElementById(card1).innerHTML == document.getElementById(card2).innerHTML){
                // Match !
                matchNumber++;
                //console.log('WIN');
                card1 = '';
                card2 = '';
                if(matchNumber == 15){
                    //console.log("THE GAME IS FINISH");
                    won();
                }
            } else {
                playable = false
                // No match
                //console.log('NOP');
                setTimeout(function() {
                    document.getElementById(card1).innerHTML = '?';
                    document.getElementById(card2).innerHTML = '?';
                    card1 = '';
                    card2 = '';
                    playable = true;
                }, 500);
            }
        }
    } else {
        return;
    }
};

function won() {
    document.getElementById('win').style.visibility = 'initial';
    document.getElementById('moves').innerText = 'You made it in ' + moves + ' moves !';
};

function restart() {
    card1 = '';
    card2 = '';
    matchNumber = 0;
    moves = 0;
    playable = true;
    shuffleArray(cards)
    document.getElementById('win').style.visibility = 'hidden';
    for (let i = 0; i < 30; i++) {
        document.getElementById(i+1).innerHTML = '?'
    }
}
shuffleArray(cards);