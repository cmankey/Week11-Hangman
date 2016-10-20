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
    this.checkLetter = function (letter) {
        for (i = 0; i < this.wordArray.length; i++) {
            if (this.wordArray[i] == letter) {
                this.lettersArray[i].displayLetter();
            } 
        }
    }
}

module.exports = Word;