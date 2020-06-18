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
            return this.alpha.toString();
        }
    }
    // function to check input
    this.check = function(userGuess) {

        if(this.guessed) {
            this.guessed = true;
        }
        else if (userGuess === this.alpha) {
            this.guessed = true;
        }else {
            this.guessed = false;
        }
        return;
    }
}

module.exports = Letter;