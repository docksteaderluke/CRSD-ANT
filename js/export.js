//This file needs some refactoring to tidy it up a little.

//Takes the data as a multidimensional array and builds it into a nice CSV string, with an optional newline character.  It is recommended to just use \r\n, as it should produce a newline on every platform, but if you want to include code to detect the platform you can do that, and pass in the appropriate newline string.
function dataCSV(data,newline) {
	csv = "";					//Start with an empty string
	for (dataRow in data) {		//Iterate through the rows
		//We then iterate through every column but the last one, since the last doesn't need a comma
		for (dataCell=0;(dataCell<((data[dataRow].length)-1));dataCell++) {
			csv += data[dataRow][dataCell]+",";
		}
		csv += data[dataRow][dataCell];		//Finalize the row with the last column
		if (newline != null) {				//Use a specific newline, if given
			csv += newline;
		} else {
			csv += '\r\n';
		}
	}
	return csv;
}

//Generates the data URI, which contains the contents of the test.  This can be linked to so that, in the event that a user doesn't have flash 10, the user may still download/open the data in a new window
//Takes the data in CSV string format
function dataURI(csvData,mimeType) {
	return "data:"+mimeType+";charset=utf-8,"+csvData;
}

function createExportLink(divName,exportFilename,data) {
	document.getElementById(divName).innerHTML = '<a href="'+dataURI(dataCSV(data,'%0D%0A'),'text/plain')+'" target="_blank">View results in a new window.</a>';
}

//Generates the flash links and the textual new-window links from the data.
function generateExportLink(data) {
	setupData[8] = new Date();
	fileName = setupData[0]+' - '+(setupData[8].getFullYear())+'-'+pad((setupData[8].getMonth()+1),2)+'-'+pad((setupData[8].getDate()),2);
	
	createExportLink('summaryExportLink',fileName+' - Summary.csv',generateSummary(setupData,data));
	createExportLink('dataExportLink',fileName+' - Data.csv',generateData(setupData,data));
	document.getElementById('summaryFilename').value = fileName+' - Summary.csv';
	document.getElementById('dataFilename').value = fileName+' - Data.csv';
}