function formatDate(inputDate) {
	outputString = pad(inputDate.getDate(),2)+'-';
	outputString += abbreviatedNameOfMonth(inputDate.getMonth())+'-';
	outputString += inputDate.getFullYear();
	return outputString;
}

function formatTime(inputDate) {
	return (pad(inputDate.getHours(),2)+':'+pad(inputDate.getMinutes(),2)+':'+pad(inputDate.getSeconds(),2));
}

function abbreviatedNameOfMonth(monthNumber) {
	switch (monthNumber) {
		case 0 :
			return 'Jan';
		break;
		case 1 :
			return 'Feb';
		break;
		case 2 :
			return 'Mar';
		break;
		case 3 :
			return 'Apr';
		break;
		case 4 :
			return 'May';
		break;
		case 5 :
			return 'Jun';
		break;
		case 6 :
			return 'Jul';
		break;
		case 7 :
			return 'Aug';
		break;
		case 8 :
			return 'Sep';
		break;
		case 9 :
			return 'Oct';
		break;
		case 10 :
			return 'Nov';
		break;
		case 11 :
			return 'Dec';
		break;
		default :
			return 'Err';
		break;
	}
}

function formatMilliseconds(inputMilliseconds) {
	outputHours = Math.floor(inputMilliseconds/3600000);
	outputMinutes = Math.floor((inputMilliseconds%3600000)/60000);
	outputSeconds = Math.floor((inputMilliseconds%60000)/1000);
	outputMilliseconds = Math.floor(inputMilliseconds%1000);
	return (outputHours?pad(outputHours,2)+':':'')+((outputHours||outputMinutes)?pad(outputMinutes,2)+':':'')+pad(outputSeconds,2)+'.'+pad(outputMilliseconds,3);
}

//Adds leading zero padding to a number.  Used to make the date format work out.
function pad(theNumber,desiredLength) {
	while ((''+theNumber).length < desiredLength) {
		theNumber = '0'+theNumber;
	}
	return theNumber;
}