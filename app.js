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
// var newGame = game(options);
var newGame = require('./scratchpad/sampleGame.js')

app.get('/', function(req, res){
	var output = "<!doctype HTML><html><body>";
	action.placeArmies(newGame, "kinabra", "James", 3)
	output += JSON.stringify(newGame.map["kinabra"]);
	output += "</body></html>";
	res.send(output)
})

app.listen(3000, function() {
})