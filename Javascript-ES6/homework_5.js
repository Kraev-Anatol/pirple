

var value1 = 52;
var label1 = "hours";
var value2 = 10000;
var label2 = "seconds" 



var timeAdder = (val1, lab1, val2, lab2) => {

	// Check and correction of basic data.______________________________________________

	// checkValue - value1 and value2 should be the integer positive numbers more than 0

	var checkValue = (val) => {
		var valRest = val % 2;
		
		if (val > 0 && (valRest  === 0 || valRest === 1)) {
			 return true;
		} else {
				return false;
		}
	}

	if ((checkValue(val1) && checkValue(val2)) === false) {
		console.log("No correct format of data.")
		return false;
	} 

// correctonLabel - adjusts label1 and label2 (multiple or singular) depending on value

	var correctonLabel = (val, leib) => {
		if ((val > 1 && leib.match(/s$/)) || (val === 1 && !leib.match(/s$/))) {
			return leib;
		} else if (val > 1)  { 
				leib = leib + "s";
				return leib;
		} else {
			let i = 0;
			let leib1 = "";
			while (i < (leib.length - 1) ) {
				//console.log(i);
				leib1 = leib1 + leib[i];
				i++;
			}
	
			return leib1;
		}
	}

	console.log(correctonLabel(val1, lab1));
	console.log(correctonLabel(val2, lab2));
	
	//__________________________________________________________________________________
	
	var addTime = {};	
	const day = 86400;
	const hour = 3600;
	const minute = 60;
	const second = 1;

	// seconder - changes time in the format of a second

	var seconder = (val, lab) => {
		switch(lab) {
			case "seconds": 
			case "second":
				return val;
			case "minutes":
			case "minute":
				return val * 60;
			case "hours":
			case "hour":
				return val * 3600;
			case "days":
			case "day":
				return val * 86400;			
		}
	}

	var timeFormatter = (seconds, period) => {
		let timeFormat = [];
		timeFormat[0] = seconds % period;
		timeFormat[1] = (seconds - timeFormat[0]) / period;	
		seconds = timeFormat[0]; 
	return timeFormat;	
	}

	let seconds = seconder(val2, lab2) + seconder(val1, lab1);
	
	 if (seconds > day) {
		var	formatTime = timeFormatter(seconds, day);
		addTime.days = formatTime[1];
		seconds = formatTime[0];
		
	} else {
		if (seconds == day) {
			addTime.day = 1;
			return addTime;
		} 
	 }

	 if (seconds == 0) {
		 return addTime;
	 }

	 if (seconds > hour) {
		var	formatTime = timeFormatter(seconds, hour);
		addTime.hours = formatTime[1];
		seconds = formatTime[0];
		
	} else {
		if (seconds == hour) {
			addTime.hour = 1;
			return addTime;
		} 
	 }

	 if (seconds == 0) {
		return addTime;
	}
	
	if (seconds > minute) {
		var	formatTime = timeFormatter(seconds, minute);
		addTime.minutes = formatTime[1];		
		seconds = formatTime[0];
		
	} else {
		if (seconds == minute) {
			addTime.minute = 1;			 
			return addTime;
		} 
	 }

	 if (seconds == 0) {
		return addTime;
	}

	if (seconds > second) {
		
		addTime.seconds = seconds;		 
		seconds = formatTime[0];
		
	} else {
		if (seconds == second) {
			addTime.second = 1;
			return addTime;
		} 
	 }	 

		return addTime;
}	


console.log(timeAdder(value1, label1, value2, label2));


