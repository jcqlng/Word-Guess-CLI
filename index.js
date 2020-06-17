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
