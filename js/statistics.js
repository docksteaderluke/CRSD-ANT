//Math Functions
//Note that percentError(x) requires the full data array, while all the rest only accept a simple array of values (found with the valueArray(x,y)

//Finds the percentage of incorrect/failed trials (rounded to 2 places)
function percentError(inputArray) {
	return Math.round(((1-((onlyCorrect(inputArray).length)/inputArray.length))*100)*100)/100;
}

//num^2
function square(num) {
	return num*num;
}

//Finds the maximum value in a given simple array of values
function arrayMin(inputArray) {
	tempArray = inputArray.slice(0);
	tempArray.sort(sortNumbers);
	return tempArray[tempArray.length-1];
}

//Finds the minimum value in a given simple array of values
function arrayMax(inputArray) {
	tempArray = inputArray.slice(0);
	tempArray.sort(sortNumbers);
	return tempArray[0];
}

//Finds the median of an array of values (rounded to integer)
function median(inputArray) {
	tempArray = inputArray.slice(0);	//There is no js way to duplicate an object, so this is a bit of a hack to do it.
	tempArray.sort(sortNumbers);
	midpoint = Math.floor(tempArray.length/2);
	if (tempArray.length % 2 != 0) {					//Odd number of entries
		return tempArray[midpoint];
	} else {
		med = (tempArray[midpoint-1] + tempArray[midpoint])/2;	//Even number of entries
		return Math.round(med);
	}

}

//Finds the mean of an array of numbers (rounded to integer)
function mean(inputArray) {
	total = 0;
	for (i in inputArray) {
		total += inputArray[i];
	}
	return Math.round(total/(inputArray.length));
}

//Finds the SD of an array of numbers
function standardDeviation(inputArray) {
	deviation = 0;
	inputMean = mean(inputArray);
	for (i in inputArray) {
		deviation += (square(inputMean - inputArray[i]));
	}
	return Math.sqrt(deviation/(inputArray.length - 1));

}

//This is used by the sort(x) array method when sorting an array of values
function sortNumbers(a,b) {
	return b-a;
}