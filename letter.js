// "displayLet" will show an underscore or letter. This function will check the letters guessed and will display the letter
function Letter(alpha) {
    this.alpha = alpha; // alphabet
    this.guessed = false; // letter guessed
    // function to display wether or not letters were guessed correctly
    this.displayLet = function() {
        if (this.alpha === " ") {
            return " ";
        }
        else if(!this.guessed) {
            return "_";
        }
        else {
            return this.alpha;
        }
    }
    // function to check input
    this.check = function(userGuess) {
        if (userGuess === this.alpha) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;