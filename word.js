var Letter = require('./letter.js');

var Word = function (word) {
    this.wordArray = word.split('');
    this.lettersArray = [];
    this.displayArray = [];
    this.buildLettersArray = function () {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.lettersArray.push(new Letter(this.wordArray[i]));
        }
    }
    this.buildDisplayArray = function() {
        this.displayArray = [];
        for (var i = 0; i < this.wordArray.length; i++) {
            this.displayArray.push(this.lettersArray[i].display);
        }
    }
    this.checkLetter = function (charEntered, remainingGuesses) {
        if (this.wordArray.indexOf(charEntered) >= 0) {
            for (i = 0; i < this.wordArray.length; i++) {
                if (this.wordArray[i] == charEntered) {
                    this.lettersArray[i].displayLetter();
                } 
            }
        } else {
            remainingGuesses --;
        }
        return remainingGuesses;
    }
    this.buildLettersArray();
}

module.exports = Word;