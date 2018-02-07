// constructor for word selection
// game.js will randomly select a word

var Word = require("./word.js");


var Game = function(){
	this.secretWords = ["athens","bangkok","budapest", "copenhagen","khartoum","reykjavik","santodomingo"];

	this.randomWord = this.secretWords[ Math.floor(Math.random() * this.secretWords.length)];
	this.currentWord = new Word(this.randomWord);
	
}
	var hangMan = new Game();

module.exports = Game;