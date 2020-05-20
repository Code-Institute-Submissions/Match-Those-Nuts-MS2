const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let moveCounter = 0;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
    

  this.classList.add('flip');

  if (!hasFlippedCard) {                        //first card clicked
     hasFlippedCard = true;
     firstCard = this;
    
    return;
}

secondCard = this;                              //second card clicked
checkForMatch();
}

 function checkForMatch() {
        let isMatch = firstCard.dataset.image === secondCard.dataset.image;
        isMatch ? disableCards() : unflipCards();
        moveCounter++;
        $('#moves').html(moveCounter);
        
    }

function disableCards() {
    firstCard.removeEventListener('click', flipCard);     //removes event listener if cards match
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {                          //not a match, removes flip from front, to back.
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();                               //amount of time between clicks before flip back
  }, 1000);
}

function resetBoard() {                         
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



                                                // Refreshes page on click
function refreshPage(){
    window.location.reload();
    moveCounter = 0;
} 

                                                // Timer Function
var c = 0;
function myCounter() {
  document.getElementById("demo").innerHTML =  ++c;
}
// Timer function does not work well. Does not stop when all cards flipped. However, I still wanted to put it in the game, just to see if I could. 
// The actual game is centered around the amount of moves, not timer. I hope to have the knowledge to update the game with a proper working timer in the near future.
// I did not want to do a countdown timer, as everyone else seemed to have one. 


