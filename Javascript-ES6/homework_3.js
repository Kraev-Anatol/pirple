/*
*
*** Gods lived in Ancient Greece on the Olympus and were immortal,
*** people lived in the cities and were mortal.
*
*/
var Antiquity = {
	"Appolon": "Olympus",
	"Aristotle": "Halkida",
	"Hermes": "Olympus",
	"Platon": "Athens",
	"Poseidon": "Olympus",
	"Socrates": "Athens"
};


var Immortal = [];
var Mortal = [];

var i = -1;
var j = -1;

for (var key in Antiquity) {
		if (Antiquity[key] === "Olympus" ) {		
		i = i + 1;
		Immortal[i] = key;
		
	} else {
		j = j + 1;
		Mortal[j] = key;
	}	
}

console.log("Immortal:", Immortal);
console.log("Mortal: ", Mortal);

// Logical argument

var cakes = {
	cake1: "vanilla",
	cake2: "chocolate",
	cake3: "vanilla",
	cake4: "chocolate"
} 

for (var key in cakes) {
	if (cakes[key] !== "chocolate" ) {
		console.log(key, "is vanilla")
	}
}
