/*
 *
 **** Javascript Homework Assignment #6: Loops ***
 *		Number sequence from 1 to 100;
 *		Fizz - are multiple 3;
 *    Buzz - are multiple 5;
 *    FizzBuzz - are multiple 3 and 5;
 *    Prime - prime numbers;
 * 		The output of numbers is for descriptive reasons presented to an object: primeFizzBuzzNumbers;
 *
 */

const primeFizzBuzzNumbers = {};

primeFizzBuzzNumbers[1] = 1;
console.log(1);
for (let i = 2; i <= 100; i++) {
	let k = true;
	for (let j =2; j < i; j++) {
		if (i % j === 0) {
			k = false;
			break;
		}		 
	}
	if (k) {
		console.log("Prime"); primeFizzBuzzNumbers[i] = "Prime";
	} else {
		if ( (i % 3 || i % 5) === 0){
			console.log("FizzBuzz"); primeFizzBuzzNumbers[i] = "FizzBuzz";
		} else if (i % 3 === 0) {console.log("Fizz"); primeFizzBuzzNumbers[i] = "Fizz";}
			else if (i % 5 === 0) {console.log("Buzz"); primeFizzBuzzNumbers[i] = "Buzz";}			
			else {console.log(i); primeFizzBuzzNumbers[i]	= i;}
	}	
} 
console.log(primeFizzBuzzNumbers); 
