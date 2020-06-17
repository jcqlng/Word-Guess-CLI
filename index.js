// NPM Modules used to get user input and color code the words
var Word = require("./word");
var inquirer = require('inquirer');
var colors = require('colors');
// Array of character names,  the time, guesses, and the words chosen from the list 
wordList = ["Kratos", "Atreus", "Zeus", "Odin", "Athena", "Gaia", "Hades", "Ares", "Aphrodite"];
var select = 0;
var chosenWord ="";
var gameWord = ""; 
var counter = 0;
// Choses a character name from the word array  and commences the game
function startGame() {
    if (wordList.length){
        wordList = ["Kratos", "Atreus", "Zeus", "Odin", "Athena", "Gaia", "Hades", "Ares", "Aphrodite"];
    }
    select = Math.floor(Math.random()*wordList.Length);
    chosenWord = wordList [select];
    gameWord = new Word(chosenWord);
    gameWord.makeWord();
    if (select > -1) {
        wordList.splice(select,1);
    }    
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
                message: "\nType letter then hit enter key.\n".magenta
            }
        ]).then(function(data){
            checkAnswer(data);
        });
    }
    else {
        console.log("\nOut of guesses!\n".red);
        console.log(chosenWord)

    }
}