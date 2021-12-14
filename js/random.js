function randomNumber(minimum,maximum) {
	//Math.floor rounds down, so we need to add 1 to our max-min delta
	return Math.floor(Math.random()*(maximum-minimum+1))+minimum;
}