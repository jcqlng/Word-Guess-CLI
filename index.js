// NPM Modules used to get user input and color code the words
var Word = require("./word");
var inquirer = require('inquirer');
var colors = require('colors');
const dns = require("dns");
// Array of character names,  the time, guesses, and the words chosen from the list 
wordList = ["Kratos", "Atreus", "Zeus", "Odin", "Athena", "Gaia", "Hades", "Ares", "Aphrodite"];
var select = 0;
var chosenWord ="";
var gameWord = ""; 
var counter = 0;
// Choses a character name from the word array  and commences the game
function startGame() {
    if (wordList.length){
        wordList = ["KRATOS", "ATREUS", "ZEUS", "ODIN", "ATHENA", "GAIA", "HADES", "ARES", "APHRODITE"];
    }
    select = Math.floor(Math.random()* wordList.length);
    chosenWord = wordList [select];
    //set a new word
    gameWord = new Word(chosenWord);
    gameWord.makeWord();
    
    console.log ("\nYou have 10 attempts to guess a character name from the game God of War.\n".magenta)
    
    promptUser();
}
// The user guesses 10 letters in order to get the right answer, if not then the game will reset and displays message
function promptUser() {
    if (counter<10){
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: ('(' + gameWord.showWord() + ')' +'\nType letter then hit enter key.\n').magenta
            }
        ]).then(function(data){
            checkAnswer(data);
        });
    }
    else {
        console.log("\nOut of guesses!\nResetting the game".red);
        console.log(chosenWord.red)
        chosenWord = " "; 
        gameWord = " ";
        select = 0;
        counter = 0;
        startGame();
    }
}

// function to check the answer to see if it is correct
function checkAnswer(data) {
    if ((data.letter.length === 1) && /^[a-zA-Z]+$/.test(data.letter)) {
        var checkable = data.letter.toUpperCase();
        
        gameWord.checkGuess(checkable);

        if ( !gameWord.equals(chosenWord) ) {
            console.log("\nNot yet! Keep guessing!\n".red);
            counter++;
            console.log((10 - counter) + " Guesses Remaining".yellow);
            promptUser();
        } 
        else {
            rightGuess();
        }
    }
    else {
        console.log("\nPlease enter one letter\n".yellow)
        promptUser();
        }   
    }
// Function for the correct answer/ letter guessed
function rightGuess(){
    console.log("\nYou got it right!!\n".rainbow);
    if (chosenWord.replace(/ /g, "") == (gameWord.showWord()).replace(/ /g, "")) {
        console.log(gameWord.showWord().rainbow);
        console.log("\nWinner!\n".green);
        chosenWord = "";
        gameWord = "";
        select = 0;
        counter = 0;
        startGame();
    }
    else {
        promptUser();

    }
}

startGame();