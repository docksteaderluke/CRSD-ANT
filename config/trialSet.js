//This is the data to be used in each trial.  These settings are selected at random as the test runs (in trial.js), but in here they can be in order.
function trialSet() {
//	0-CueType, 1-TargetType, 2-TargetPosition, 3-CuePosition, 4-TargetDirection, 5-FlankDirection

	return [
		[1,'congruent','UP',0,'L','L'],
		[1,'congruent','UP',0,'R','R'],
		[1,'congruent','DOWN',0,'L','L'],
		[1,'congruent','DOWN',0,'R','R'], 
		[1,'incongruent','UP',0,'L','R'],
		[1,'incongruent','UP',0,'R','L'],
		[1,'incongruent','DOWN',0,'L','R'],
		[1,'incongruent','DOWN',0,'R','L'],
		[2,'congruent','UP',0,'L','L'],
		[2,'congruent','UP',0,'R','R'],
		[2,'congruent','DOWN',0,'L','L'],
		[2,'congruent','DOWN',0,'R','R'], 
		[2,'incongruent','UP',0,'L','R'],
		[2,'incongruent','UP',0,'R','L'],
		[2,'incongruent','DOWN',0,'L','R'],
		[2,'incongruent','DOWN',0,'R','L'],
		[3,'congruent','UP',0,'L','L'],
		[3,'congruent','UP',0,'R','R'],
		[3,'congruent','DOWN',0,'L','L'],
		[3,'congruent','DOWN',0,'R','R'], 
		[3,'incongruent','UP',0,'L','R'],
		[3,'incongruent','UP',0,'R','L'],
		[3,'incongruent','DOWN',0,'L','R'],
		[3,'incongruent','DOWN',0,'R','L'],
		[4,'congruent','UP','UP','L','L'],
		[4,'congruent','UP','UP','R','R'],
		[4,'congruent','DOWN','DOWN','L','L'],
		[4,'congruent','DOWN','DOWN','R','R'], 
		[4,'incongruent','UP','UP','L','R'],
		[4,'incongruent','UP','UP','R','L'],
		[4,'incongruent','DOWN','DOWN','L','R'],
		[4,'incongruent','DOWN','DOWN','R','L']
	];
}
