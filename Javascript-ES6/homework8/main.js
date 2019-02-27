var blockColor = [];
	
	const container = document.getElementById("container");
	for (let i = 0; i < 16; i++) {
		
		let newDiv = document.createElement("div");      // creation of the game grid 
		blockColor[i]  = 0;	
		newDiv.id = i;											
		newDiv.classList.add("tic-tac");					
		container.appendChild(newDiv);
					
	}
	
	var clickDiv;
	var blockSwitch = true;
	var counter = 0;	

	document.addEventListener("click", function(e) {	
			let blockNumber =  e.target.id;	
			
			clickDiv = document.getElementById(blockNumber); 
		
			function funcClear() {															// clear of the game grid 
				for (let i = 0; i < 16; i++) {
					clickDiv = document.getElementById(i);	
					clickDiv.innerText = " ";
					blockColor[i] = 0;
				}
				counter = 0;
				blockSwitch = true; 
				return;
			}

			if (clickDiv === null) {														// filling of the game grid 
				return
			} else {
			if (blockSwitch === true) {			
				clickDiv.innerHTML = "<p>X</p>";
				clickDiv.style.color = "red";
				blockColor[blockNumber] = 1;
				blockSwitch = false;

				counter = counter + 1;
			} else {				
				clickDiv.innerHTML = "<p>O</p>";
				clickDiv.style.color = "black";
				blockColor[blockNumber] = 2;
				blockSwitch = true;
				counter = counter + 1;
			}	
			}				

			function winnerDeterm(numbCell) {										// definition of the winner
				
				function winnerGorizont(nbg) {	
					let counterRed = 0;
					let counterBlack = 0;					
					for (let j = (nbg); j <= (nbg+2); j++) {
						if(blockColor[j] !== 0) {
						if(blockColor[j] === 1) {
							counterRed = counterRed + 1;
							} else {
							counterBlack = counterBlack + 1
							}
						}
						if (counterRed === 3) {
							setTimeout(function(){ alert("Red is winner"); funcClear()}, 500);
							console.log("Red is winner");
							return false; 
						} 

						if (counterBlack === 3) {
							setTimeout(function(){ alert("Black is winner"); funcClear()}, 500);
							console.log("Black is winner");
							return false;
						}						
					}
				}

				function winnerVertical(nbv) {
					let counterRed = 0;
					let counterBlack = 0;
					
					for (let j = (nbv); j <= (nbv+8); j=j+4) {
						if(blockColor[j] !== 0) {
						if(blockColor[j] === 1) {
							counterRed = counterRed + 1;
							} else {
							counterBlack = counterBlack + 1
							}
						}
						if (counterRed === 3) {
							setTimeout(function(){ alert("Red is winner"); funcClear()}, 500);
							console.log("Red is winner");
							return false; 
						} 

						if (counterBlack === 3) {
							setTimeout(function(){ alert("Black is winner"); funcClear()}, 500);
							console.log("Black is winner");
							return false;
						}						
					}

				}

				function winnerDiagonal(nbd) {
					let counterRed = 0;
					let counterBlack = 0;
					
					for (let j = (nbd); j <= (nbd+10); j=j+5) {
						if(blockColor[j] !== 0) {
						if(blockColor[j] === 1) {
							counterRed = counterRed + 1;
							} else {
							counterBlack = counterBlack + 1
							}
						}
						if (counterRed === 3) {
							setTimeout(function(){ alert("Red is winner"); funcClear()}, 500);
							console.log("Red is winner");
							return false; 
						} 

						if (counterBlack === 3) {
							setTimeout(function(){ alert("Black is winner"); funcClear()}, 500);
							console.log("Black is winner");
							return false;
						}						
					}

					let counterRed1 = 0;
					let counterBlack1 =0;
					
					for (let k = (nbd+2); k <= (nbd+8); k=k+3) {						
						if(blockColor[k] !== 0) {
						if(blockColor[k] === 1) {
							counterRed1 = counterRed1 + 1;							
							} else {
							counterBlack1 = counterBlack1 + 1
							}
						}
						if (counterRed1 === 3) {
							setTimeout(function(){ alert("Red is winner"); funcClear()}, 500);
							console.log("Red is winner");
							return false; 
						} 

						if (counterBlack1 === 3) {
							setTimeout(function(){ alert("Black is winner"); funcClear()}, 500);
							console.log("Black is winner");
							return false;
						}		 				
					}

				}
				  			
				if (winnerGorizont(0+numbCell) === false) {
					return false; 
				} else {					 					
					if (winnerGorizont(4+numbCell) === false) {
						return false; 
					} else {												
						if (winnerGorizont(8+numbCell) === false) {
							return false; 
						} 
					}
				}
				
				if(winnerVertical(numbCell) === false) {
					return false;
				} else {
					if(winnerVertical(1+numbCell) === false) {
						return false;
					} else {
						if(winnerVertical(2+numbCell) === false) {
							return false;
						}
					}
				}
				
				if (winnerDiagonal(numbCell) === false) {
					return false;
				}
			}
						
			let numbCell1 = 0;			
			if (winnerDeterm(numbCell1) === false) {
					return false; 
				} else {
		 		let numbCell2 = 1;				
				if (winnerDeterm(numbCell2) === false) {
						return false; 
					} else {
						let numbCell3 = 4;						
						if (winnerDeterm(numbCell3) === false) {
							return false; 
						} else {
							let numbCell4 = 5;							
							if (winnerDeterm(numbCell4) === false) {
							return false; 
							} 	
						}
					}
				}			

			 if(counter > 15) {				  
				setTimeout(function(){ alert("Cats game!"); funcClear()}, 500);			// 	definition of a draw	
			}	
			
	});
