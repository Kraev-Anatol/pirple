/*** Homework Assignment #2: Variables and Constants ***/

// VAR:

var message; // The "var" variable can be created without the declaration of type and value.
console.log(message);

// The "var" variable can change value and type.
message = "Hello!";
console.log(message);
message = 10;
console.log(message);
message = ["orange", false, 136];
console.log(message); 

var message = true; // It is possible to announce the "var" variable repeatedly.
console.log(message);

// The "var" variable is visible in internal functions.
message = 2;
print = function() {
	message = message + 3;
	console.log(message);
}
print();

// HOSTING:

host = "Hosting"; // Variable declaration hosting.
var host;
console.log(host); 

dogName("Mozart"); // Function hosting.

function dogName(name) {
  console.log("My dog's name is " + name);
}

dogName("Newton");

// LET:

// The area of visibility of variable "let" is confined to the block {...} in which it was announced.

//let ups = 1;
//let ups = 5; <-- Repeated  declaration of variable "let" in the same block will lead to an error.

let ups = 1;
ups = 5;
console.log("ups = " + ups);

let pizzas = ["Havaiian", "Sicilian", "Vegetarian"];
let sizes = ["big", "medium", "small"];
for(let i=0; i<pizzas.length; i++){
  let pizza  = pizzas[i];
  for(let i=0; i<sizes.length; i++){
    let size = sizes[i];
    console.log(pizza, size);
  }
}


// CONST:

// The behavior of "const" is very similar to "let", but the attempt to change value will lead to an error.
const firm = 7;
//firm = 9; <-- error

// If "const" is an object or an array that values of elements can be changed.+

const pets = {
	dog: "Snuppy"
};
pets.cat = "Simba";
pets.dog = "Lucky";
pets.frend = true;
console.log(pets);
