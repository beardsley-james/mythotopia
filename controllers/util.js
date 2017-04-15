exports.shuffle = function(cards){
	for (var i = cards.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    return cards;
}

exports.draw = function(deck){
	return deck.shift()
}

exports.drawCard = function(player){
	var deck = player.cards.deck;
	var hand = player.cards.hand;
	hand.push(deck.shift())
}