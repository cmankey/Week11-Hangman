var inquirer = require('inquirer');
var game = require('./game.js');
var Word = require('./word.js');

var remainingGuesses = 10;
var lettersGuessed = [];

var word = new Word(game);

function isCharNewLetter(charEntered) {
    var charCode = charEntered.charCodeAt(0);
    if (charEntered.length  > 1) {
        console.log('\nEnter one letter at a time, please.');
        return(false);
    } else if (charEntered.length = 0) {
        console.log('\nPlease enter a letter.');
        return(false);
    } else if (!(charCode > 96 && charCode < 123)) {
        console.log('\nThat isn\'t a letter.')
        return(false);
    }  else if (lettersGuessed.indexOf(charEntered) >= 0) {
        console.log('\nYou already guessed that letter.');
        return(false);
    } else {
        return(true);
    }
}

function play() {
    word.buildDisplayArray();
    console.log('\nword: ' + word.displayArray.join(' ') + '\nremaining guesses: ' + remainingGuesses + '\nletters guessed: ' + lettersGuessed + '\n');
    if (remainingGuesses == 0) {
        console.log('You lost.\n');
    }
    else if (word.displayArray.indexOf('_') < 0) {
        console.log('You won.\n')
    } else {
        inquirer.prompt([{
            name: 'charEntered',
            message: 'Guess a letter.'
        }]).then(function (answer) {
            var charEntered = answer.charEntered.toLowerCase();
            if (isCharNewLetter(charEntered)) {
                lettersGuessed.push(charEntered);
                remainingGuesses = word.checkLetter(charEntered, remainingGuesses);    
            }
            play()
        });
    }
}

play();