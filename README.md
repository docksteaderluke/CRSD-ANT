CRSD-ANT
======================
Background
----------
The Attention Network Test (ANT) was developed by Jin Fan and Michael Posner.  More information about it can be obtained from [Fan's website](https://www.sacklerinstitute.org/cornell/assays_and_tools/ant/jin.fan/).

In 2009, we published an article introducing the ANT to researchers and clinicians with an interest in driving. At that time, we were using the Java version of the ANT, downloaded free of charge from Fan's website. But it takes approximately 20 minutes to complete, which is too long for our purposes. Therefore, we developed a shorter version of the ANT, called the CRSD-ANT. It was programmed by [Luke Docksteader](http://docksteaderluke.com) and [Kris Scott](http://krssctt.com/), and takes about 10 minutes to complete. We are currently working on an article that reports very strong correlations between measures from the CRSD-ANT and Fan & Posner's Java ANT. Anyone interested in trying the CRSD-ANT can download it (free of charge) below.

License
-------
This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License. To view a copy of this licence, visit http://creativecommons.org/licenses/by-nc-sa/3.0/ or send a letter to Creative Commons, 171 Second Street, Suite 300, San Francisco, California 94105, USA.

Any original or modified version of this software must attribute the original work to the following (original) authors, and include a hyperlink (or at very least a URL reference) to their respective Web sites:

- Luke Docksteader - http://docksteaderluke.com
- Kris Scott - http://krssctt.com

Installation
------------
### Download the source files
Click on the "Zip" link in the sidebar above or simply click [here.](https://github.com/docksteaderluke/CRSD-ANT/archive/master.zip)

### Extract the archive
Extract the archive using the zip utility of your choice. Once the archive has been extracted a new folder named "CRSD-ANT" should now exist.

### Running the CRSD-ANT software
Inside of the newly created "CRSD-ANT" folder there should be a file named "index.html". Open this file with the Firefox Web browser and follow the on-screen instructions.

You can use a URL query to pre-populate some of the fields (ID, Session Number, Study ID, Group ID, and Age). This is done in the following format, where 'x' indicates a value:

> index.html?ID=x&sessionNumber=x&studyID=x&groupID=x&age=x

The index.html page will extract the values if they are present and pre-populate the main.html page with those values, marking the text boxes as read-only.
If one or more values are not present in the URL query, then the text boxes will will not be pre-populated and will be editable.

**Important Note:** The CRSD-ANT program will run in any browser, but timing accuracy is not guaranteed in 
all browsers, and importantly, it is known to be faulty in Internet Explorer. 
If you do not have Firefox, you can download it [here.](http://www.mozilla.org/en-US/firefox/new/)

Adding new stimulus images
--------------------------
1. Find image with an aspect ratio of 1:1, preferably 100x100 pixels. Images must be of type .png to allow for transparency.
2. Create a second version of the image facing the opposite direction.
3. Place both images in the images/targets folder and rename them to "NAMELeft.png" and "NAMERight.png". For example: a horse picture would become "HorseLeft.png" and "HorseRight.png".
4. Add a reference to the image file on line 1 of the config/targetTypes.js file:

```javascript
var stimList = ["Arrow", "Truck", "Hand", "Airplane", "Car", "Horse"];
```

Modifying the number of test blocks
-----------------------------------
1. Open js/navigation.js in the text editor of your choice.
2. Near the top of the file, change the following line, replacing "4" with the desired number of blocks:

```javascript
var numberOfTestBlocks = 4;
```

Data files
----------
Description of Data Files Saved by the CRSD-ANT.

### Table 1: Variables in the summary data file. 

|	Variable Name		|	Description												|	Source						|
|-----------------------|-----------------------------------------------------------|-------------------------------|
|uniqueID				|Alphanumeric string (with no spaces)						|Entered by user				|
|studynum				|Alphanumeric string (with no spaces)						|Entered by user				|
|ANTversion				|Numeric version code										|Entered by user				|
|TargFile				|Name of graphics file for target stimulus					|User selects file at startup	|
|ANTdate				|Date of data collection									|Read from system				|
|ANTtime				|Time of day												|Read from system				|
|SessionDur				|Length of session in seconds (start of practice -> end of last test block)	|Computed		| 
|Session				|Session number												|Entered by user				|
|Age					|Age of participant (years)									|Entered by user				|
|Sex					|Sex of participant (M or F)								|Entered by user (checkbox?)	|
|Group					|Alphanumeric group code									|Entered by user				|
|ANT.N					|Total number of trials (excluding practice)				|Computed						|
|med.all				|Median RT for all test block trials[1]						|Computed						|
|mean.all				|Mean RT for all test block trials							|Computed						|
|sd.all					|Standard deviation of all RT for all test block trials		|Computed						|
|min.all				|Minimum RT for all test block trials						|Computed						|
|max.all				|Maximum RT for all test block trials						|Computed						|
|alert					|NOCUE – DOUBLE												|Computed						|
|orient					|CENTRE – SPATIAL											|Computed						|
|conflict				|INCONG – CONG												|Computed						|
|pc.all					|Percent correct over all test trials[2]					|Computed						|
|e.all					|Percent errors over all test trials						|Computed						|
|nocue					|Mean(med.C1T1, med.C1T2)									|Computed						|
|double					|Mean(med.C2T1, med.C2T2)									|Computed						|
|centre					|Mean(med.C3T1, med.C3T2)									|Computed						|
|spatial				|Mean(med.C3T1, med.C3T2)									|Computed						|
|cong					|Mean(med.C1T1, med.C2T1, med.C3T1, med.C4T1)				|Computed						|
|incong					|Mean(med.C1T2, med.C2T2, med.C3T2, med.C4T2)				|Computed						|
|med.C1T1				|Median RT: No Cue × Congruent								|Computed						|
|med.C1T2				|Median RT: No Cue × Incongruent							|Computed						|
|med.C2T1				|Median RT: Centre Cue × Congruent							|Computed						|
|med.C2T2				|Median RT: Centre Cue × Incongruent						|Computed						|
|med.C3T1				|Median RT: Double Cue × Congruent							|Computed						|
|med.C3T2				|Median RT: Double Cue × Incongruent						|Computed						|
|med.C4T1				|Median RT: Spatial Cue × Congruent							|Computed						|
|med.C4T2				|Median RT: Spatial Cue × Incongruent						|Computed						|
|mean.C1T1				|Mean RT: No Cue × Congruent								|Computed						|
|mean.C1T2				|Mean RT: No Cue × Incongruent								|Computed						|
|mean.C2T1				|Mean RT: Centre Cue × Congruent							|Computed						|
|mean.C2T2				|Mean RT: Centre Cue × Incongruent							|Computed						|
|mean.C3T1				|Mean RT: Double Cue × Congruent							|Computed						|
|mean.C3T2				|Mean RT: Double Cue × Incongruent							|Computed						|
|mean.C4T1				|Mean RT: Spatial Cue × Congruent							|Computed						|
|mean.C4T2				|Mean RT: Spatial Cue × Incongruent							|Computed						|
|e.nocue				|% Errors : All No Cue trials								|Computed						|
|e.double				|% Errors : All Double Cue trials							|Computed						|
|e.centre				|% Errors : All Centre Cue trials							|Computed						|
|e.spatial				|% Errors : All Spatial Cue trials							|Computed						|
|e.incong				|% Errors: All Incongruent trials							|Computed						|
|e.cong					|% Errors: All Congruent trials								|Computed						|
|pc.C1T1				|% Errors: No Cue × Congruent								|Computed						|
|pc.C1T2				|% Errors: No Cue × Incongruent								|Computed						|
|pc.C2T1				|% Errors: Centre Cue × Congruent							|Computed						|
|pc.C2T2				|% Errors: Centre Cue × Incongruent							|Computed						|
|pc.C3T1				|% Errors: Double Cue × Congruent							|Computed						|
|pc.C3T2				|% Errors: Double Cue × Incongruent							|Computed						|
|pc.C4T1				|% Errors: Spatial Cue × Congruent							|Computed						|
|pc.C4T2				|% Errors: Spatial Cue × Incongruent						|Computed						|

[1] **Note:** For all summary statistics that are computed based on response times, only correct responses with RTs between 100 
and 1500 ms are used. RT < 100 ms is considered anticipatory, and so is excluded; and the maximum display 
duration for the target is 1500 ms, so that is also the maximum possible RT.

[2] A trial is considered correct if the subject correctly indicated the direction of the target arrow, and if the RT was 
within the range 100 to 1500 ms.

### Table 2: Variables in the raw data file.

|	Variable Name		|	Description												|	Source						|
|-----------------------|-----------------------------------------------------------|-------------------------------|
|uniqueID				|Alphanumeric string (with no spaces)						|Entered by user				|
|StudyNum				|Alphanumeric string (with no spaces)						|Entered by user				|
|age					|Age of participant (years)									|Entered by user				|
|sex					|Sex of participant (M or F)								|Entered by user (checkbox?)	|
|group					|Alphanumeric group code									|Entered by user				|
|Date					|Date of data collection									|Read from system				|
|block					|Block number (0=practice; 1 & 2 for test blocks)			|								|
|trial					|Trial number												|								|
|CueType				|Numeric (1 = No Cue; 2 = Centre Cue; 3 = Double Cue; 4 = Spatial Cue)	|					|
|TargLoc				|String (UP or DOWN)										|								|
|TargDirection			|String: L or R												|								|
|Congruency				|String: Congruent or Incongruent							|								|
|TrialStartTime			|Time at start of trial										|								|
|targetOnTime			|Time at target onset										|								|
|firstFix				|Duration of first fixation (panel 1 in Fig 1)				|								|
|Response				|Subject’s response (L, R, or None)							|								|
|Correct				|1=correct, 0 = incorrect[3]								|								|
|RT						|Response time to nearest millisecond						|								|
|LowRT					|Set to 1 if RT < 100 ms, 0 otherwise						|								|

[3] Set variable CORRECT to 1 if the subject’s response matches the correct response, and if the RT is in the range 
100 to 1500 ms. Otherwise, CORRECT = 0.
