// word constructor that uses the letter.js file to create input data 
var Letter = require("./letter");
const { threadId } = require("worker_threads");
// function to pull and display answers through word arrays
function Word(wordArr) {
    this.wordArr = wordArr;
    this.testWord = [];
    this.makeWord = function(){
        for (var i = 0; i < wordArr.length; i++) {
            var let = new Letter(wordArr[i]);
            threadId.testWord.push(let);
        }
    }
}
this.showWord = function() {
    var wordDisplay = [];
    for (var i = 0; i < testWord.length; i++) {
        wordDisplay.push(this.testWord[i].displayLet());
        
    }
}
