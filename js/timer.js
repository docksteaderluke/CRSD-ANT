//Timer functions are designed to be no-frills (and no wasted cycles)

//Just like setTimeout(), but with a time variable so we can use it as a stopwatch too
function startTimer(callback, delay) {
	timerStartTime = new Date().getTime();		//Get the current time in ms
	return setTimeout(callback, delay);			//Set a timer like usual
}

//This is an event-driven early timer termination.  It returns the elapsed time sing the timer started
function interruptTimer(timerID) {
	interruptedTime = new Date().getTime()-timerStartTime;		//We do this first so the time is as accurate as possible, even though we waste a line
	clearTimeout(timerID);										//Cancel that timer so it doesn't timeout later.
	return interruptedTime;										//Return the elapsed time
}