// constructor functions containing app logic

var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;

	prompt.start(); //starting the prompt
	letTheGameBegin(userGuess);

		function letTheGameBegin(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win");
				return;
			}
            
			// when guesses are over
			if(guesses <= 0){
				console.log("Game Over!");
				return;
			}

		// will display "_" and the number of spaces
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
        
		// comparess correct letters with typed letter
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guesses --;
		}
		letTheGameBegin(guesses);

	});
}