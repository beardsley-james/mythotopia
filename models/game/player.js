module.exports = Player;

function Player(options){
	this.player = options.playerName;
	this.cards = {
		"deck": [],
		"hand": [],
		"discard": []
	};
	this.counters = {
		"towns": 18,
		"cities": 4,
		"armies": 6,
		"ships": 2,
		"citadel": 0
	};
	this.pool = {
		"armies": 8,
		"ships": 3,
		"cards": []
	};
	this.provinces = [];
	this.reserve = (6 - this.counters.cities);
	if (options.players > 3) {
		this.counters.towns = 14
	}
}