exports.map = {
	"ambsace": {
		"name": "Ambsace",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "frampold"
			},
			{
				"to": "custus"
			},
			{
				"to": "beast",
				"type": "coast"
			}
		]
	},
	"aporia": {
		"name": "Aporia",
		"resource": "food",
		"strength": 2,
		"island": 2,
		"connection": [
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "kinabra"
			}
		]
	},
	"beast": {
		"name": "Beast Sea",
		"sea": true,
		"connection": [
			{
				"to": "ambsace"
			},
			{
				"to": "custus"
			},
			{
				"to": "peened"
			},
			{
				"to": "camarine"
			},
			{
				"to": "serpent"
			},
			{
				"to": "jeopigia"
			},
			{
				"to": "ictus"
			},
			{
				"to": "nesh"
			}
		]
	},
	"blore": {
		"name": "Blore",
		"resource": "army",
		"strength": 4,
		"rugged": true,
		"connection": [
			{
				"to": "trogle"
			},
			{
				"to": "margent"
			},
			{
				"to": "scombroid"
			},
			{
				"to": "palmain"
			},
			{
				"to": "iracund"
			},
			{
				"to": "quean",
				"type": "hills"
			}
		]
	},
	"camarine": {
		"name": "Camarine",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "shog"
			},
			{
				"to": "eagre"
			},
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "beast",
				"type": "coast"
			},
			{
				"to": "peened"
			}
		]
	},
	"coryphee": {
		"name": "Coryphee",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "inland2",
				"type": "coast"
			},
			{
				"to": "ogdoad"
			},
			{
				"to": "sorner"
			},
			{
				"to": "fadge",
				"type": "mountains"
			},
			{
				"to": "mome"
			}
		]
	},
	"custus": {
		"name": "Custus",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "ambsace"
			},
			{
				"to": "frampold"
			},
			{
				"to": "inland1",
				"type": "coast"
			},
			{
				"to": "peened"
			},
			{
				"to": "beast",
				"type": "coast"
			}
		]
	},
	"darb": {
		"name": "Darb",
		"resource": "army",
		"strength": 4,
		"rugged": true,
		"connection": [
			{
				"to": "empyrean"
			},
			{
				"to": "grimp"
			},
			{
				"to": "ogdoad"
			},
			{
				"to": "inland2",
				"type": "coast"
			}
		]
	},
	"diclesium": {
		"name": "Diclesium",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "talion"
			},
			{
				"to": "fadge",
				"type": "mountains"
			},
			{
				"to": "iracund",
				"type": "mountains"
			},
			{
				"to": "palmain"
			},
			{
				"to": "nusus"
			}
		]
	},
	"dragonate": {
		"name": "Dragonate",
		"resource": "gold",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "grimp",
				"type": "mountains"
			},
			{
				"to": "eoan",
				"type": "hills"
			},
			{
				"to": "lea",
				"type": "hills"
			},
			{
				"to": "ogdoad",
				"type": "hills"
			}
		]
	},
	"eagre": {
		"name": "Eagre",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "shog"
			},
			{
				"to": "remise"
			},
			{
				"to": "oxter"
			},
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "camarine"
			}
		]
	},
	"empyrean": {
		"name": "Empyrean",
		"resource": "gold",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "kakopyge",
				"type": "hills"
			},
			{
				"to": "grimp",
				"type": "mountains"
			},
			{
				"to": "darb"
			},
			{
				"to": "inland2",
				"type": "coast"
			}
		]
	},
	"eoan": {
		"name": "Eoan",
		"resource": "brick",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "dragonate",
				"type": "hills"
			},
			{
				"to": "quean"
			},
			{
				"to": "lea",
				"type": "mountains"
			}
		]
	},
	"fadge": {
		"name": "Fadge",
		"resource": "brick",
		"strength": 2,
		"connection": [
			{
				"to": "coryphee",
				"type": "mountains"
			},
			{
				"to": "sorner"
			},
			{
				"to": "quean"
			},
			{
				"to": "iracund"
			},
			{
				"to": "diclesium",
				"type": "mountains"
			},
			{
				"to": "talion"
			},
			{
				"to": "mome"
			}
		]
	},
	"frampold": {
		"name": "Frampold",
		"resource": "gold",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "ambsace"
			},
			{
				"to": "custus"
			},
			{
				"to": "inland1",
				"type": "coast"
			},
			{
				"to": "hatchel"
			},
			{
				"to": "welkin",
				"type": "mountains"
			}
		]
	},
	"galingale": {
		"name": "Galingale",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "kakopyge"
			},
			{
				"to": "inland2",
				"type": "coast"
			},
			{
				"to": "mome"
			},
			{
				"to": "malebolge"
			},
			{
				"to": "hatchel",
				"type": "hills"
			}
		]
	},
	"grimp": {
		"name": "Grimp",
		"resource": "brick",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "dragonate",
				"type": "mountains"
			},
			{
				"to": "osgoad"
			},
			{
				"to": "darb"
			},
			{
				"to": "empyrean",
				"type": "mountains"
			}
		]
	},
	"hatchel": {
		"name": "Hatchel",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "welkin"
			},
			{
				"to": "kakopyge"
			},
			{
				"to": "galingale",
				"type": "hills"
			},
			{
				"to": "malebolge"
			},
			{
				"to": "inland1",
				"type": "coast"
			},
			{
				"to": "frampold"
			}
		]
	},
	"ictus": {
		"name": "Ictus",
		"resource": "army",
		"strength": 3,
		"island": 1,
		"connection": [
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "beast",
				"type": "coast"
			},
			{
				"to": "nesh",
				"type": "hills"
			},
			{
				"to": "jeopigia"
			}
		]
	},
	"inland1": {
		"name": "Inland Sea West",
		"sea": true,
		"connection": [
			{
				"to": "frampold"
			},
			{
				"to": "hatchel"
			},
			{
				"to": "malebolge"
			},
			{
				"to": "shog"
			},
			{
				"to": "peened"
			},
			{
				"to": "custus"
			},
			{
				"to": "frampold"
			}
		]
	},
	"inland2": {
		"name": "Inland Sea East",
		"sea": true,
		"connection": [
			{
				"to": "kakopyge"
			},
			{
				"to": "empyrean"
			},
			{
				"to": "darb"
			},
			{
				"to": "ogdoad"
			},
			{
				"to": "coryphee"
			},
			{
				"to": "mome"
			},
			{
				"to": "galingale"
			}
		]
	},
	"iracund": {
		"name": "Iracund",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "palmain"
			},
			{
				"to": "diclesium",
				"type": "mountains"
			},
			{
				"to": "fadge"
			},
			{
				"to": "quean"
			},
			{
				"to": "blore"
			}
		]
	},
	"jeopigia": {
		"name": "Jeopigia",
		"resource": "food",
		"strength": 2,
		"island": 1,
		"connection": [
			{
				"to": "beast",
				"type": "coast"
			},
			{
				"to": "nesh"
			},
			{
				"to": "ictus"
			}
		]
	},
	"kakopyge": {
		"name": "Kakopyge",
		"resource": "gold",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "welkin",
				"type": "mountains"
			},
			{
				"to": "empyrean",
				"type": "hills"
			},
			{
				"to": "inland2",
				"type": "coast"
			},
			{
				"to": "galingale"
			},
			{
				"to": "hatchel"
			}
		]
	},
	"kinabra": {
		"name": "Kinabra",
		"resource": "brick",
		"strength": 2,
		"island": 2,
		"connection": [
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "aporia"
			}
		]
	},
	"lea": {
		"name": "Lea",
		"resource": "army",
		"strength": 4,
		"rugged": true,
		"connection": [
			{
				"to": "ogdoad"
			},
			{
				"to": "dragonate",
				"type": "hills"
			},
			{
				"to": "eoan",
				"type": "mountains"
			},
			{
				"to": "quean"
			},
			{
				"to": "sorner",
				"type": "hills"
			}
		]
	},
	"malebolge": {
		"name": "Malebolge",
		"resource": "brick",
		"strength": 2,
		"connection": [
			{
				"to": "hatchel"
			},
			{
				"to": "galingale"
			},
			{
				"to": "mome"
			},
			{
				"to": "remise"
			},
			{
				"to": "shog",
				"type": "hills"
			},
			{
				"to": "inland1",
				"type": "coast"
			}
		]
	},
	"margent": {
		"name": "Margent",
		"resource": "brick",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "scombroid"
			},
			{
				"to": "blore"
			},
			{
				"to": "trogle",
				"type": "mountains"
			}
		]
	},
	"mome": {
		"name": "Mome",
		"resource": "gold",
		"strength": 2,
		"connection": [
			{
				"to": "galingale"
			},
			{
				"to": "inland2",
				"type": "coast"
			},
			{
				"to": "coryphee"
			},
			{
				"to": "fadge"
			},
			{
				"to": "talion"
			},
			{
				"to": "remise",
				"type": "hills"
			},
			{
				"to": "malebolge"
			}
		]
	},
	"nesh": {
		"name": "Nesh",
		"resource": "gold",
		"strength": 2,
		"island": 1,
		"connection": [
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "beast",
				"type": "coast"
			},
			{
				"to": "ictus",
				"type": "hills"
			},
			{
				"to": "jeopigia"
			}
		]
	},
	"nusus": {
		"name": "Nusus",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "oxter"
			},
			{
				"to": "talion"
			},
			{
				"to": "diclesium"
			},
			{
				"to": "palmain"
			},
			{
				"to": "serpent",
				"type": "coast"
			}
		]
	},
	"ogdoad": {
		"name": "Ogdoad",
		"resource": "brick",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "darb"
			},
			{
				"to": "grimp"
			},
			{
				"to": "dragonate",
				"type": "hills"
			},
			{
				"to": "lea"
			},
			{
				"to": "sorner"
			},
			{
				"to": "coryphee"
			},
			{
				"to": "inland2",
				"type": "coast"
			}
		]
	},
	"oxter": {
		"name": "Oxter",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "eagre"
			},
			{
				"to": "remise"
			},
			{
				"to": "talion"
			},
			{
				"to": "nusus"
			},
			{
				"to": "serpent",
				"type": "coast"
			}
		]
	},
	"palmain": {
		"name": "Palmain",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "scombroid"
			},
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "nusus"
			},
			{
				"to": "diclesium"
			},
			{
				"to": "iracund"
			},
			{
				"to": "blore"
			}
		]
	},
	"peened": {
		"name": "Peened",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "custus"
			},
			{
				"to": "inland1",
				"type": "coast"
			},
			{
				"to": "shog"
			},
			{
				"to": "camarine"
			},
			{
				"to": "beast",
				"type": "coast"
			}
		]
	},
	"quean": {
		"name": "Quean",
		"resource": "brick",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "blore",
				"type": "hills"
			},
			{
				"to": "iracund"
			},
			{
				"to": "fadge"
			},
			{
				"to": "sorner"
			},
			{
				"to": "lea"
			},
			{
				"to": "eoan"
			}
		]
	},
	"remise": {
		"name": "Remise",
		"resource": "gold",
		"strength": 2,
		"connection": [
			{
				"to": "malebolge"
			},
			{
				"to": "mome",
				"type": "hills"
			},
			{
				"to": "talion"
			},
			{
				"to": "oxter"
			},
			{
				"to": "eagre"
			},
			{
				"to": "shog"
			}
		]
	},
	"scombroid": {
		"name": "Scombroid",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "serpent",
				"type": "coast"
			},
			{
				"to": "palmain"
			},
			{
				"to": "blore"
			},
			{
				"to": "margent"
			}
		]
	},
	"serpent": {
		"name": "Serpent Sea",
		"sea": true,
		"connection": [
			{
				"to": "beast"
			},
			{
				"to": "camarine"
			},
			{
				"to": "eagre"
			},
			{
				"to": "oxter"
			},
			{
				"to": "nusus"
			},
			{
				"to": "palmain"
			},
			{
				"to": "scombroid"
			},
			{
				"to": "aporia"
			},
			{
				"to": "kinabra"
			},
			{
				"to": "ictus"
			},
			{
				"to": "nesh"
			}
		]
	},
	"shog": {
		"name": "Shog",
		"resource": "brick",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "malebolge",
				"type": "hills"
			},
			{
				"to": "remise"
			},
			{
				"to": "eagre"
			},
			{
				"to": "camarine"
			},
			{
				"to": "peened"
			},
			{
				"to": "inland1",
				"type": "coast"
			}
		]
	},
	"sorner": {
		"name": "Sorner",
		"resource": "food",
		"strength": 2,
		"connection": [
			{
				"to": "coryphee"
			},
			{
				"to": "ogdoad"
			},
			{
				"to": "lea",
				"type": "hills"
			},
			{
				"to": "quean"
			},
			{
				"to": "fadge"
			}
		]
	},
	"talion": {
		"name": "Talion",
		"resource": "army",
		"strength": 3,
		"connection": [
			{
				"to": "mome"
			},
			{
				"to": "fadge"
			},
			{
				"to": "diclesium"
			},
			{
				"to": "nusus"
			},
			{
				"to": "oxter"
			},
			{
				"to": "remise"
			}
		]
	},
	"trogle": {
		"name": "Trogle",
		"resource": "gold",
		"strength": 3,
		"rugged": true,
		"connection": [
			{
				"to": "margent",
				"type": "mountains"
			},
			{
				"to": "blore"
			}
		]
	},
	"welkin": {
		"name": "Welkin",
		"resource": "army",
		"strength": 4,
		"rugged": true,
		"connection": [
			{
				"to": "frampold",
				"type": "mountains"
			},
			{
				"to": "kakopyge",
				"type": "mountains"
			},
			{
				"to": "hatchel"
			}
		]
	}
}