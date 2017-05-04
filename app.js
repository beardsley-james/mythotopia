var express = require('express')
var app = express()
var http = require('http')

var action = require('./controllers/actions.js');

var game = require('./controllers/game.js');
var options = {
	"gameName": "My Game",
	"numberPlayers": 4,
	"playerNames": ["James", "Kelly", "Conrad", "Margot"]
}

app.get('/', function(req, res){
	var newGame = require('./scratchpad/sampleGame.js')
//	var newGame = game(options);
	var output = "<!doctype HTML><html><body>";
	runTest(newGame);
	output += JSON.stringify(newGame);
	output += "</body></html>";
	res.send(output)
})

app.listen(3000, function() {
})

var runTest = function(game){
	action.placeArmies(game, "peened", "Kelly", 4);
	action.endWar(game, "peened", "Kelly");
	console.log(game.players[1].cards.discard);
}