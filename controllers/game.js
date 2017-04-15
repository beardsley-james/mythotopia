var map = require('../models/game/map.js');
var cards = require('../models/game/cards.js');
var starterCards = cards.starterCards;
var improvements = cards.improvements;
var variableVP = cards.variableVP;
var fixedVP = cards.fixedVP;
var Player = require('../models/game/player.js');
var util = require('./util.js');
var shuffle = util.shuffle;
var draw = util.draw;
var drawCard = util.drawCard;
var colors = ["red", "blue", "green", "yellow"];

module.exports = init;

function init(options){
	var game = {
		"gameName": options.gameName,
		"players": [],
		"map": map.map,
		"cards": {
			"provinces": [],
			"improvements": []
		},
		"counters": {
			"road": 9,
			"castle": 9,
			"mercenary": 2,
			"vpChips": {
				"x1": 28,
				"x2": 26,
				"x3": 3
			}
		},
		"display": {
			"improvements": [],
			"vpCards": []
		}
	};
	
	var provinceCards = [];
	for (var key in game.map){
		var province = game.map[key];
		if (!province.sea){
			var card = {
				"key": key,
				"name": province.name,
				"resource": province.resource
			};
			provinceCards.push(card)
		}
	}
	game.cards.provinces = shuffle(provinceCards);
	
	var improvementCards = [];
	for (var key in improvements){
		var improvement = improvements[key];
		var card = improvement;
		card.key = key;
		improvementCards.push(card)
	}
	game.cards.improvements = shuffle(improvementCards);
	for (var i = 0; i < 16; i++){
		game.display.improvements.push(draw(game.cards.improvements))
	}
	
	for (var key in fixedVP){
		var card = fixedVP[key];
		card.key = key;
		if (options.numberPlayers < 3) {
			card.x1 = 6
		}
		game.display.vpCards.push(card)
	}
	
	var variableVPCards = [];
	for (var key in variableVP){
		var card = variableVP[key];
		card.key = key;
		variableVPCards.push(card)
	}
	variableVPCards = shuffle(variableVPCards);
	for (var i = 0; i < 4; i++){
		game.display.vpCards.push(draw(variableVPCards))
	}
	
	var usedCounters = {
		"x1": 0,
		"x2": 0,
		"x3": 0
	}
		
	game.display.vpCards.forEach(function(card) {
		if (card.x1) {usedCounters.x1 += card.x1}
		if (card.x2) {usedCounters.x2 += card.x2}
		if (card.x3) {usedCounters.x3 += card.x3}
	})
		
	game.counters.vpChips.x1 -= usedCounters.x1;
	game.counters.vpChips.x2 -= usedCounters.x2;
	game.counters.vpChips.x3 -= usedCounters.x3;
	
	for (var i = 0; i < options.numberPlayers; i++){
		var playerOptions = {
			"playerName": options.playerNames[i],
			"players": options.numberPlayers
		}
		var player = new Player(playerOptions);
		player.color = colors[i];
		var startingProvinces = 6;
		if (options.numberPlayers == 3){
			startingProvinces = 8
		} else if (options.numberPlayers == 2){
			startingProvinces = 11
		}
		for (var j = 0; j < startingProvinces; j++){
			player.cards.deck.push(draw(game.cards.provinces));
		}
		player.cards.deck.forEach(function(province){
			player.provinces.push(province.key);
			player.counters.towns --
		})
		for (var key in starterCards){
			var card = starterCards[key];
			card.key = key;
			player.cards.deck.push(card)
		};
		player.cards.deck = shuffle(player.cards.deck);
		for (var j = 0; j < 5; j++){
			drawCard(player)
		}
		if (i == 4){
			drawCard(player)
		}
		game.players.push(player)
	}
	
	return game
}