var inquirer = require('inquirer');
var game = require('./game.js');
var Word = require('./word.js');

var remainingGuesses = 10;
var lettersGuessed = [];

var word = new Word(game);
word.buildLettersArray();

function play() {
    word.buildDisplayArray();
    console.log('word: ' + word.displayArray.join(' ') + '\nremaining guesses: ' + remainingGuesses + '\nletters guessed: ' + lettersGuessed);
    if (remainingGuesses == 0) {
        console.log('You lost.');
    }
    else if (word.displayArray.indexOf('_') < 0) {
        console.log('You won.')
    } else {
        inquirer.prompt([{
            name: 'letter',
            message: 'Guess a letter.'
        }]).then(function (answer) {
            var letter = answer.letter;
            var charCode = letter.charCodeAt(0);
            if (letter.length  > 1) {
                console.log('Enter only one letter at a time, please.');
            } else if (letter.length = 0) {
                console.log('Please enter a letter.');
            } else if (!(charCode > 96 && charCode < 123)) {
                console.log('That wasn\'t a letter.')
            }  else if (lettersGuessed.indexOf(letter) >= 0) {
                console.log('You already guessed that letter.');
            } else {
                lettersGuessed.push(letter);
                if (word.wordArray.indexOf(letter) >= 0) {
                    word.checkLetter(letter);
                } else {
                    remainingGuesses --;
                }
            }
            play()
        });
    }
}

play();