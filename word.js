// word constructor that uses the letter.js file to create input data 
var Letter = require("./letter");
// function to pull and display answers through word arrays
function Word(wordArr) {
    this.wordArr = wordArr;
    this.testWord = [];
    this.makeWord = function(){
        for (var i = 0; i < wordArr.length; i++) {
            var let = new Letter(wordArr[i]);
            this.testWord.push(let);
        }
    }
    // Displays the word
    this.showWord = function() {
        var wordDisplay = [];
        for (var i = 0; i < testWord.length; i++) {
            wordDisplay.push(this.testWord[i].displayLet());
        }
    }
    this.checkGuess = function(userGuess) {
        for (let i = 0; i < this.testWord.length; i++) {
            this.testWord[i].check(userGuess);
        }
    }
}
// Node module to export the correct word
module.exports = Word
