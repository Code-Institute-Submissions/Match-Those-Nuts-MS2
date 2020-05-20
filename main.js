const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
    

  this.classList.add('flip');

  if (!hasFlippedCard) {                //first card clicked
     hasFlippedCard = true;
     firstCard = this;
    
    return;
}

secondCard = this;                      //second card clicked
checkForMatch();
}

function checkForMatch() {              //card matching 
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
        isMatch ? disableCards() : unflipCards(); 
        moveCounter++;
        $('#moves').html(moveCounter);   //if match
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);     //removes event listener if cards match
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {                            //not a match, removes flip from front, to back.
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();                               //amount of time between clicks before flip back
  }, 1000);
}

function resetBoard() {                         //
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {                           //shuffling function
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();                                           //immediately invoked function, so cards shuffle at beginning

cards.forEach(card => card.addEventListener('click', flipCard));


var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
}


/* Refreshes page on click */
function refreshPage(){
    window.location.reload();
} 

var i = 0;

function Count() {
    document.getElementById("output").innerHTML = i++ +1;
}



