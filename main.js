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

    isMatch ? disableCards() : unflipCards();    //if match
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


var timer = new Timer();                       //timer function
timer.start();
timer.addEventListener('secondsUpdated', function (e) {
    $('#countUp').html(timer.getTimeValues().toString());
});
    

