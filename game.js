var words = ['giraffe', 'elephant', 'monkey', 'zebra', 'lion', 'tiger'];
var randomIndex = Math.floor(Math.random()*words.length);
var chosenWord = words[randomIndex];
module.exports = chosenWord;