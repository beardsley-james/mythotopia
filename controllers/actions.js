exports.placeArmies = function(game, provinceName, playerName, quantity) {
	var space = game.map[provinceName];
	var playerIndex = 0;
	for (var i = 0; i < game.players.length; i++){
		if (game.players[i].player == playerName){
			playerIndex = i
		}
	}
	var player = game.players[playerIndex];
	if (!space.counters){
		space.counters = []
	}
	var army = {
		"name": "armies",
		"number": quantity,
		"player": playerName
	}
	player.counters.armies -= quantity;
	space.counters.push(army)
}

function removeArmies(game, provinceName, playerName, quantity){
	var space = game.map[provinceName];
	var playerIndex = 0;
	for (var i = 0; i < game.players.length; i++){
		if (game.players[i].player == playerName){
			playerIndex = i
		}
	}
	var player = game.players[playerIndex];
	var armyIndex = 0;
	for (var i = 0; i < space.counters.length; i++){
		if (space.counters[i].player == playerName){
			armyIndex = i
		}
	}
	space.counters[armyIndex].number -= quantity;
	if (space.counters[armyIndex].number < 1){
		space.counters.splice(armyIndex, 1)
	}
	player.counters.armies += quantity
}

function placeShips(){
	
}

function removeShips(){
	
}

function endWar(){
	
}

function buyTokens(){
	
}

function buyCard(){
	
}

function placeIntoReserve(){
	
}

function discard(){
	
}

function removeFromDeck(){
	
}

function endGame(){
	
}