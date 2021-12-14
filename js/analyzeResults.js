//This is where all the heavy lifting happens.  This is the statistical analysis of the results.

//userInfo: 0-userID, 1-age, 2-gender, 3-sessionNumber, 4-studyID, 5-groupID, 6-stimulusType, 7-sessionStartDate, 8-sessionEndDate, 9-displaySize, 10-displayWidth, 11-displayHeight, 12-ppi

//Note that results contains 0-practice, 1-test1, 2-test2;
//Results: 0-cueType, 1-targetType, 2-targetPosition, 3-cuePosition, 4-targetDirection, 5-flankDirection, 6-stage1Time, 7-stage4Time, 8-keyPressed, 9-correct, 10-trialStartDate, 11-targetOnTime

function generateSummary(userInfo, results) {
	//These are sub-arrays, filtered versions of the full array
	var allCorrectRT = [];
	var C1T1 = [];
	var C1T2 = [];
	var C2T1 = [];
	var C2T2 = [];
	var C3T1 = [];
	var C3T2 = [];
	var C4T1 = [];
	var C4T2 = [];
	var allResults = [];
	
	// Join all results sets
	for (i in results){
		// discard the practice round
		if (i >= 1){
			allResults = allResults.concat(results[i]);
		}
	}

	for (i in allResults) {
		allResults[i][9] = 0;						//Start with Correct marked False
		if (isCorrect(allResults[i])) {				//Check the keypress
			allResults[i][9] = 1;					//Mark correct if so
			allCorrectRT.push(allResults[i][7]);	//Add its time to the correct list
		}
	
		//Figure out what type of trial it is, of the 8 possible, and sort
		if((allResults[i][0]==1)&&(allResults[i][1]=='congruent')) {
			C1T1.push(allResults[i]);
		} else if((allResults[i][0]==1)&&(allResults[i][1]=='incongruent')) {
			C1T2.push(allResults[i]);
		} else if((allResults[i][0]==2)&&(allResults[i][1]=='congruent')) {
			C2T1.push(allResults[i]);
		} else if((allResults[i][0]==2)&&(allResults[i][1]=='incongruent')) {
			C2T2.push(allResults[i]);
		} else if((allResults[i][0]==3)&&(allResults[i][1]=='congruent')) {
			C3T1.push(allResults[i]);
		} else if((allResults[i][0]==3)&&(allResults[i][1]=='incongruent')) {
			C3T2.push(allResults[i]);
		} else if((allResults[i][0]==4)&&(allResults[i][1]=='congruent')) {
			C4T1.push(allResults[i]);
		} else if((allResults[i][0]==4)&&(allResults[i][1]=='incongruent')) {
			C4T2.push(allResults[i]);
		}
	}

	var summary = [];
	//The first row is the headers
	summary[0] = ['uniqueID','studyID','ANTversion','targFile','ANTdate','ANTtime','SessionDur','Session','Age','Sex','Group','ANT.N','med.all','mean.all','sd.all','min.all','max.all','alert','orient','conflict','pc.all','e.all','nocue','double','centre','spatial','cong','incong','med.C1T1','med.C1T2','med.C2T1','med.C2T2','med.C3T1','med.C3T2','med.C4T1','med.C4T2','mean.C1T1','mean.C1T2','mean.C2T1','mean.C2T2','mean.C3T1','mean.C3T2','mean.C4T1','mean.C4T2','e.nocue','e.double','e.centre','e.spatial','e.incong','e.cong','pc.C1T1','pc.C1T2','pc.C2T1','pc.C2T2','pc.C3T1','pc.C3T2','pc.C4T1','pc.C4T2']
	summary[1] = [];
	summary[1][0] = userInfo[0];							//userID
	summary[1][1] = userInfo[4];							//studyID
	summary[1][2] = softwareVersion;						//ANTversion
	summary[1][3] = userInfo[6];							//targFile
	summary[1][4] = formatDate(userInfo[7]);				//ANTdate
	summary[1][5] = formatTime(userInfo[7]);				//ANTtime
//	summary[1][6] = (userInfo[8]-userInfo[7])/1000;
	summary[1][6] = formatMilliseconds(userInfo[8]-userInfo[7]);	//SessionDur
	summary[1][7] = userInfo[3];							//Session
	summary[1][8] = userInfo[1];							//Age
	summary[1][9] = userInfo[2];							//Sex
	summary[1][10] = userInfo[5];							//Group
	summary[1][11] = allResults.length						//ANT.N
	summary[1][12] = median(allCorrectRT);					//med.all
	summary[1][13] = mean(allCorrectRT);					//mean.all
	summary[1][14] = (Math.round((standardDeviation(allCorrectRT))*100))/100;		//sd.all
	summary[1][15] = arrayMin(allCorrectRT);				//min.all
	summary[1][16] = arrayMax(allCorrectRT);				//max.all
	
	//Now we're going to work from the bottom up, because it makes the math easier
	//pc = Percent Correct, not Percent Error, I think
	summary[1][57] = (Math.round((100-percentError(C4T2))*100))/100;				//pc.C4T2
	summary[1][56] = (Math.round((100-percentError(C4T1))*100))/100;				//pc.C4T1
	summary[1][55] = (Math.round((100-percentError(C3T2))*100))/100;				//pc.C3T2
	summary[1][54] = (Math.round((100-percentError(C3T1))*100))/100;				//pc.C3T1
	summary[1][53] = (Math.round((100-percentError(C2T2))*100))/100;				//pc.C2T2
	summary[1][52] = (Math.round((100-percentError(C2T1))*100))/100;				//pc.C2T1
	summary[1][51] = (Math.round((100-percentError(C1T2))*100))/100;				//pc.C1T2
	summary[1][50] = (Math.round((100-percentError(C1T1))*100))/100;				//pc.C1T1
	
	totalCong = C1T1.concat(C2T1,C3T1,C4T1);
	summary[1][49] = percentError(totalCong);				//e.cong
	totalIncong = C1T2.concat(C2T2,C3T2,C4T2);
	summary[1][48] = percentError(totalIncong);				//e.incong
	totalSpatial = C4T1.concat(C4T2);
	summary[1][47] = percentError(totalSpatial);			//e.spatial
	totalCentre = C2T1.concat(C2T2);
	summary[1][46] = percentError(totalCentre);				//e.centre
	totalDouble = C3T1.concat(C3T2);
	summary[1][45] = percentError(totalDouble);				//e.double
	totalNoCue = C1T1.concat(C1T2);
	summary[1][44] = percentError(totalNoCue);				//e.nocue
	
	//Get the response time values for the correct trials
	var C1T1RT = valueArray(onlyCorrect(C1T1),7);
	var C1T2RT = valueArray(onlyCorrect(C1T2),7);
	var C2T1RT = valueArray(onlyCorrect(C2T1),7);
	var C2T2RT = valueArray(onlyCorrect(C2T2),7);
	var C3T1RT = valueArray(onlyCorrect(C3T1),7);
	var C3T2RT = valueArray(onlyCorrect(C3T2),7);
	var C4T1RT = valueArray(onlyCorrect(C4T1),7);
	var C4T2RT = valueArray(onlyCorrect(C4T2),7);
	
	summary[1][43] = mean(C4T2RT);							//mean.C4T2
	summary[1][42] = mean(C4T1RT);							//mean.C4T1
	summary[1][41] = mean(C3T2RT);							//mean.C3T2
	summary[1][40] = mean(C3T1RT);							//mean.C3T1
	summary[1][39] = mean(C2T2RT);							//mean.C2T2
	summary[1][38] = mean(C2T1RT);							//mean.C2T1
	summary[1][37] = mean(C1T2RT);							//mean.C1T2
	summary[1][36] = mean(C1T1RT);							//mean.C1T1
	
	summary[1][35] = median(C4T2RT);						//med.C4T2
	summary[1][34] = median(C4T1RT);						//med.C4T1
	summary[1][33] = median(C3T2RT);						//med.C3T2
	summary[1][32] = median(C3T1RT);						//med.C3T1
	summary[1][31] = median(C2T2RT);						//med.C2T2
	summary[1][30] = median(C2T1RT);						//med.C2T1
	summary[1][29] = median(C1T2RT);						//med.C1T2
	summary[1][28] = median(C1T1RT);						//med.C1T1
	
	incongMedians = [summary[1][29],summary[1][31],summary[1][33],summary[1][35]];
	summary[1][27] = mean(incongMedians);					//incong
	congMedians = [summary[1][28],summary[1][30],summary[1][32],summary[1][34]];
	summary[1][26] = mean(congMedians);						//cong
	spatialMedians = [summary[1][34],summary[1][35]];
	summary[1][25] = mean(spatialMedians);					//spatial
	centreMedians = [summary[1][30],summary[1][31]];
	summary[1][24] = mean(centreMedians);					//centre
	doubleMedians = [summary[1][32],summary[1][33]];
	summary[1][23] = mean(doubleMedians);					//double
	noCueMedians = [summary[1][28],summary[1][29]];
	summary[1][22] = mean(noCueMedians);					//nocue
	
	summary[1][21] = percentError(allResults);				//e.all
	summary[1][20] = 100-summary[1][21];					//pc.all
	
	summary[1][19] = summary[1][27]-summary[1][26];			//conflict
	summary[1][18] = summary[1][24]-summary[1][25];			//orient
	summary[1][17] = summary[1][22]-summary[1][23];			//alert
	
	return summary;
}

