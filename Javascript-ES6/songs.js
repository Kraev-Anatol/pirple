/*
*
*** Music to which I like to listen. ***
*
*/

var Piazzolla = [
	{
		name: "Oblivion",
		author: "Astor Piazzolla",
		performer: "Astor Piazzolla",
		duration: 214,
		jazz: true,
		style: "nuevo tango"
	},
	{
		name: "Libertango",
		author: "Astor Piazzolla",
		performer: "Astor Piazzolla",
		duration: 168,
		jazz: true,
		style: "nuevo tango"
	},
	function(value){
		console.log(value);
	}
];

var blues= {
	Hart_and_Bonomassa: [
		{
			name: "I'd Rather Go Blind",
			author: "Ellington Jordan",
			lead_vocals: "Beth Hart",
			lead_guitar: "Joe Bonamassa",
			duration: 485,
			rock: true,
			style: "blues"
		},
		{
			name: "I'll Take Care Of You",
			author: "Brook Benton",
			lead_vocals: "Beth Hart",
			lead_guitar: "Joe Bonamassa",
			duration: 314,
			rock: true,
			style: "blues"
		}
	],
	Garry_Coleman: [
		{
			name: "The Sky is Crying",
			author: "Elmore James",
			lead_vocals: "Garry B.B.Coleman",
			lead_guitar: "Garry B.B.Coleman",
			duration: 554,
			rock: true,
			style: "blues"
		},
		{
			name: "One Eye Woman",
			author: " ",
			lead_vocals: "Garry B.B.Coleman",
			lead_guitar: "Garry B.B.Coleman",
			duration: 259,
			rock: true,
			style: "blues"
		}
	],
	cons: function(value1,value2) {
		console.log(value1 + " and " + value2 + " Great duo!");
	}
};

// Output in the console

console.log(Piazzolla[0].name);
console.log(Piazzolla[1].performer);
console.log(Piazzolla[1].style);

console.log(blues.Hart_and_Bonomassa[0].author);
console.log(blues.Hart_and_Bonomassa[1].lead_guitar);
console.log(blues.Garry_Coleman[0].duration);
console.log(blues.Garry_Coleman[1].rock);

// Output in the console through function.

Piazzolla[2](Piazzolla[1].duration);
Piazzolla[2](blues.Hart_and_Bonomassa[0].name);

blues.cons(blues.Hart_and_Bonomassa[0].lead_vocals, blues.Hart_and_Bonomassa[1].lead_guitar);
