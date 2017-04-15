var express = require('express')
var app = express()
var http = require('http')

var game = require('./controllers/game.js');
var options = {
	"gameName": "My Game",
	"numberPlayers": 4,
	"playerNames": ["James", "Kelly", "Conrad", "Margot"]
}
var newGame = game(options);

app.get('/', function(req, res){
	var output = "<!doctype HTML><html><body>";
	output += JSON.stringify(newGame);
	output += "</body></html>";
	res.send(output)
})

app.listen(3000, function() {
})