# Match Those Nuts!

## About

The purpose of this game was to create and build a single webpage. A card matching game that is super colorful and fun to play. The overall purpose of this game was to showcase my Javascript skills I've learned recently through Code Academy. 

I specifically chose this game because the central theme of revolves around doughnuts. That's important to me since I actually work in a doughnut shop and want to showcase this game in the future in the shop as a way for customers to engage with us and our products. The idea is for people to play the game and whoever solved it the fastest or under a certain amount of clicks would win a prize.
Therefore, all the photos used in this game are from the actual doughnuts we sell in the shop and all the flavours of doughnuts we make.

## Important
Timer function does not work well. Does not stop when all cards flipped. However, I still wanted to put it in the game, just to see if I could. 
The actual game is centered around the amount of moves, not timer. I hope to have the knowledge to update the game with a proper working timer in the near future.
I did not want to do a countdown timer, as everyone else seemed to have one.
The game should be run on a large screen format. It was specifically made for running on bigger screens as it's to be used as a promotional event at My Ugly Baby (coffee and doughnut shop in Oslo).
The reason it can't be formatted for smaller screens is that due to the amount of cards used (to make it difficult enough so it's not too easily solved),
there was no viable way to make all the cards fit down into smaller screens. 

## UX

### User Stories
* The user can see the instructions on the left side of the game. They can play a game right away to practice or start the timer and go for a timed run. 
* The user should be able to click any of the cards which are facing down to flip it over and try to find the right pairs. 
* The user should be able to find all 10 pairs with clicking on the cards.
* The user cannot flip another card (3rd card) while the 2 flipped cards are being determined as a pair or not. 
* The user should be able to start a timer any time they like by pressing the "Start Timer" button.
* The user can reload the page any time they like or want to try again by pressing the button "Reload Page".


## Technologies Used
* HTML
* CSS
* JavaScript - card flipping
* Jquery  - moves counter
* [Google Fonts](https://fonts.google.com) - font for game
* [Bootstrap 4](https://getbootstrap.com/)
* [GitHub Desktop](https://desktop.github.com/)
* [Font awesome](https://fontawesome.com/)

## Features
### Existing Features
* Game - can be played right away or by starting a timer. 
* Buttons - various buttons for starting timer and reloading page.

### Features Left to Implement
* Click Counter - counter for clicks during the game.
* Pop up modal - At the end of game, a modal would pop up with the info (timer and clicks), with a restart button.



## Testing

Developed on Macbook Air with Chrome Browser

Game was tested on:
* Macbook Air
* Ipad Pro (meant to be played on this)
* Imac 21.5"

Chrome Developer Tools was used to make sure game worked properly.
Several friends were asked to solve game, error check.

Manual testing:
Clicked on overlay over the whole window area with no error
Clicking multiple cards at once.
Checking for grammar, syntax and spelling mistakes in game, code or comments.


## Code Validation
* Validated the HTML code with [W3C](https://validator.w3.org/#validate_by_input) and no significant error found.
* Validated the CSS code with [W3C](https://jigsaw.w3.org/css-validator/#validate_by_input) and no error found.

## Deployment
This project is hosted using GitHub pages, deployed from the master branch. The site will update automatically upon new commits to the master branch. To deploy the project correctly on GitHub pages, the landing site must he named *index.html*

If you want run the project locally you need to clone the repository directly into your favorite editor by writing to the terminal the following: `git clone https://github.com/diomcferreira/Match-That-Dough-MS2`.


