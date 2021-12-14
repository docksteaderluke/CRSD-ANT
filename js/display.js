function setupDisplay() {
	//Calculate the following parameters in pixels based on the PPI
	frameWidth = targetWidthInches*6*ppi;
	frameHeight = ((frameMarginHeightInches + spacingInches)*2 + (targetHeightInches*3)) * ppi;
	frameMarginHeight = frameMarginHeightInches * ppi;
	targetWidth = targetWidthInches * ppi;
	targetHeight = targetHeightInches * ppi;
	spacing = spacingInches * ppi;
	
	//Adjust the size of the "testPage" frame
	testPage = document.getElementById('testPage');
	testPage.style.height = ""+frameHeight+"px";
	testPage.style.width = ""+frameWidth+"px";

	//Adjust the size of the "testPageContainer" frame
	testPageContainer = document.getElementById('testPageContainer');
	testPageContainer.style.height = ""+frameHeight+"px";
	testPageContainer.style.width = ""+frameWidth+"px";
	testPageContainer.style.left = ""+((window.innerWidth - frameWidth)/2)+"px";
	testPageContainer.style.top = ""+((window.innerHeight - frameHeight)/2)+"px";
	
	document.getElementById('practiceFeedbackUP').style.top = ""+frameMarginHeight+"px";
	document.getElementById('practiceFeedbackDOWN').style.bottom = ""+frameMarginHeight+"px";
	//Auto-adjust "testPageContainer" on window resize
	window.onresize = function() {
		testPageContainer.style.left = ""+((window.innerWidth - frameWidth)/2)+"px";
		testPageContainer.style.top = ""+((window.innerHeight - frameHeight)/2)+"px";
	};

	//Regex expressions for finding items by class names
	frameMarginRegex = new RegExp('\\bframeMargin\\b');
	spacingRegex = new RegExp('\\bspacing\\b');
	targetRegex = new RegExp('\\btarget\\b');
	cueRegex = new RegExp('\\bcue\\b');
	targetTypeRefRegex = new RegExp('\\btargetTypeRef\\b');
	displayRegex = new RegExp('\\bdisplay\\b');

	//Loop through all elements and adjust their sizes according to the PPI
	elements = document.getElementsByTagName('*');
	for(i=0; i<elements.length; i++) {
		if(frameMarginRegex.test(elements[i].className)) {			//Frame Margin
			elements[i].style.height = ""+frameMarginHeight+"px";
		}else if(spacingRegex.test(elements[i].className)) {		//Spacing
			elements[i].style.height = ""+spacing+"px";
			//elements[i].style.width = ""+(2*spacing)+"px";
		}else if(targetRegex.test(elements[i].className)) {			//Target
			leftRegex = new RegExp('Left');
			rightRegex = new RegExp('Right');
			if(leftRegex.test(elements[i].getAttribute('src')))
				elements[i].setAttribute('src', "images/targets/" + targetType + "Left.png");
			if(rightRegex.test(elements[i].getAttribute('src')))
				elements[i].setAttribute('src', "images/targets/" + targetType + "Right.png");
			elements[i].style.width = ""+targetWidth+"px";
			elements[i].style.height = ""+targetHeight+"px";
		}else if(cueRegex.test(elements[i].className)) {			//Cue
			elements[i].style.width = ""+targetWidth+"px";
			elements[i].style.height = ""+targetHeight+"px";
		}else if(targetTypeRefRegex.test(elements[i].className)) {	//Stimulus Type
			elements[i].innerHTML = targetType.toLowerCase();
		}else if(displayRegex.test(elements[i].className)) {		//Display
			elements[i].style.width = ""+frameWidth+"px";
			elements[i].style.height = ""+frameHeight+"px";
		}
	}
}