function generateData(userInfo, results) {
	var outputResults = [];
	//The first row is the headings
	outputResults[0] = ['uniqueID','StudyNum','age','sex','group','targFile','Date','block','trial','CueType','TargLoc','TargDirection','Congruency','TrialStartTime','targetOnTime','firstFix','Response','Correct','RT','LowRT'];
	destinationRow=1;												//We've already filled in outputResults[0], so we'll start from 1
	for (sourceTest in results) {			//The test number (should only be 0,1,2)
		for (sourceTrial in results[sourceTest]) {	//The trial within that test (32/test)
			outputResults[destinationRow] = [];
			outputResults[destinationRow][0] = userInfo[0];						//uniqueID
			outputResults[destinationRow][1] = userInfo[4];						//studyNum
			outputResults[destinationRow][2] = userInfo[1];						//age
			outputResults[destinationRow][3] = userInfo[2];						//sex
			outputResults[destinationRow][4] = userInfo[5];						//group
			outputResults[destinationRow][5] = userInfo[6];						//targetType
			outputResults[destinationRow][6] = formatDate(userInfo[7]);			//Date
			outputResults[destinationRow][7] = sourceTest;								//block
			outputResults[destinationRow][8] = parseInt(sourceTrial)+1;					//trial
			outputResults[destinationRow][9] = results[sourceTest][sourceTrial][0];					//CueType
			outputResults[destinationRow][10] = results[sourceTest][sourceTrial][2];					//TargLoc
			outputResults[destinationRow][11] = results[sourceTest][sourceTrial][4];				//TargDirection
			outputResults[destinationRow][12] = results[sourceTest][sourceTrial][1];				//Congruency
			outputResults[destinationRow][13] = formatTime(results[sourceTest][sourceTrial][10]);//trialStartTime
			outputResults[destinationRow][14] = formatTime(results[sourceTest][sourceTrial][11]);//targetOnTime
			outputResults[destinationRow][15] = results[sourceTest][sourceTrial][6];				//firstFix
			switch (results[sourceTest][sourceTrial][8]) {								//Response
				case 37:
					outputResults[destinationRow][16] = 'L';
					break;
				case 39:
					outputResults[destinationRow][16] = 'R';
					break;
				default:
					outputResults[destinationRow][16] = 'None';
					break;
			}
			outputResults[destinationRow][17] = isCorrect(results[sourceTest][sourceTrial]);		//Correct
			outputResults[destinationRow][18] = results[sourceTest][sourceTrial][7];				//RT
			if (results[sourceTest][sourceTrial][7]<100) {								//LowRT
				outputResults[destinationRow][19] = 1;
			} else {
				outputResults[destinationRow][19] = 0;
			}
			destinationRow++;
		}
	}
	return outputResults;	//Returns the total results at a big 2 dimensional array
}

//Array Filtering

//This function checks if an entry is correct or not.  To be correct, the response time must be between 100ms (preemptive) and 1500ms (timeout) AND the correct key must be pressed.
function isCorrect(recordEntry) {
	if ((recordEntry[7]!=1500)&&(recordEntry[7]>100)&&(((recordEntry[4]=='L')&&(recordEntry[8]==37))||((recordEntry[4]=='R')&&(recordEntry[8]==39)))) {
		return 1;
	} else {
		return 0;
	}
}

//Filters an array of trials by correctness, returning only the correct
function onlyCorrect(inputArray) {
	outputArray = [];
	for (i in inputArray) {
		if (isCorrect(inputArray[i])) {
			outputArray.push(inputArray[i]);
		}
	}
	return outputArray;
}

//Returns a simple array of the values at indexOfValues of the given complex array
function valueArray(inputArray, indexOfValues) {
	outputArray = [];
	for (i in inputArray) {
		outputArray.push(inputArray[i][indexOfValues]);
	}
	return outputArray;
}
