function Letter (letter) {
    this.letter = letter;
    this.display = '_'
    this.displayLetter = function () {
        this.display = this.letter
    }
}

module.exports = Letter;