exports.placeArmies = function(game, provinceName, playerName, quantity) {
	if (quantity == 0) {
		return false
	}
	var space = game.map[provinceName];
	var playerIndex = -1;
	var armyIndex = -1;
	for (var i = 0; i < game.players.length; i++){
		if (game.players[i].player == playerName){
			playerIndex = i
		}
	}
	if (playerIndex == -1){
		return false
	}
	if (space.counters){
		for (var i = 0; i < space.counters.length; i++){
			if (space.counters[i].player == playerName) {
				armyIndex = i;
			}
		}
	}
	var player = game.players[playerIndex];
	player.counters.armies -= quantity;
	if (armyIndex == -1) {
		if (!space.counters){
			space.counters = []
		}
		var army = {
			"name": "armies",
			"number": quantity,
			"player": playerName
		}
		space.counters.push(army)
	} else {
		space.counters[armyIndex].number += quantity
	}
}

exports.removeArmies = function(game, provinceName, playerName, quantity){
	var space = game.map[provinceName];
	var playerIndex = -1;
	for (var i = 0; i < game.players.length; i++){
		if (game.players[i].player == playerName){
			playerIndex = i
		}
	}
	if (playerIndex == -1) {
		return false
	} 
	var player = game.players[playerIndex];
	var armyIndex = -1;
	for (var i = 0; i < space.counters.length; i++){
		if (space.counters[i].player == playerName){
			armyIndex = i
		}
	}
	if (armyIndex == -1) {
		return false
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

exports.endWar = function(game, provinceName){
	var defender = "Neutral";
	if (game.map[provinceName].owner) {
		var defender = game.map[provinceName].owner
	}
	var counters = game.map[provinceName].counters;
	var armies = [];
	for (var i = counters.length - 1; i >= 0; i--){
		if (counters[i].name == "armies"){
			armies = armies.concat(counters.splice(i, i+1))
		}
	}
	var defended = false;
	armies.forEach(function(army){
		if (army.player == defender){
			defended = true
		}
	})
	if (!defended){
		armies.push({
			"name": "armies",
			"number": 0,
			"player": defender
		})
	}
	armies.forEach(function(army){
		if (army.player == "Neutral") {
			army.number = game.map[provinceName].strength
		} else if (army.player == defender){
			if (game.map[provinceName].rugged){
				army.number ++
			}
			if (game.map[provinceName].castle){
				army.number += 2
			}
			if (game.map[provinceName].citadel){
				army.number += 2
			}
		}
	})
	console.log(armies);
	var winnerIndex = -1;
	var loserIndices = [];
	armies.forEach(function(counter, index){
		if (winnerIndex == -1){
			winnerIndex = index
		} else {
			if (armies[winnerIndex].number > armies[index].number) {
				loserIndices.push(index)
			} else if (armies[winnerIndex].number < armies[index].number) {
				loserIndices.push(winnerIndex);
				winnerIndex = index
			} else if (armies[winnerIndex].number == armies[index].number) {
				if (armies[winnerIndex].player == defender) {
					loserIndices.push(index)
				} else {
					loserIndices.push(winnerIndex);
					winnerIndex = index
				}
			}
		}
	})
	if (winnerIndex == -1){
		return false
	}
	var winner = armies[winnerIndex].player;
	if (winner != "Neutral"){
		game.players.forEach(function(player, index){
			if (player.player == winner) {
				winnerIndex = index
			}
		})
	}
	console.log(winner);
	console.log(defender);
	if (winner != defender){
		if (defender == "Neutral") {
			console.log("Neutral defender");
			game.cards.provinces.forEach(function(provinceCard, index){
				if (provinceName == provinceCard.key){
					console.log("provinceCard found");
					var card = game.cards.provinces.splice(index, index+1);
					console.log("Province Card: " + card);
					game.players[winnerIndex].cards.discard.push(card)
				}
			})
		}
		game.map[provinceName].owner = winner;
	}
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