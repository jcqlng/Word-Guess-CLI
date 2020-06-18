// word constructor that uses the letter.js file to create input data 
var Letter = require("./letter");
const { connectableObservableDescriptor } = require("rxjs/internal/observable/ConnectableObservable");
// function to pull and display answers through word arrays
function Word(wordArr) {
    this.wordArr = wordArr;
    this.letters = [];
    

    this.makeWord = function(){
        for (var i = 0; i < wordArr.length; i++) {
            var let = new Letter(wordArr[i]);
            this.letters.push(let);
        }
    }
    // Displays the word
    this.showWord = function() {
        var wordDisplay = [];
        
        for (var i = 0; i < this.letters.length; i++) {
            wordDisplay.push(this.letters[i].displayLet());
            
        }
        
        return wordDisplay.join(' ');
    }

    //Equality comparer 
    this.equals = function(word) {

        return this.toString() === word;
    }

    //returns a clean string of the underlying letters, forming a word
    this.toString = function() {
        var word = [];


        for(var i = 0; i < this.letters.length; i++) {
            word.push(this.letters[i].displayLet());
        }

        return word.join('');
    }

    //function that loops through the letters to see if there is a match
    //for each letter in the letters of the word.
    this.checkGuess = function(userGuess) {
        
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].check(userGuess);
        }
    }

    
}
// Node module to export the correct word
module.exports = Word
