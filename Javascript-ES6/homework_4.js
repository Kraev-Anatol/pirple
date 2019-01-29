/*
*
*
*** Homework Assignment #4: Functions
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

 var character = "Socrates";

 //var character = "Poseidon";

 
var deadliness = (Antiq, person) => {
	var ImmortAndMort = true;  
	
	for (var key in Antiq) {
		if ( key === person && Antiq[key] === "Olympus" ) 		
			ImmortAndMort = false;							
	}

	return ImmortAndMort;	
}	

console.log("Whether " + character + " is deadly? : "  + deadliness(Antiquity, character));


// Logical argument_______________________________________

var cakes = {
	cake1: "vanilla",
	cake2: "chocolate",
	cake3: "vanilla",
	cake4: "chocolate"
} 

var notLove = "chocolate"

var vanillaCakes = (myObj, param) => {
	let myArray = [];
	for (var key in myObj) {
		if (myObj[key] !== param) {
			myArray.push(key);		
		}
	}
	return myArray;
}

console.log("Vanilla Cakes: " + vanillaCakes(cakes, notLove));
