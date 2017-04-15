exports.variableVP = {
	"citadel": {
		"name": "Citadel",
		"type": "variable",
		"x3": 1
	},
	"defenderOfTheRealm": {
		"name": "Defender of the Realm",
		"type": "variable",
		"x1": 6
	},
	"guildedCity": {
		"name": "Guilded City",
		"type": "variable",
		"x1": 4
	},
	"hereBeDragons": {
		"name": "Here be Dragons",
		"type": "variable",
		"x2": 3
	},
	"lordOfTheIsles": {
		"name": "Lord of the Isles",
		"type": "variable",
		"x2": 1,
		"x3": 1
	},
	"masterOfTheSeas": {
		"name": "Master of the Seas",
		"type": "variable",
		"x2": 2
	},
	"patronage": {
		"name": "Patronage",
		"type": "variable",
		"x1": 5
	},
	"roadsideInns": {
		"name": "Roadside Inns",
		"type": "variable",
		"x1": 4
	},
	"runestones": {
		"name": "Runestones",
		"type": "variable",
		"x2": 4
	},
	"spoilsOfWar": {
		"name": "Spoils of War",
		"type": "variable",
		"x1": 6
	}
}

exports.fixedVP = {
	"castle": {
		"name": "Castle",
		"type": "fixed",
		"x1": 7
	},
	"city": {
		"name": "City",
		"type": "fixed",
		"x2": 7
	},
	"roads": {
		"name": "Roads",
		"type": "fixed",
		"x2": 7
	}
}

exports.starterCards = {
	"build": {
		"type": "starter",
		"name": "Build",
		"resource": [
			"brick"
		],
		"action": "build"
	},
	"army": {
		"type": "starter",
		"name": "Army",
		"resource": [
			"army",
			"army",
			"gold"
		]
	},
	"market": {
		"type": "starter",
		"name": "Market",
		"resource": [
			"gold",
			"food",
			"brick"
		]
	},
	"ship": {
		"type": "starter",
		"name": "Ship",
		"resource": [
			"ship",
			"food"
		],
		"benefit": "transport"
	}
}

exports.improvements = {
	"alchemist": {
		"type": "improvement",
		"name": "Alchemist",
		"action": "alchemy"},
	"army": {
		"type": "improvement",
		"name": "Army",
		"resource": [
			"army",
			"army",
			"gold"
		]
	},
	"build": {
		"type": "improvement",
		"name": "Build",
		"action": "build",
		"resource": [
			"brick"
		]
	},
	"cavalry": {
		"type": "improvement",
		"name": "Cavalry",
		"reserve": "invasionStrength"},
	"counsellor": {
		"type": "improvement",
		"name": "Counsellor",
		"free": "replaceCards"},
	"diplomat": {
		"type": "improvement",
		"name": "Diplomat",
		"action": "endWar"},
	"farming": {
		"type": "improvement",
		"name": "Farming",
		"reserve": "farming"},
	"general": {
		"type": "improvement",
		"name": "General",
		"benefit": "substitute",
		"resource": [
			"army"
		]
	},
	"goldMine": {
		"type": "improvement",
		"name": "Gold Mine",
		"reserve": "mine"},
	"hero": {
		"type": "improvement",
		"name": "Hero",
		"benefit": "tiebreaker",
		"resource": [
			"army"
		]
	},
	"levies": {
		"type": "improvement",
		"name": "Levies",
		"reserve": "levy"},
	"limes": {
		"type": "improvement",
		"name": "Limes",
		"reserve": "defenseStrength"},
	"marauders": {
		"type": "improvement",
		"name": "Marauders",
		"free": "removeArmy"},
	"market": {
		"type": "improvement",
		"name": "Market",
		"resource": [
			"food",
			"gold",
			"brick"
		]
	},
	"mercenary": {
		"type": "improvement",
		"name": "Mercenary",
		"free": "mercenary"},
	"merchant": {
		"type": "improvement",
		"name": "Merchant",
		"benefit": "changeCardResource"},
	"militia": {
		"type": "improvement",
		"name": "Militia",
		"free": "gainArmy",
		"resource": [
			"army"
		]
	},
	"mystic": {
		"type": "improvement",
		"name": "Mystic",
		"free": "recur"},
	"philosopher": {
		"type": "improvement",
		"name": "Philosopher",
		"free": "tutor"},
	"portal": {
		"type": "improvement",
		"name": "Portal",
		"benefit": "portal",
		"resource": [
			"food"
		]
	},
	"providence": {
		"type": "improvement",
		"name": "Providence",
		"free": "draw2"},
	"quarry": {
		"type": "improvement",
		"name": "Quarry",
		"reserve": "quarry"},
	"queen": {
		"type": "improvement",
		"name": "Queen",
		"reserve": "handSize"},
	"ranger": {
		"type": "improvement",
		"name": "Ranger",
		"reserve": "ranger",
		"resource": [
			"brick"
		]
	},
	"reserveArmy": {
		"type": "improvement",
		"name": "Reserve Army",
		"reserve": "invasionImmune",
		"resource": [
			"army"
		]
	},
	"scribe": {
		"type": "improvement",
		"name": "Scribe",
		"reserve": "scribe"},
	"ship": {
		"type": "improvement",
		"name": "Ship",
		"benefit": "transport",
		"resource": [
			"ship",
			"food",
			"gold"
		]
	},
	"warehouse": {
		"type": "improvement",
		"name": "Warehouse",
		"reserve": "warehouse"},
	"waterMill": {
		"type": "improvement",
		"name": "Water Mill",
		"benefit": "double"}
}