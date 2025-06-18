/************************ 
 * Main Transfer script *
 ************************/

// Import useful stuff
import {PsychoJS} from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import {TrialHandler} from './lib/data-2021.1.4.js';
import {Scheduler} from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';

// Get useful functions
const {abs, sin, cos, PI: pi, sqrt} = Math;
const {round} = util;

// Initialize
const PsychoXP = new PsychoJS({debug: true});

// Open window (without full screen)
PsychoXP.openWindow({
	fullscr: false,
	color: new util.Color([245/256, 245/256, 220/256]),
	units: 'height',
	waitBlanking: true
});

// Store information about the experiment session
let expName = 'Transfer-K2'; 
let expInfo = {	'Participant': '', 'Grade': '', 'Session': ''};

// Show a window asking for participant and session name
PsychoXP.schedule(PsychoXP.gui.DlgFromDict({
	dictionary: expInfo,
	title: expName
}));

// Initialize the scheduling
const FlowScheduler = new Scheduler(PsychoXP);
const DialogCancelScheduler = new Scheduler(PsychoXP);

// Uncomment if you want to run photo hunt
// PsychoXP.setRedirectUrls(undefined, "https://run.pavlovia.org/earoy/photo_hunt/html/") ;

if(expInfo.Participant === ''){ util.addInfoFromUrl(expInfo); };


// Continue if the participant press "Ok"
PsychoXP.scheduleCondition(function() {
	console.log(PsychoXP.gui.dialogComponent)
	return (PsychoXP.gui.dialogComponent.button === 'OK');
}, FlowScheduler, DialogCancelScheduler);




const Loop_GroupitizingPracticeLoopScheduler = new Scheduler(PsychoXP);
const Loop_GroupitizingPracticeRepeatLoopScheduler = new Scheduler(PsychoXP);
const Loop_GroupitizingLoopAScheduler = new Scheduler(PsychoXP);
const Loop_GroupitizingLoopBScheduler = new Scheduler(PsychoXP);

// Schedule the experiment
FlowScheduler.add(ExperimentInit);

// secret code routine -- comment out to skip
// FlowScheduler.add(WelcomeRoutineBegin());
// FlowScheduler.add(WelcomeRoutineEachFrame());
// FlowScheduler.add(WelcomeRoutineEnd());

FlowScheduler.add(WelcomeRoutineNoCodeBegin());
FlowScheduler.add(WelcomeRoutineNoCodeEachFrame());
FlowScheduler.add(WelcomeRoutineNoCodeEnd());

FlowScheduler.add(InstructionsRoutineBegin());
FlowScheduler.add(InstructionsRoutineEachFrame());
FlowScheduler.add(InstructionsRoutineEnd());

FlowScheduler.add(Enum_InstructionsRoutineBegin());
FlowScheduler.add(Enum_InstructionsRoutineEachFrame());
FlowScheduler.add(Enum_InstructionsRoutineEnd());

FlowScheduler.add(Loop_GroupitizingPracticeLoopBegin, Loop_GroupitizingPracticeLoopScheduler);
FlowScheduler.add(Loop_GroupitizingPracticeLoopScheduler);
FlowScheduler.add(Loop_GroupitizingPracticeLoopEnd);

FlowScheduler.add(PracticeEndRoutineBegin());
FlowScheduler.add(PracticeEndRoutineEachFrame());
FlowScheduler.add(PracticeEndRoutineEnd());

FlowScheduler.add(Loop_GroupitizingLoopABegin, Loop_GroupitizingLoopAScheduler);
FlowScheduler.add(Loop_GroupitizingLoopAScheduler);
FlowScheduler.add(Loop_GroupitizingLoopAEnd);

FlowScheduler.add(StopsignRoutineBegin());
FlowScheduler.add(StopsignRoutineEachFrame());
FlowScheduler.add(StopsignRoutineEnd());

FlowScheduler.add(BreakRoutineBegin());
FlowScheduler.add(BreakRoutineEachFrame());
FlowScheduler.add(BreakRoutineEnd());

FlowScheduler.add(Loop_GroupitizingLoopBBegin, Loop_GroupitizingLoopBScheduler);
FlowScheduler.add(Loop_GroupitizingLoopBScheduler);
FlowScheduler.add(Loop_GroupitizingLoopBEnd);

FlowScheduler.add(StopsignRoutineBegin());
FlowScheduler.add(StopsignRoutineEachFrame());
FlowScheduler.add(StopsignRoutineEnd());

FlowScheduler.add(EndTaskRoutineBegin());
FlowScheduler.add(EndTaskRoutineEachFrame());
FlowScheduler.add(EndTaskRoutineEnd());

FlowScheduler.add(quitPsychoXP, '', true);

// Quit if the participant press "Quit"
DialogCancelScheduler.add(quitPsychoXP, '', false);

// Load pictures
PsychoXP.start({
	expName: expName,
	expInfo: expInfo,
	resources: [{
		'name': 'TrialList_A.xlsx',
		'path': 'TrialList_A.xlsx'
	}, {
		'name': 'TrialList_B.xlsx',
		'path': 'TrialList_B.xlsx'
	}, {
		'name': 'TrialList_P.xlsx',
		'path': 'TrialList_P.xlsx'
	}, {
		'name': 'Pictures/KeyPad.png',
		'path': 'Pictures/KeyPad.png'
	}, {
		'name': 'Pictures/KeyPad_Alt.png',
		'path': 'Pictures/KeyPad_Alt.png'
	}, {
		'name': 'Pictures/Submit.png',
		'path': 'Pictures/Submit.png'
	}, {
		'name': 'Pictures/Feedback.png',
		'path': 'Pictures/Feedback.png'
	}, {
		'name': 'Pictures/Stopsign.png',
		'path': 'Pictures/Stopsign.png'
	}, {
		'name': 'Pictures/Group_4_2-2_P.png',
		'path': 'Pictures/Group_4_2-2_P.png'
	}, {
		'name': 'Pictures/Group_4_2-2_3.png',
		'path': 'Pictures/Group_4_2-2_3.png'
	}, {
		'name': 'Pictures/Group_4_3-1_3.png',
		'path': 'Pictures/Group_4_3-1_3.png'
	}, {
		'name': 'Pictures/Rand_8_8-0_1.png',
		'path': 'Pictures/Rand_8_8-0_1.png'
	}, {
		'name': 'Pictures/Group_8_4-4_2.png',
		'path': 'Pictures/Group_8_4-4_2.png'
	}, {
		'name': 'Pictures/Group_7_4-3_2.png',
		'path': 'Pictures/Group_7_4-3_2.png'
	}, {
		'name': 'Pictures/Rand_7_7-0_1.png',
		'path': 'Pictures/Rand_7_7-0_1.png'
	}, {
		'name': 'Pictures/Group_6_4-2_2.png',
		'path': 'Pictures/Group_6_4-2_2.png'
	}, {		
		'name': 'Pictures/Rand_6_6-0_1.png',
		'path': 'Pictures/Rand_6_6-0_1.png'
	}, {		
		'name': 'Pictures/Group_6_3-3_2.png',
		'path': 'Pictures/Group_6_3-3_2.png'
	}, {		
		'name': 'Pictures/Rand_6_6-0_2.png',
		'path': 'Pictures/Rand_6_6-0_2.png'
	}, {		
		'name': 'Pictures/Rand_5_5-0_1.png',
		'path': 'Pictures/Rand_5_5-0_1.png'
	}, {		
		'name': 'Pictures/Group_5_3-2_2.png',
		'path': 'Pictures/Group_5_3-2_2.png'
	}, {		
		'name': 'Pictures/Rand_5_5-0_2.png',
		'path': 'Pictures/Rand_5_5-0_2.png'
	}, {		
		'name': 'Pictures/Group_5_4-1_2.png',
		'path': 'Pictures/Group_5_4-1_2.png'
	}, {		
		'name': 'Pictures/Rand_4_4-0_2.png',
		'path': 'Pictures/Rand_4_4-0_2.png'
	}, {		
		'name': 'Pictures/Rand_4_4-0_1.png',
		'path': 'Pictures/Rand_4_4-0_1.png'
	}, {		
		'name': 'Pictures/Group_4_2-2_2.png',
		'path': 'Pictures/Group_4_2-2_2.png'
	}, {		
		'name': 'Pictures/Group_4_3-1_2.png',
		'path': 'Pictures/Group_4_3-1_2.png'
	}, {		
		'name': 'Pictures/Group_8_4-4_1.png',
		'path': 'Pictures/Group_8_4-4_1.png'
	}, {		
		'name': 'Pictures/Group_7_4-3_1.png',
		'path': 'Pictures/Group_7_4-3_1.png'
	}, {		
		'name': 'Pictures/Group_6_4-2_1.png',
		'path': 'Pictures/Group_6_4-2_1.png'
	}, {		
		'name': 'Pictures/Group_6_3-3_1.png',
		'path': 'Pictures/Group_6_3-3_1.png'
	}, {		
		'name': 'Pictures/Group_5_4-1_1.png',
		'path': 'Pictures/Group_5_4-1_1.png'
	}, {		
		'name': 'Pictures/Group_5_3-2_1.png',
		'path': 'Pictures/Group_5_3-2_1.png'
	}, {		
		'name': 'Pictures/Group_4_3-1_1.png',
		'path': 'Pictures/Group_4_3-1_1.png'
	}, {
		'name': 'Pictures/Group_4_2-2_1.png',
		'path': 'Pictures/Group_4_2-2_1.png'
	}, {
		'name': 'Pictures/Group_8_4-4_3.png',
		'path': 'Pictures/Group_8_4-4_3.png'
	}, {
		'name': 'Pictures/Rand_8_8-0_2.png',
		'path': 'Pictures/Rand_8_8-0_2.png'
	}, {
		'name': 'Pictures/Rand_7_7-0_2.png',
		'path': 'Pictures/Rand_7_7-0_2.png'
	}, {
		'name': 'Pictures/Group_7_4-3_3.png',
		'path': 'Pictures/Group_7_4-3_3.png'
	}, {
		'name': 'Pictures/Group_6_4-2_3.png',
		'path': 'Pictures/Group_6_4-2_3.png'
	}, {
		'name': 'Pictures/Rand_6_6-0_4.png',
		'path': 'Pictures/Rand_6_6-0_4.png'
	}, {
		'name': 'Pictures/Group_6_3-3_3.png',
		'path': 'Pictures/Group_6_3-3_3.png'
	}, {
		'name': 'Pictures/Rand_6_6-0_3.png',
		'path': 'Pictures/Rand_6_6-0_3.png'
	}, {
		'name': 'Pictures/Rand_5_5-0_4.png',
		'path': 'Pictures/Rand_5_5-0_4.png'
	}, {
		'name': 'Pictures/Group_5_4-1_3.png',
		'path': 'Pictures/Group_5_4-1_3.png'
	}, {
		'name': 'Pictures/Group_5_3-2_3.png',
		'path': 'Pictures/Group_5_3-2_3.png'
	}, {
		'name': 'Pictures/Rand_5_5-0_3.png',
		'path': 'Pictures/Rand_5_5-0_3.png'
	}, {
		'name': 'Pictures/Rand_4_4-0_4.png',
		'path': 'Pictures/Rand_4_4-0_4.png'
	}, {
		'name': 'Pictures/Rand_4_4-0_3.png',
		'path': 'Pictures/Rand_4_4-0_3.png'
	},{
		'name': 'Pictures/instructions/next_button.png',
		'path': 'Pictures/instructions/next_button.png'
	},{
		'name': 'Pictures/unsure_img.png',
		'path': 'Pictures/unsure_img.png'
	}, {
		'name': 'Pictures/submit_check.png',
		'path': 'Pictures/submit_check.png'
	}, {
		'name': 'Pictures/correction.png',
		'path': 'Pictures/correction.png'
	}, {
		'name': 'Pictures/instructions/transfer_intro.png',
		'path': 'Pictures/instructions/transfer_intro.png'
	}, {
		'name': 'Pictures/instructions/transfer_practice_end.png',
		'path': 'Pictures/instructions/transfer_practice_end.png'
	}, {
		'name': 'Pictures/instructions/transfer_halfway.png',
		'path': 'Pictures/instructions/transfer_halfway.png'
	}, {
		'name': 'Pictures/instructions/transfer_end.png',
		'path': 'Pictures/instructions/transfer_end.png'
	}, {
		'name': 'Pictures/instructions/transfer_intro_arctic.png',
		'path': 'Pictures/instructions/transfer_intro_arctic.png'
	}, {
		'name': 'Pictures/instructions/transfer_practice_end_arctic.png',
		'path': 'Pictures/instructions/transfer_practice_end_arctic.png'
	}, {
		'name': 'Pictures/instructions/transfer_halfway_arctic.png',
		'path': 'Pictures/instructions/transfer_halfway_arctic.png'
	}, {
		'name': 'Pictures/instructions/transfer_end_arctic.png',
		'path': 'Pictures/instructions/transfer_end_arctic.png'
	}, {
		'name': 'Pictures/instructions/transfer_welcome_mountain.png',
		'path': 'Pictures/instructions/transfer_welcome_mountain.png'
	}]
});

// Load some useful functions:
/// to shuffle arrays
function shuffle(Array) {
  for (let I = Array.length - 1; I > 0; I--) {
    let J = Math.floor(Math.random() * (I + 1)); 
    [Array[I], Array[J]] = [Array[J], Array[I]];
  }
}
/// to reorder arrays
function reorder(Arr, Index, N) {
	var Temp = [...Array(N)];
	for (var I = 0; I < N; I++) Temp[Index[I]] = Arr[I];
	for (var I = 0; I < N; I++) {
	Arr[I] = Temp[I];
	Index[I] = I;
    }
}

/// to remove objects from arrays
function mapOut(SourceObject, RemoveKeys = []) {
  const SourceKeys = Object.keys(SourceObject);
  const ReturnKeys = SourceKeys.filter(k => !RemoveKeys.includes(k));
  let ReturnObject = {};
  ReturnKeys.forEach(k => {
    ReturnObject[k] = SourceObject[k];
  });
  return ReturnObject;
}

// Pre-assign variables.
var Instructions_Text;
var PracticeEnd_Text;
var Break_Text;
var TransferEnd_Text;
var Submit;
var WelcomeScene;
var WelcomeScene_noCode;
var secretCode;
var secretCodeAnswer;
var Button_Submit;
var Button_Correction;
var Button_Unsure;
var Button_Next;
var SubmitTime;
var Mouse;
var Buttons;
var PrevButtonState;
var ContinueRoutine;
var KeyPad;
var Operation;
var RoutineClock;
var TrialClock;
var TimeTrial;
var Time;
var Stopsign;
var Notnervous;
var Somewhatnervous;
var Littlenervous;
var Verynervous;
var Veryverynervous;
var RandomList;
var Components;
var Date;
var Calc_Stimulus;
var VH;
var Tooslow;
var Operation;
var Instructions_Text;
var Enum_Instructions_Text;
var Break_Instructions_Text;
// var Practice_Text;
var Loop_Groupitizing_A;
var Loop_Groupitizing_B;
var Loop_GroupitizingPractice;
var Loop_GroupitizingPracticeRepeat;
var FrameCorrection;
var Cross;
var Feedback;
var Feedbacktime;
var ResponseText;
var Ready_Text;
var Image_Stimulus;
var Practiceclock;
var Miniblock1;
var Miniblock2;
var Miniblock3;
var Miniblock4;
var ButtonBox_LH;
var ButtonBox_LM;
var Button_LH;
var Button_MH;
var Button_RH;
var Button_LM;
var Button_MM;
var Button_RM;
var Button_LL;
var Button_ML;
var Button_RL;
var Button_Zero;
var Button_Correction;
var FirstTime;
var AllText;
var AllPresses;
var ItemCorrect;
var ButtonPressed;
var ShowFeedback;
var CorrectPractice;
var DontSave;
var EndScene;
var Donotrecord;
const ChosenPad = "Pictures/KeyPad.png";
const PadName = "Computer_Pad";

// Pre-assign constant values.
const Enumlimit = 120; 					  // This value should be 150 x 2 (300 in total).
const RelativePosition = [0.08, 0.152];    // These values should be 0.08 and 0.152
const buttonOpacity = 0;
const buttonHeight = 0.064;



// Initiliaze the experimental components
function ExperimentInit() {

	WelcomeScene = new visual.TextStim({
		win: PsychoXP.window,
		name: 'WelcomeScene',
		text: 'Enter the Secret Code to Start!',
		font: 'Open Sans',
		units: undefined,
		pos: [0, .2],
		height: 0.04,
		wrapWidth: 0.85,
		ori: 0.0,
		color: new util.Color('black'),
		opacity: undefined,
		depth: 0.0
	});

	WelcomeScene_noCode = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'Welcome_Text',
		units: undefined,
		// image: 'Pictures/instructions/transfer_intro_arctic.png',
		image: 'Pictures/instructions/transfer_welcome_mountain.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0],
		size: [1.51, .85], 
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -3
	});

	// Instruction text
	Instructions_Text = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'Instructions_Text',
		units: undefined,
		// image: 'Pictures/instructions/transfer_intro_arctic.png',
		image: 'Pictures/instructions/transfer_intro.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0],
		size: [1.51, .85], 
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -3
	});
	// PracticeEnd_Text text
	PracticeEnd_Text = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'PracticeEnd_Text',
		units: undefined,
		// image: 'Pictures/instructions/transfer_practice_end_arctic.png',
		image: 'Pictures/instructions/transfer_practice_end.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0],
		size: [1.51, .85], 
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -3
	});
	// Break text
	Break_Text = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'Break_Text',
		units: undefined,
		// image: 'Pictures/instructions/transfer_halfway_arctic.png',
		image: 'Pictures/instructions/transfer_halfway.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0],
		size: [1.51, .85], 
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -3
	});
	// End Task text
	TransferEnd_Text = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'TransferEnd_Text',
		units: undefined,
		// image: 'Pictures/instructions/transfer_end_arctic.png',
		image: 'Pictures/instructions/transfer_end.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0],
		size: [1.51, .85], 
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -3
	});

	Button_Submit = new visual.ImageStim({
		win : PsychoXP.window,
		name : 'Submit', units : undefined, 
		image : 'Pictures/submit_check.png',  mask : undefined,
		ori : 0.0, pos : [(0.225), (- 0.4)], size : [0.15, 0.15],
		color : new util.Color([1, 1, 1]), opacity : undefined,
		flipHoriz : false, flipVert : false,
		texRes : 128.0, interpolate : true, depth : -2.0 
	  });
	  
	// Feedback image
	Feedback = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'Feedback',
		units: undefined,
		image: 'Pictures/Feedback.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0.275],
		size: [0.3, 0.3],
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -1.0
	});
	// Stop image
	Stopsign = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'Stopsign',
		units: undefined,
		image: 'Pictures/Stopsign.png',
		mask: undefined,
		ori: 0.0,
		pos: [0, 0],
		size: [0.5, 0.5],
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -1.0
	});

	// Mouse
	Mouse = new core.Mouse({
		win: PsychoXP.window,
	});
	// Ready text
	Ready_Text = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Ready_Text',
		text: 'We will start with some practice items.\n\nPress the "submit" button on the keypad to start some practice trials!',
		font: 'Open Sans',
		units: undefined,
		pos: [0, 0.15],
		height: 0.04,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: undefined,
		depth: -1.0
	});
	// Keypad
	KeyPad = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'KeyPad',
		units: undefined,
		image: undefined,
		mask: undefined,
		ori: 0.0,
		pos: [0, (-0.10)], 
		size: [0.4, 0.4],
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -3.0
	});
	// Compute the relative position of the response text
	const ResponseboxPosition = KeyPad.pos.map(function (num, idx) {
		return num + RelativePosition[idx];
	});
	// Response text
	ResponseText = new visual.TextBox({
		win: PsychoXP.window,
		name: 'ResponseText',
		font: 'Arial',
		pos: ResponseboxPosition,
		letterHeight: 0.04,
		size: [0.24, 0.052],
		units: undefined,
		color: 'black',
		colorSpace: 'rgb',
		fillColor: new util.Color([245/256, 245/256, 220/256]),
		borderColor: new util.Color([245/256, 245/256, 220/256]),
		bold: false,
		italic: false,
		opacity: 1.0,
		padding: undefined,
		editable: false,
		multiline: false,
		autofocus: false,
		alignment: 'center',
		anchor: 'center',
		depth: -1.0
	});
	// Image_Stimulus
	Image_Stimulus = new visual.ImageStim({
		win: PsychoXP.window,
		name: 'Image_Stimulus',
		units: undefined,
		image: undefined,
		mask: undefined,
		ori: 0.0,
		pos: [0, 0.315],
		size: [0.4, 0.4],
		color: new util.Color([1, 1, 1]),
		opacity: undefined,
		flipHoriz: false,
		flipVert: false,
		texRes: 128.0,
		interpolate: true,
		depth: -2.0
	});
	// Calc_Stimulus
	Calc_Stimulus = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Calc_Stimulus',
		font: 'Courier',
		pos: [0, 0.275],
		height: 0.08,
		size: [0.24, 0.052],
		units: undefined,
		color: 'black',
		colorSpace: 'rgb',
		bold: false,
		italic: false,
		multiline: true,
		opacity: 1.0,
		depth: -1.0,
		alignHoriz: 'center'
	});
	// Fixation "cross"
	Cross = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Cross',
		text: ' ',
		font: 'Courier',
		units: undefined,
		pos: [0, 0.275],
		height: 0.075,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: undefined,
		depth: -5.0
	});
	ButtonBox_LH = new visual.Rect({
		win: PsychoXP.window,
		name: 'test_box',
		width: [0.064, 0.042][0],
		height: [0.042, 0.064][1],
		ori: 0.0,
		pos: [(0.096), (-0.025)],
		lineWidth: 1.0,
		lineColor: new util.Color('red'),
		fillColor: new util.Color('red'),
		opacity: buttonOpacity,
		depth: -1.0
	});
	ButtonBox_LM = new visual.Rect({
		win: PsychoXP.window,
		name: 'test_box',
		width: [0.064, 0.042][0],
		height: [0.042, 0.064][1],
		ori: 0.0,
		pos: [(0), -0.025],
		lineWidth: 1.0,
		lineColor: new util.Color('red'),
		fillColor: new util.Color('red'),
		opacity: buttonOpacity,
		depth: -1.0
	});
	// LH button
	Button_LH = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_LH',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [(-0.096), (-0.025)],
		height: 0.064,
		fillColor: new util.Color('red'),
		borderColor: new util.Color('red'),
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('red'),
		opacity: buttonOpacity,
		depth: 0
	});
	// MH button
	Button_MH = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_MH',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [0, -0.025],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: buttonOpacity,
		depth: -7.0
	});
	// RH button
	Button_RH = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_RH',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [(0.096), (-0.025)],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: buttonOpacity,
		depth: -8.0
	});
	// LM button
	Button_LM = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_LM',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [(-0.096), -0.10],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: buttonOpacity,
		depth: -9.0
	});
	// MM button
	Button_MM = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_MM',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [0, -0.10],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('red'),
		opacity: buttonOpacity,
		depth: -10.0
	});
	// RM button
	Button_RM = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_RM',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [0.096, -0.10],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: buttonOpacity,
		depth: -11.0
	});
	// LL button
	Button_LL = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_LL',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [-0.096, -0.175],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('red'),
		opacity: buttonOpacity,
		depth: -12.0
	});
	// ML button
	Button_ML = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_ML',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [0, -0.175],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: buttonOpacity,
		depth: -13.0
	});
	// RL button
	Button_RL = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_RL',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [0.096, -0.175],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('white'),
		opacity: buttonOpacity,
		depth: -14.0
	});
	// Zero button
	Button_Zero = new visual.TextStim({
		win: PsychoXP.window,
		name: 'Button_Zero',
		text: 'A',
		font: 'Open Sans',
		units: undefined,
		pos: [0, (-0.250)],
		height: 0.064,
		wrapWidth: undefined,
		ori: 0.0,
		color: new util.Color('red'),
		opacity: buttonOpacity,
		depth: -15.0
	});
	Button_Correction = new visual.ImageStim({
		win : PsychoXP.window,
		name : 'Correction', units : undefined, 
		image : 'Pictures/correction.png', mask : undefined,
		ori : 0.0, pos : [-0.225, (- 0.4)], size : [0.15, 0.15],
		color : new util.Color([1, 1, 1]), opacity : undefined,
		flipHoriz : false, flipVert : false,
		texRes : 128.0, interpolate : true, depth : -2.0 
	  });

	  Button_Unsure = new visual.ImageStim({
		win : PsychoXP.window,
		name : 'Unsure', units : undefined, 
		image : 'Pictures/unsure_img.png', mask : undefined,
		ori : 0.0, pos : [(0), (- 0.4)], size : [0.15, 0.15],
		color : new util.Color([1, 1, 1]), opacity : undefined,
		flipHoriz : false, flipVert : false,
		texRes : 128.0, interpolate : true, depth : -2.0 
	  });

	  Button_Next = new visual.ImageStim({
		win : PsychoXP.window,
		name : 'Next', units : 'norm', 
		image : 'Pictures/instructions/next_button.png', mask : undefined,
		ori : 0.0, pos : [0.86, -0.75], size : [0.5, 0.336],
		color : new util.Color([1, 1, 1]), opacity : undefined,
		flipHoriz : false, flipVert : false,
		texRes : 128.0, interpolate : true, depth : 0
	  });
	// Set some timers
	TrialClock = new util.Clock();
	RoutineClock = new util.Clock();
	Practiceclock = new util.Clock();
	// Continue
	return Scheduler.Event.NEXT;
}

// Beginning of Secret Code
function WelcomeRoutineBegin() {
	return function() {

		if (expInfo.Participant == 'NC'){
			DontSave = true;
		}
		else{
			DontSave = false;
		}


		// Set and reset some variables.
		TrialClock.reset();
		secretCodeAnswer = "8446";
		secretCode = "";
		ResponseText.text = '';
		// ResponseText.setAlignment('center');
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		// Add the components into a list
		Components = [];
		Components.push(WelcomeScene);
		Components.push(ResponseText);
		Components.push(Mouse);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(KeyPad);

		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}


// Secret Code
function WelcomeRoutineEachFrame() {
	return function() {
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 0 && WelcomeScene.status === PsychoJS.Status.NOT_STARTED) {
			WelcomeScene.setAutoDraw(true);
		}

		// Set mouse
		if (TimeTrial >= 1.0 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}

		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
					 
					if(ResponseText.text.length < 4){
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							secretCode = secretCode + '7';
							console.log(ResponseText.text.length)

						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							secretCode = secretCode + '8';

						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							secretCode = secretCode + '9';

						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							secretCode = secretCode + '1';

						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							secretCode = secretCode + '2';

						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							secretCode = secretCode + '3';
						}
						
						// Check which button was pressed (shared buttons)
						if (Button_LM.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '4';
							secretCode = secretCode + '4';

						} else if (Button_MM.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '5';
							secretCode = secretCode + '5';

						} else if (Button_RM.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '6';
							secretCode = secretCode + '6';

						} else if (Button_Zero.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '0';
							secretCode = secretCode + '0';

						}
					}
					if (Button_Correction.contains(Mouse)) {
							ResponseText.text = ResponseText.text.slice(0, -1);
							secretCode = ResponseText.text;
							
					}
					// Prepare to stop the trial
					if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {

						ContinueRoutine = false;
					}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 0) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && ResponseText.status === PsychoJS.Status.NOT_STARTED) {
			ResponseText.setAutoDraw(false);
		}

		// Display buttons
		if (TimeTrial > 0 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Update Keypad
		if (TimeTrial >0.0 && KeyPad.status === PsychoJS.Status.NOT_STARTED) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}

		// Display buttons
		if (TimeTrial > 1.0 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}

		// Display buttons
		if (secretCode==secretCodeAnswer) {
			Button_Submit.setAutoDraw(true);
		}


		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of Secret Code
function WelcomeRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Instructions
function WelcomeRoutineNoCodeBegin() {
	return function() {

		// setup redirect URL
		// PsychoXP.setRedirectUrls("https://run.pavlovia.org/earoy/photo_hunt/html?Participant="+expInfo.Participant+"&Grade="+expInfo.Grade+"&Session="+expInfo.Session,"https://run.pavlovia.org/earoy/photo_hunt/html") ;


		// Reset some variables
		Time = 0;
		RoutineClock.reset();
		ContinueRoutine = true; 
		Date = util.MonotonicClock.getDateStr(); 
		// Add the components into a list
		Components = [];
		Components.push(WelcomeScene_noCode);
		Components.push(Button_Submit);
		Components.push(Mouse);
		// Initialize the button press
		PrevButtonState = [0, 0, 0];
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Instructions
function WelcomeRoutineNoCodeEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = RoutineClock.getTime();
		Buttons = Mouse.getPressed(); 
		// Display instructions
		if (Time >= 0.0 && WelcomeScene_noCode.status === PsychoJS.Status.NOT_STARTED) {
			WelcomeScene_noCode.setAutoDraw(true);
		}
		// Display "Submit" button
		if (Time >= 0.0 && Button_Next.status === PsychoJS.Status.NOT_STARTED) {
			Button_Next.setAutoDraw(true);
		}
		// Prepare to stop routine if "Submit" is pressed
		if (!Buttons.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons; 
			if (Buttons.reduce((e, acc) => (e + acc)) > 0) { 
				if (Button_Next.contains(Mouse)) {
					Button_Next.setAutoDraw(false);
					ContinueRoutine = false;
				}
			}
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of instructions
function WelcomeRoutineNoCodeEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Instructions
function InstructionsRoutineBegin() {
	return function() {

		// setup redirect URL
		// PsychoXP.setRedirectUrls("https://run.pavlovia.org/earoy/photo_hunt/html?Participant="+expInfo.Participant+"&Grade="+expInfo.Grade+"&Session="+expInfo.Session,"https://run.pavlovia.org/earoy/photo_hunt/html") ;


		// Reset some variables
		Time = 0;
		RoutineClock.reset();
		ContinueRoutine = true; 
		Date = util.MonotonicClock.getDateStr(); 
		// Add the components into a list
		Components = [];
		Components.push(Instructions_Text);
		Components.push(Button_Submit);
		Components.push(Mouse);
		// Initialize the button press
		PrevButtonState = [0, 0, 0];
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Instructions
function InstructionsRoutineEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = RoutineClock.getTime();
		Buttons = Mouse.getPressed(); 
		// Display instructions
		if (Time >= 0.0 && Instructions_Text.status === PsychoJS.Status.NOT_STARTED) {
			Instructions_Text.setAutoDraw(true);
		}
		// Display "Submit" button
		if (Time >= 0.0 && Button_Next.status === PsychoJS.Status.NOT_STARTED) {
			Button_Next.setAutoDraw(true);
		}
		// Prepare to stop routine if "Submit" is pressed
		if (!Buttons.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons; 
			if (Buttons.reduce((e, acc) => (e + acc)) > 0) { 
				if (Button_Next.contains(Mouse)) {
					Button_Next.setAutoDraw(false);
					ContinueRoutine = false;
				}
			}
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of instructions
function InstructionsRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}


// Beginning of Enum Instructions
function Enum_InstructionsRoutineBegin() {
	return function() {
		// Reset some variables
		Time = 0;
		RoutineClock.reset();
		ContinueRoutine = true; 
		// Add the components into a list
		Components = [];
		Components.push(Instructions_Text);
		Components.push(Button_Next);
		Components.push(Mouse);
		// Set the miniblocks
		Miniblock1 = [0, 1, 2, 3, 4];
		Miniblock2 = [5, 6, 7, 8, 9];
		Miniblock3 = [10, 11, 12, 13, 14];
		Miniblock4 = [15, 16, 17, 18, 19];
		// Shuffle the miniblocks
		shuffle(Miniblock1);
		shuffle(Miniblock2);
		shuffle(Miniblock3);
		shuffle(Miniblock4);
		// Create the random list
		RandomList = Miniblock1.concat(Miniblock2, Miniblock3, Miniblock4);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Enum Instructions
function Enum_InstructionsRoutineEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = RoutineClock.getTime();
		Buttons = Mouse.getPressed(); 
		// Set mouse
		if (Time >= 1.0 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Display instructions
		if (Time >= 0.0 && Instructions_Text.status === PsychoJS.Status.NOT_STARTED) {
			Instructions_Text.setAutoDraw(true);
		}
		// Display "Submit" button
		if (Time >= 0.0 && Button_Next.status === PsychoJS.Status.NOT_STARTED) {
			Button_Next.setAutoDraw(true);
		}
		// Prepare to stop routine if "Submit" is pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			if (!Buttons.every((e, i, ) => (e == PrevButtonState[i]))) { 
				PrevButtonState = Buttons; 
				if (Buttons.reduce((e, acc) => (e + acc)) > 0) { 
					if (Button_Next.contains(Mouse)) {
						Button_Next.setAutoDraw(false);
						ContinueRoutine = false;
					}
				}
			}
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of Enum Instructions
function Enum_InstructionsRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Break Instructions
function BreakRoutineBegin() {
	return function() {
		// Reset some variables
		ContinueRoutine = true; 
		// Add the components into a list
		Components = [];
		Components.push(Break_Text);
		Components.push(Button_Next);
		Components.push(Mouse);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Break Instructions
function BreakRoutineEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = RoutineClock.getTime();
		Buttons = Mouse.getPressed(); 
		// Set mouse
		if (Time >= 1.0 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Display instructions
		if (Time >= 0.0 && Break_Text.status === PsychoJS.Status.NOT_STARTED) {
			Break_Text.setAutoDraw(true);
		}
		// Display "Submit" button
		if (Time >= 0.0 && Button_Next.status === PsychoJS.Status.NOT_STARTED) {
			Button_Next.setAutoDraw(true);
		}
		// Prepare to stop routine if "Submit" is pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			if (!Buttons.every((e, i, ) => (e == PrevButtonState[i]))) { 
				PrevButtonState = Buttons; 
				if (Buttons.reduce((e, acc) => (e + acc)) > 0) { 
					if (Button_Next.contains(Mouse)) {
						Button_Next.setAutoDraw(false);
						ContinueRoutine = false;
					}
				}
			}
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of Break Instructions
function BreakRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}

// Beginning of PracticeEnd
function PracticeEndRoutineBegin() {
	return function() {
		// Reset some variables.
		Time = 0;
		RoutineClock.reset();
		ContinueRoutine = true; 
		// Add the components into a list
		Components = [];
		Components.push(Mouse);
		Components.push(PracticeEnd_Text);
		Components.push(Button_Next);
		// Select the keypad.
		KeyPad.setImage(ChosenPad);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// PracticeEnd
function PracticeEndRoutineEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = RoutineClock.getTime();
		Buttons = Mouse.getPressed(); 
		// Display text
		if (Time >= 0.0 && PracticeEnd_Text.status === PsychoJS.Status.NOT_STARTED) {
			PracticeEnd_Text.setAutoDraw(true);
		}
		// Prepare "Submit" area 
		if (Time >= 0.0 && Button_Next.status === PsychoJS.Status.NOT_STARTED) {
			Button_Next.setAutoDraw(true);
		}
		// Prepare to stop when "Submit" is pressed
		if (!Buttons.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
			if (Buttons.reduce((e, acc) => (e + acc)) > 0) { 
				if (Button_Next.contains(Mouse)) {
					ContinueRoutine = false;
				}
			}
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End PracticeEnd
function PracticeEndRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}

// Beginning of PracticeEnd
function EndTaskRoutineBegin() {
	return function() {
		// Reset some variables.
		Time = 0;
		RoutineClock.reset();
		ContinueRoutine = true; 
		// Add the components into a list
		Components = [];
		Components.push(Mouse);
		Components.push(TransferEnd_Text);
		Components.push(Button_Next);
		// Select the keypad.
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// PracticeEnd
function EndTaskRoutineEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = RoutineClock.getTime();
		Buttons = Mouse.getPressed(); 
		// Display text
		if (Time >= 0.0 && TransferEnd_Text.status === PsychoJS.Status.NOT_STARTED) {
			TransferEnd_Text.setAutoDraw(true);
		}
		// Prepare "Submit" area 
		if (Time >= 0.0 && Button_Next.status === PsychoJS.Status.NOT_STARTED) {
			Button_Next.setAutoDraw(true);
		}
		// Prepare to stop when "Submit" is pressed
		if (!Buttons.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
			if (Buttons.reduce((e, acc) => (e + acc)) > 0) { 
				if (Button_Next.contains(Mouse)) {
					ContinueRoutine = false;
				}
			}
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End PracticeEnd
function EndTaskRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Groupitizing Practice routine
function GroupitizingPracticeRoutineBegin() {
	return function() {
		// Set and reset some variables.
		TrialClock.reset();
		ResponseText.text = '';
		ResponseText.setAlignment('center');
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		ShowFeedback = false;
		SubmitTime = [];
		FirstTime = [];
		AllText = '';
		AllPresses = [];
		ItemCorrect = 0;
		Tooslow = 1;
		Image_Stimulus.setImage(PictureName, false);
		// Add the components into a list
		Components = [];
		Components.push(ResponseText);
		Components.push(Image_Stimulus);
		Components.push(Mouse);
		Components.push(Cross);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(Button_Unsure);
		Components.push(Feedback);
		Components.push(KeyPad);

		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Math routine
function MathPracticeRoutineBegin() {
	return function() {
		// Set and reset some variables.
		TrialClock.reset();
		ResponseText.text = '';
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		ShowFeedback = false;
		SubmitTime = [];
		FirstTime = [];
		AllText = '';
		AllPresses = [];
		ItemCorrect = 0;
		Tooslow = 1;
		Operation = Number1 + " + " + Number2;
		var randj = Math.random(); 
		Calc_Stimulus.text = Operation;
		// Add the components into a list
		Components = [];
		Components.push(ResponseText);
		Components.push(Calc_Stimulus);
		Components.push(KeyPad);
		Components.push(Mouse);
		Components.push(Cross);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(Button_Unsure);
		Components.push(Feedback);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Prepare the Groupitizing Practice loop
function Loop_GroupitizingPracticeLoopBegin(Loop_GroupitizingPracticeLoopScheduler) {
	// Create trial handler
	Loop_GroupitizingPractice = new TrialHandler({
		psychoJS: PsychoXP,
		nReps: 1,
		method: TrialHandler.Method.SEQUENTIAL,
		extraInfo: expInfo,
		originPath: undefined,
		trialList: 'TrialList_P.xlsx',
		seed: undefined,
		name: 'Loop_Groupitizing'
	});
	// Add the loop to the experiment
	PsychoXP.experiment.addLoop(Loop_GroupitizingPractice); 
	// Schedule all the trials in the trialList
	for (const thisLoop_Groupitizing of Loop_GroupitizingPractice) {
		const Snapshot = Loop_GroupitizingPractice.getSnapshot();
		Loop_GroupitizingPracticeLoopScheduler.add(importConditions(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(GroupitizingPracticeRoutineBegin(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(GroupitizingPracticeRoutineEachFrame(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(GroupitizingPracticeRoutineEnd(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(MathPracticeRoutineBegin(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(MathPracticeRoutineEachFrame(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(MathPracticeRoutineEnd(Snapshot));
		Loop_GroupitizingPracticeLoopScheduler.add(endLoopIteration(Loop_GroupitizingPracticeLoopScheduler, Snapshot));
	}
	// Reset the timer and the count
	CorrectPractice = 0;
	RoutineClock.reset();
	// Set some variables
	// Donotrecord = false;
	// Continue
	return Scheduler.Event.NEXT;
}

// Prepare the cleaning of the Groupitizing Practice loop
function Loop_GroupitizingPracticeLoopEnd() {
	PsychoXP.experiment.removeLoop(Loop_GroupitizingPractice);
	return Scheduler.Event.NEXT;
}

// Groupitizing Practice loop
function GroupitizingPracticeRoutineEachFrame() {
	return function() {
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 1.0 && Image_Stimulus.status === PsychoJS.Status.NOT_STARTED) {
			Image_Stimulus.setAutoDraw(true);
		}
		// Remove stimulus after 8 second
		if (Image_Stimulus.status === PsychoJS.Status.STARTED && TimeTrial >= (15.00 - FrameCorrection)) {
			Image_Stimulus.setAutoDraw(false);
		}
		// Set mouse
		if (TimeTrial >= 1.0 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Remove mouse after 8 second
		if (Mouse.status === PsychoJS.Status.STARTED && TimeTrial >= (15.00 - FrameCorrection)) {
			Mouse.status = PsychoXP.status.FINISHED;
		}
		// Set cross
		if (TimeTrial >= 0.8 && Cross.status === PsychoJS.Status.NOT_STARTED) {
			Cross.setAutoDraw(true);
		}
		// Remove cross
		if (Cross.status === PsychoJS.Status.STARTED && TimeTrial >= (1 - FrameCorrection)) {
			Cross.setAutoDraw(false);
		}
		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
					
					if (Button_LH.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '7';
						AllText = AllText + '7';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_MH.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '8';
						AllText = AllText + '8';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RH.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '9';
						AllText = AllText + '9';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_LL.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '1';
						AllText = AllText + '1';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_ML.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '2';
						AllText = AllText + '2';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RL.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '3';
						AllText = AllText + '3';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					}
				
				// Check which button was pressed (shared buttons)
				if (Button_LM.contains(Mouse)) {
					ResponseText.text = ResponseText.text + '4';
					AllText = AllText + '4';
					if (FirstTime.length === 0) {
						FirstTime = TimeTrial;
					}
					AllPresses.push(TimeTrial);
				} else if (Button_MM.contains(Mouse)) {
					ResponseText.text = ResponseText.text + '5';
					AllText = AllText + '5';
					if (FirstTime.length === 0) {
						FirstTime = TimeTrial;
					}
					AllPresses.push(TimeTrial);
				} else if (Button_RM.contains(Mouse)) {
					ResponseText.text = ResponseText.text + '6';
					AllText = AllText + '6';
					if (FirstTime.length === 0) {
						FirstTime = TimeTrial;
					}
					AllPresses.push(TimeTrial);
				} else if (Button_Zero.contains(Mouse)) {
					ResponseText.text = ResponseText.text + '0';
					AllText = AllText + '0';
					if (FirstTime.length === 0) {
						FirstTime = TimeTrial;
					}
					AllPresses.push(TimeTrial);
				} else if (Button_Correction.contains(Mouse)) {
					ResponseText.text = ResponseText.text.slice(0, -1);
					AllText = AllText + 'X';
					AllPresses.push(TimeTrial);
				}
				// Prepare to stop the trial
				if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {
					SubmitTime = TimeTrial;
					AllText = AllText + '$';
					AllPresses.push(TimeTrial);
					// Check whether the response is correct
					if (parseInt(ResponseText.text) == Cardinality) {
						ItemCorrect = 1;
						ShowFeedback = true;
						Practiceclock.reset();
						CorrectPractice++
					}
					ContinueRoutine = false;
				}
				if (Button_Unsure.contains(Mouse)) {
					SubmitTime = TimeTrial;
					AllText = 'Unsure$';
					AllPresses.push(TimeTrial);
					ContinueRoutine = false;
				}
				// Do not allow more than two digits
				if (ResponseText.text.length > 2) {
					ResponseText.text = ResponseText.text.slice(0, -1);
				}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 1.0) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			ResponseText.setAutoDraw(false);
		}
		// Update Keypad
		if (TimeTrial < 9) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}
		// Remove Keypad
		if (KeyPad.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			KeyPad.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RM.setAutoDraw(false);
		}	
		// Display buttons
		if (TimeTrial > 1.0 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_ML.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_ML.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Zero.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Zero.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Submit.status === PsychoJS.Status.NOT_STARTED) {
			Button_Submit.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Submit.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Submit.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Unsure.status === PsychoJS.Status.NOT_STARTED) {
			Button_Unsure.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Unsure.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Unsure.setAutoDraw(false);
		}
		// End if too long
		if (TimeTrial >= (30 - FrameCorrection) ) {
			Tooslow = 999;
			ResponseText.text = '[]';
			AllText = [];
			ContinueRoutine = false;
		}

		// Show feedback if correct response during training
		if (ShowFeedback) {
			ContinueRoutine = true;
			if (Feedback.status === PsychoJS.Status.NOT_STARTED) {
				Calc_Stimulus.setAutoDraw(false);
				Feedback.setAutoDraw(true);
			}
			Feedbacktime = Practiceclock.getTime();
			if (Feedbacktime > 0.500) {
				Feedback.setAutoDraw(false);
				ShowFeedback = false;
			ContinueRoutine = false;
			}
		}

		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// Math Practice loop
function MathPracticeRoutineEachFrame() {
	return function() {
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 0.50 && Calc_Stimulus.status === PsychoJS.Status.NOT_STARTED) {
			Calc_Stimulus.setAutoDraw(true);
		}
		// Remove stimulus after 8 second
		if (Calc_Stimulus.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Calc_Stimulus.setAutoDraw(false);
		}
		// Set mouse
		if (TimeTrial >= 0.50 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Remove mouse after 8 second
		if (Mouse.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Mouse.status = PsychoXP.status.FINISHED;
		}
		// Set cross
		if (TimeTrial >= 0.8 && Cross.status === PsychoJS.Status.NOT_STARTED) {
			//Cross.setAutoDraw(true);
		}
		// Remove cross
		if (Cross.status === PsychoJS.Status.STARTED && TimeTrial >= (1 - FrameCorrection)) {
			//Cross.setAutoDraw(false);
		}
		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					// Check which button was pressed (shared buttons)
					if (Button_LM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '4';
						AllText = AllText + '4';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_MM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '5';
						AllText = AllText + '5';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '6';
						AllText = AllText + '6';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Zero.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '0';
						AllText = AllText + '0';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Correction.contains(Mouse)) {
						ResponseText.text = ResponseText.text.slice(0, -1);
						AllText = AllText + 'X';
						AllPresses.push(TimeTrial);
					}
					// Prepare to stop the trial
					if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {
						SubmitTime = TimeTrial;
						AllText = AllText + '$';
						AllPresses.push(TimeTrial);
						// Check whether the response is correct
						if (parseInt(ResponseText.text) == Sum) {
							ItemCorrect = 1;
							ShowFeedback = true;
							Practiceclock.reset();
							CorrectPractice++
						}
						ContinueRoutine = false;
					}
					if (Button_Unsure.contains(Mouse)) {
						SubmitTime = TimeTrial;
						AllText = 'Unsure$';
						AllPresses.push(TimeTrial);
						ContinueRoutine = false;
					}
					// Do not allow more than two digits
					if (ResponseText.text.length > 2) {
						ResponseText.text = ResponseText.text.slice(0, -1);
					}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 0.50) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			ResponseText.setAutoDraw(false);
		}
		// Update Keypad
		if (TimeTrial < 8.50) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}
		// Remove Keypad
		if (KeyPad.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			KeyPad.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RM.setAutoDraw(false);
		}	
		// Display buttons
		if (TimeTrial > 0.50 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_ML.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_ML.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Zero.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Zero.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Submit.status === PsychoJS.Status.NOT_STARTED) {
			Button_Submit.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Submit.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Submit.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Unsure.status === PsychoJS.Status.NOT_STARTED) {
			Button_Unsure.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Unsure.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Unsure.setAutoDraw(false);
		}
		// End if too long
		if (TimeTrial >= (30 - FrameCorrection) ) {
			Tooslow = 999;
			ResponseText.text = '[]';
			AllText = [];
			ContinueRoutine = false;
		}

		// Show feedback if correct response during training
		if (ShowFeedback) {
			ContinueRoutine = true;
			if (Feedback.status === PsychoJS.Status.NOT_STARTED) {
				Image_Stimulus.setAutoDraw(false);
				Feedback.setAutoDraw(true);
			}
			Feedbacktime = Practiceclock.getTime();
			if (Feedbacktime > 0.500) {
				Feedback.setAutoDraw(false);
				ShowFeedback = false;
			ContinueRoutine = false;
			}
		}

		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of Groupitizing Practice loop
function GroupitizingPracticeRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		// Add relevant data to the datafile
		if (!DontSave) {
			PsychoXP.experiment.addData('Array_Response', ResponseText.text);
			PsychoXP.experiment.addData('Array_Correct', ItemCorrect);
			PsychoXP.experiment.addData('Array_Submit_RT', SubmitTime);
			PsychoXP.experiment.addData('Array_First_RT', FirstTime);
			PsychoXP.experiment.addData('Array_All_Inputs', AllText);
			PsychoXP.experiment.addData('Array_All_RT', AllPresses);
			PsychoXP.experiment.addData('Array_Timeout', Tooslow);
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// End of Math Practice loop
function MathPracticeRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		// Add relevant data to the datafile
		if (!DontSave){
			PsychoXP.experiment.addData('Symb_Response', ResponseText.text);
			PsychoXP.experiment.addData('Symb_Correct', ItemCorrect);
			PsychoXP.experiment.addData('Symb_Submit_RT', SubmitTime);
			PsychoXP.experiment.addData('Symb_First_RT', FirstTime);
			PsychoXP.experiment.addData('Symb_All_Inputs', AllText);
			PsychoXP.experiment.addData('Symb_All_RT', AllPresses);
			PsychoXP.experiment.addData('Symb_Timeout', Tooslow);
			PsychoXP.experiment.addData('Pad', PadName);
			PsychoXP.experiment.addData('Date', Date);
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Math Practice Repeat routine
function MathPracticeRepeatRoutineBegin() {
	return function() {
		// Set and reset some variables.
		TrialClock.reset();
		ResponseText.text = '';
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		ShowFeedback = false;
		SubmitTime = [];
		FirstTime = [];
		AllText = '';
		AllPresses = [];
		ItemCorrect = 0;
		Tooslow = 1;
		Operation = Number1 + " + " + Number2;
		var randj = Math.random(); 
		Calc_Stimulus.text = Operation;
		// Add the components into a list
		Components = [];
		Components.push(ResponseText);
		Components.push(Calc_Stimulus);
		Components.push(KeyPad);
		Components.push(Mouse);
		Components.push(Cross);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(Button_Unsure);
		Components.push(Feedback);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Groupitizing Practice Repeat routine
function GroupitizingPracticeRepeatRoutineBegin() {
	return function() {
		// Set and reset some variables.
		TrialClock.reset();
		ResponseText.text = '';
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		ShowFeedback = false;
		SubmitTime = [];
		FirstTime = [];
		AllText = '';
		AllPresses = [];
		ItemCorrect = 0;
		Tooslow = 1;
		Image_Stimulus.setImage(PictureName, false);
		// Add the components into a list
		Components = [];
		Components.push(ResponseText);
		Components.push(Image_Stimulus);
		Components.push(KeyPad);
		Components.push(Mouse);
		Components.push(Cross);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(Button_Unsure);
		Components.push(Feedback);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Prepare the Groupitizing Practice Repeat loop
function Loop_GroupitizingPracticeRepeatLoopBegin(Loop_GroupitizingPracticeRepeatLoopScheduler) {
	// Create trial handler
	Loop_GroupitizingPracticeRepeat = new TrialHandler({
		psychoJS: PsychoXP,
		nReps: 1,
		method: TrialHandler.Method.SEQUENTIAL,
		extraInfo: expInfo,
		originPath: undefined,
		trialList: 'TrialList_P.xlsx',
		seed: undefined,
		name: 'Loop_Groupitizing'
	});
	// Add the loop to the experiment
	PsychoXP.experiment.addLoop(Loop_GroupitizingPracticeRepeat); 
	// Schedule all the trials in the trialList
	for (const thisLoop_Groupitizing of Loop_GroupitizingPracticeRepeat) {
		const Snapshot = Loop_GroupitizingPracticeRepeat.getSnapshot();
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(importConditions(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(GroupitizingPracticeRepeatRoutineBegin(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(GroupitizingPracticeRepeatRoutineEachFrame(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(GroupitizingPracticeRepeatRoutineEnd(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(MathPracticeRepeatRoutineBegin(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(MathPracticeRepeatRoutineEachFrame(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(MathPracticeRepeatRoutineEnd(Snapshot));
		Loop_GroupitizingPracticeRepeatLoopScheduler.add(endLoopIteration(Loop_GroupitizingPracticeRepeatLoopScheduler, Snapshot));
	}
	// Reset the timer
	RoutineClock.reset();
	// Continue
	return Scheduler.Event.NEXT;
}

// Prepare the cleaning of the Groupitizing Practice Repeat loop
function Loop_GroupitizingPracticeRepeatLoopEnd() {
	PsychoXP.experiment.removeLoop(Loop_GroupitizingPracticeRepeat);
	return Scheduler.Event.NEXT;
}

// Math Practice Repeat loop
function MathPracticeRepeatRoutineEachFrame() {
	return function() {
		// Check whether to skip this
		if (TimeTrial < 0.100 && CorrectPractice == 2) {
			ContinueRoutine = false;
			Loop_GroupitizingPracticeRepeat.finished = true;
			Donotrecord = true;
		}
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 0.50 && Calc_Stimulus.status === PsychoJS.Status.NOT_STARTED) {
			Calc_Stimulus.setAutoDraw(true);
		}
		// Remove stimulus after 8 second
		if (Calc_Stimulus.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Calc_Stimulus.setAutoDraw(false);
		}
		// Set mouse
		if (TimeTrial >= 0.50 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Remove mouse after 8 second
		if (Mouse.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Mouse.status = PsychoXP.status.FINISHED;
		}
		// Set cross
		if (TimeTrial >= 0.8 && Cross.status === PsychoJS.Status.NOT_STARTED) {
			//Cross.setAutoDraw(true);
		}
		// Remove cross
		if (Cross.status === PsychoJS.Status.STARTED && TimeTrial >= (1 - FrameCorrection)) {
			//Cross.setAutoDraw(false);
		}
		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
					if (ChosenPad == 'Pictures/KeyPad_Alt.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					// Check which button was pressed if phone key pad
					} else if (ChosenPad == 'Pictures/KeyPad.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					}
					// Check which button was pressed (shared buttons)
					if (Button_LM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '4';
						AllText = AllText + '4';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_MM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '5';
						AllText = AllText + '5';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '6';
						AllText = AllText + '6';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Zero.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '0';
						AllText = AllText + '0';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Correction.contains(Mouse)) {
						ResponseText.text = ResponseText.text.slice(0, -1);
						AllText = AllText + 'X';
						AllPresses.push(TimeTrial);
					}
					// Prepare to stop the trial
					if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {
						SubmitTime = TimeTrial;
						AllText = AllText + '$';
						AllPresses.push(TimeTrial);
						// Check whether the response is correct
						if (parseInt(ResponseText.text) == Sum) {
							ItemCorrect = 1;
							ShowFeedback = true;
							Practiceclock.reset();
						}
						ContinueRoutine = false;
					}
					if (Button_Unsure.contains(Mouse)) {
						SubmitTime = TimeTrial;
						AllText = 'Unsure$';
						AllPresses.push(TimeTrial);
						ContinueRoutine = false;
					}
					// Do not allow more than two digits
					if (ResponseText.text.length > 2) {
						ResponseText.text = ResponseText.text.slice(0, -1);
					}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 0.50) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			ResponseText.setAutoDraw(false);
		}
		// Update Keypad
		if (TimeTrial < 8.50) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}
		// Remove Keypad
		if (KeyPad.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			KeyPad.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RM.setAutoDraw(false);
		}	
		// Display buttons
		if (TimeTrial > 0.50 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_ML.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_ML.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Zero.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Zero.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Submit.status === PsychoJS.Status.NOT_STARTED) {
			Button_Submit.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Submit.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Submit.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Unsure.status === PsychoJS.Status.NOT_STARTED) {
			Button_Unsure.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Unsure.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Unsure.setAutoDraw(false);
		}
		// End if too long
		if (TimeTrial >= (30 - FrameCorrection) ) {
			Tooslow = 999;
			ResponseText.text = '[]';
			AllText = [];
			ContinueRoutine = false;
		}

		// Show feedback if correct response during training
		if (ShowFeedback) {
			ContinueRoutine = true;
			if (Feedback.status === PsychoJS.Status.NOT_STARTED) {
				Image_Stimulus.setAutoDraw(false);
				Feedback.setAutoDraw(true);
			}
			Feedbacktime = Practiceclock.getTime();
			if (Feedbacktime > 0.500) {
				Feedback.setAutoDraw(false);
				ShowFeedback = false;
			ContinueRoutine = false;
			}
		}

		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// Groupitizing Practice Repeat loop
function GroupitizingPracticeRepeatRoutineEachFrame() {
	return function() {
		// Check whether to skip this
		if (TimeTrial < 0.100 && CorrectPractice == 2) {
			ContinueRoutine = false;
			Loop_GroupitizingPracticeRepeat.finished = true;
			Donotrecord = true;
		}
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 1.0 && Image_Stimulus.status === PsychoJS.Status.NOT_STARTED) {
			Image_Stimulus.setAutoDraw(true);
		}
		// Remove stimulus after 8 second
		if (Image_Stimulus.status === PsychoJS.Status.STARTED && TimeTrial >= (15.00 - FrameCorrection)) {
			Image_Stimulus.setAutoDraw(false);
		}
		// Set mouse
		if (TimeTrial >= 1.0 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Remove mouse after 8 second
		if (Mouse.status === PsychoJS.Status.STARTED && TimeTrial >= (15.00 - FrameCorrection)) {
			Mouse.status = PsychoXP.status.FINISHED;
		}
		// Set cross
		if (TimeTrial >= 0.8 && Cross.status === PsychoJS.Status.NOT_STARTED) {
			Cross.setAutoDraw(true);
		}
		// Remove cross
		if (Cross.status === PsychoJS.Status.STARTED && TimeTrial >= (1 - FrameCorrection)) {
			Cross.setAutoDraw(false);
		}
		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
					if (ChosenPad == 'Pictures/KeyPad_Alt.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					// Check which button was pressed if phone key pad
					} else if (ChosenPad == 'Pictures/KeyPad.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					}
					// Check which button was pressed (shared buttons)
					if (Button_LM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '4';
						AllText = AllText + '4';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_MM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '5';
						AllText = AllText + '5';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '6';
						AllText = AllText + '6';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Zero.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '0';
						AllText = AllText + '0';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Correction.contains(Mouse)) {
						ResponseText.text = ResponseText.text.slice(0, -1);
						AllText = AllText + 'X';
						AllPresses.push(TimeTrial);
					}
					// Prepare to stop the trial
					if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {
						SubmitTime = TimeTrial;
						AllText = AllText + '$';
						AllPresses.push(TimeTrial);
						// Check whether the response is correct
						if (parseInt(ResponseText.text) == Cardinality) {
							ItemCorrect = 1;
							ShowFeedback = true;
							Practiceclock.reset();
						}
						ContinueRoutine = false;
					}
					if (Button_Unsure.contains(Mouse)) {
						SubmitTime = TimeTrial;
						AllText = 'Unsure$';
						AllPresses.push(TimeTrial);
						ContinueRoutine = false;
					}
					// Do not allow more than two digits
					if (ResponseText.text.length > 2) {
						ResponseText.text = ResponseText.text.slice(0, -1);
					}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 1.0) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			ResponseText.setAutoDraw(false);
		}
		// Update Keypad
		if (TimeTrial < 30) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}
		// Remove Keypad
		if (KeyPad.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			KeyPad.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RM.setAutoDraw(false);
		}	
		// Display buttons
		if (TimeTrial > 1.0 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_ML.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_ML.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Zero.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Zero.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Submit.status === PsychoJS.Status.NOT_STARTED) {
			Button_Submit.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Submit.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Submit.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 1.0 && Button_Unsure.status === PsychoJS.Status.NOT_STARTED) {
			Button_Unsure.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Unsure.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Unsure.setAutoDraw(false);
		}
		// End if too long
		if (TimeTrial >= (30 - FrameCorrection) ) {
			Tooslow = 999;
			ResponseText.text = '[]';
			AllText = [];
			ContinueRoutine = false;
		}

		// Show feedback if correct response during training
		if (ShowFeedback) {
			ContinueRoutine = true;
			if (Feedback.status === PsychoJS.Status.NOT_STARTED) {
				Calc_Stimulus.setAutoDraw(false);
				Feedback.setAutoDraw(true);
			}
			Feedbacktime = Practiceclock.getTime();
			if (Feedbacktime > 0.500) {
				Feedback.setAutoDraw(false);
				ShowFeedback = false;
			ContinueRoutine = false;
			}
		}

		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of Groupitizing Practice Repeat loop
function GroupitizingPracticeRepeatRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		// Add relevant data to the datafile
		if (!DontSave) {
			PsychoXP.experiment.addData('Array_Response', ResponseText.text);
			PsychoXP.experiment.addData('Array_Correct', ItemCorrect);
			PsychoXP.experiment.addData('Array_Submit_RT', SubmitTime);
			PsychoXP.experiment.addData('Array_First_RT', FirstTime);
			PsychoXP.experiment.addData('Array_All_Inputs', AllText);
			PsychoXP.experiment.addData('Array_All_RT', AllPresses);
			PsychoXP.experiment.addData('Array_Timeout', Tooslow);
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// End of Math Practice Repeat loop
function MathPracticeRepeatRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		// Add relevant data to the datafile
		if (!DontSave) {
			PsychoXP.experiment.addData('Symb_Response', ResponseText.text);
			PsychoXP.experiment.addData('Symb_Correct', ItemCorrect);
			PsychoXP.experiment.addData('Symb_Submit_RT', SubmitTime);
			PsychoXP.experiment.addData('Symb_First_RT', FirstTime);
			PsychoXP.experiment.addData('Symb_All_Inputs', AllText);
			PsychoXP.experiment.addData('Symb_All_RT', AllPresses);
			PsychoXP.experiment.addData('Symb_Timeout', Tooslow);
			PsychoXP.experiment.addData('Pad', PadName);
			PsychoXP.experiment.addData('Date', Date);
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Groupitizing routine
function GroupitizingRoutineBegin() {
	return function() {
		// Set and reset some variables.
		TrialClock.reset();
		ResponseText.text = '';
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		SubmitTime = [];
		FirstTime = [];
		AllText = '';
		AllPresses = [];
		ItemCorrect = 0;
		Tooslow = 1;
		Image_Stimulus.setImage(PictureName, false);
		// Add the components into a list
		Components = [];
		Components.push(ResponseText);
		Components.push(Image_Stimulus);
		Components.push(KeyPad);
		Components.push(Mouse);
		Components.push(Cross);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(Button_Unsure);
		Components.push(Feedback);
		// Components.push(Practice_Text);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Math routine
function MathRoutineBegin() {
	return function() {
		// Set and reset some variables.
		TrialClock.reset();
		ResponseText.text = '';
		KeyPad.setImage(ChosenPad);
		ContinueRoutine = true; 
		SubmitTime = [];
		FirstTime = [];
		AllText = '';
		AllPresses = [];
		ItemCorrect = 0;
		Tooslow = 1;
		Operation = Number1 + " + " + Number2;
		var randj = Math.random(); 
		Calc_Stimulus.text = Operation;
		// Add the components into a list
		Components = [];
		Components.push(ResponseText);
		Components.push(Calc_Stimulus);
		Components.push(KeyPad);
		Components.push(Mouse);
		Components.push(Cross);
		Components.push(Button_LH);
		Components.push(Button_MH);
		Components.push(Button_RH);
		Components.push(Button_LM);
		Components.push(Button_MM);
		Components.push(Button_RM);
		Components.push(Button_LL);
		Components.push(Button_ML);
		Components.push(Button_RL);
		Components.push(Button_Zero);
		Components.push(Button_Submit);
		Components.push(Button_Correction);
		Components.push(Button_Unsure);
		Components.push(Feedback);
		// Components.push(Practice_Text);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Prepare the Groupitizing loop
function Loop_GroupitizingLoopABegin(Loop_GroupitizingLoopAScheduler) {
	// Create trial handler
	Loop_Groupitizing_A = new TrialHandler({
		psychoJS: PsychoXP,
		nReps: 1,
		method: TrialHandler.Method.SEQUENTIAL,
		extraInfo: expInfo,
		originPath: undefined,
		trialList: 'TrialList_A.xlsx',
		seed: undefined,
		name: 'Loop_Groupitizing_A'
	});
	// Reorder trials based on miniblocks
	reorder(Loop_Groupitizing_A.trialList, RandomList, 20);
	// Add the loop to the experiment
	PsychoXP.experiment.addLoop(Loop_Groupitizing_A); 
	// Schedule all the trials in the trialList
	for (const thisLoop_Groupitizing of Loop_Groupitizing_A) {
		const Snapshot = Loop_Groupitizing_A.getSnapshot();
		Loop_GroupitizingLoopAScheduler.add(importConditions(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(GroupitizingRoutineBegin(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(GroupitizingRoutineEachFrame(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(GroupitizingRoutineEnd(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(MathRoutineBegin(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(MathRoutineEachFrame(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(MathRoutineEnd(Snapshot));
		Loop_GroupitizingLoopAScheduler.add(endLoopIteration(Loop_GroupitizingLoopAScheduler, Snapshot));
	}
	// Reset the timer and continue
	RoutineClock.reset();
	return Scheduler.Event.NEXT;
}

// Prepare the Groupitizing loop
function Loop_GroupitizingLoopBBegin(Loop_GroupitizingLoopBScheduler) {
	// Create trial handler
	Loop_Groupitizing_B = new TrialHandler({
		psychoJS: PsychoXP,
		nReps: 1,
		method: TrialHandler.Method.SEQUENTIAL,
		extraInfo: expInfo,
		originPath: undefined,
		trialList: 'TrialList_B.xlsx',
		seed: undefined,
		name: 'Loop_Groupitizing_B'
	});

	// Reorder trials based on miniblocks
	reorder(Loop_Groupitizing_B.trialList, RandomList, 20);
	// Add the loop to the experiment
	PsychoXP.experiment.addLoop(Loop_Groupitizing_B); 
	// Schedule all the trials in the trialList
	for (const thisLoop_Groupitizing of Loop_Groupitizing_B) {
		const Snapshot = Loop_Groupitizing_B.getSnapshot();
		Loop_GroupitizingLoopBScheduler.add(importConditions(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(GroupitizingRoutineBegin(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(GroupitizingRoutineEachFrame(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(GroupitizingRoutineEnd(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(MathRoutineBegin(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(MathRoutineEachFrame(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(MathRoutineEnd(Snapshot));
		Loop_GroupitizingLoopBScheduler.add(endLoopIteration(Loop_GroupitizingLoopBScheduler, Snapshot));
	}
	return Scheduler.Event.NEXT;
}

// Prepare the cleaning of the Groupitizing A loop
function Loop_GroupitizingLoopAEnd() {
	PsychoXP.experiment.removeLoop(Loop_Groupitizing_A);
	// Reset the timer and continue
	RoutineClock.reset();
	return Scheduler.Event.NEXT;
}

// Prepare the cleaning of the Groupitizing B loop
function Loop_GroupitizingLoopBEnd() {
	PsychoXP.experiment.removeLoop(Loop_Groupitizing_B);
	return Scheduler.Event.NEXT;
}

// Groupitizing loop
function GroupitizingRoutineEachFrame(trials) {
	return function() {
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 2.0 && Image_Stimulus.status === PsychoJS.Status.NOT_STARTED) {
			Image_Stimulus.setAutoDraw(true);
		}
		// Remove stimulus after 8 second
		if (Image_Stimulus.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Image_Stimulus.setAutoDraw(false);
		}
		// Set mouse
		if (TimeTrial >= 2.0 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Remove mouse after 8 second
		if (Mouse.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Mouse.status = PsychoXP.status.FINISHED;
		}
		// Set cross
		if (TimeTrial >= 1.8 && Cross.status === PsychoJS.Status.NOT_STARTED) {
			Cross.setAutoDraw(true);
		}
		// Remove cross
		if (Cross.status === PsychoJS.Status.STARTED && TimeTrial >= (2 - FrameCorrection)) {
			Cross.setAutoDraw(false);
		}
		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
					if (ChosenPad == 'Pictures/KeyPad_Alt.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					// Check which button was pressed if phone key pad
					} else if (ChosenPad == 'Pictures/KeyPad.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					}
					// Check which button was pressed (shared buttons)
					if (Button_LM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '4';
						AllText = AllText + '4';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_MM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '5';
						AllText = AllText + '5';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '6';
						AllText = AllText + '6';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Zero.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '0';
						AllText = AllText + '0';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Correction.contains(Mouse)) {
						ResponseText.text = ResponseText.text.slice(0, -1);
						AllText = AllText + 'X';
						AllPresses.push(TimeTrial);
					}
					// Prepare to stop the trial
					if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {
						SubmitTime = TimeTrial;
						AllText = AllText + '$';
						AllPresses.push(TimeTrial);
						// Check whether the response is correct
						if (parseInt(ResponseText.text) == Cardinality) {
							ItemCorrect = 1;
						}
						ContinueRoutine = false;
					}
					if (Button_Unsure.contains(Mouse)) {
						SubmitTime = TimeTrial;
						AllText = 'Unsure$';
						AllPresses.push(TimeTrial);
						ContinueRoutine = false;
					}
					// Do not allow more than two digits
					if (ResponseText.text.length > 2) {
						ResponseText.text = ResponseText.text.slice(0, -1);
					}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 2.0) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			ResponseText.setAutoDraw(false);
		}
		// Update Keypad
		if (TimeTrial < 10) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}
		// Remove Keypad
		if (KeyPad.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			KeyPad.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_Unsure.status === PsychoJS.Status.NOT_STARTED) {
			Button_Unsure.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Unsure.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Unsure.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RM.setAutoDraw(false);
		}	
		// Display buttons
		if (TimeTrial > 2.0 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_ML.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_ML.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Zero.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Zero.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 2.0 && Button_Submit.status === PsychoJS.Status.NOT_STARTED) {
			Button_Submit.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Submit.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Submit.setAutoDraw(false);
		}
		// End if too long
		if (TimeTrial >= (30 - FrameCorrection) ) {
			Tooslow = 999;
			SubmitTime = 999;
			AllPresses = 999;
			ResponseText.text = '[]';
			AllText = [];
			ItemCorrect = 0;
			ContinueRoutine = false;
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			// Stop if time is over
			if (Time > Enumlimit) {
				trials.finished = true;
			} 
			return Scheduler.Event.NEXT;
		}
	};
}

// Math loop
function MathRoutineEachFrame(trials) {
	return function() {
		// Get time and check mouse
		Time = RoutineClock.getTime();
		TimeTrial = TrialClock.getTime();
		Buttons = Mouse.getPressed(); 
		FrameCorrection = PsychoXP.window.monitorFramePeriod * 0.75; 
		// Display stimulus
		if (TimeTrial >= 0.50 && Calc_Stimulus.status === PsychoJS.Status.NOT_STARTED) {
			Calc_Stimulus.setAutoDraw(true);
		}
		// Remove stimulus after 8 second
		if (Calc_Stimulus.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Calc_Stimulus.setAutoDraw(false);
		}
		// Set mouse
		if (TimeTrial >= 0.50 && Mouse.status === PsychoJS.Status.NOT_STARTED) {
			PrevButtonState = [0, 0, 0];
			Mouse.status = PsychoJS.Status.STARTED;
		}
		// Remove mouse after 8 second
		if (Mouse.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Mouse.status = PsychoXP.status.FINISHED;
		}
		// Set cross
		if (TimeTrial >= 0.10 && Cross.status === PsychoJS.Status.NOT_STARTED) {
			// Cross.setAutoDraw(true);
		}
		// Remove cross
		if (Cross.status === PsychoJS.Status.STARTED && TimeTrial >= (0.50 - FrameCorrection)) {
			// Cross.setAutoDraw(false);
		}
		//	Check whether a key was pressed
		if (Mouse.status === PsychoJS.Status.STARTED) {
			ButtonPressed = Mouse.getPressed(); 
			if (!ButtonPressed.every((e, i, ) => (e == PrevButtonState[i]))) { 
			PrevButtonState = Buttons;
				if (ButtonPressed.reduce((e, acc) => (e + acc)) > 0) { 
					// Check which button was pressed if computer key pad
					if (ChosenPad == 'Pictures/KeyPad_Alt.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					// Check which button was pressed if phone key pad
					} else if (ChosenPad == 'Pictures/KeyPad.png') {
						if (Button_LH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '7';
							AllText = AllText + '7';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_MH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '8';
							AllText = AllText + '8';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RH.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '9';
							AllText = AllText + '9';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_LL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '1';
							AllText = AllText + '1';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_ML.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '2';
							AllText = AllText + '2';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						} else if (Button_RL.contains(Mouse)) {
							ResponseText.text = ResponseText.text + '3';
							AllText = AllText + '3';
							if (FirstTime.length === 0) {
								FirstTime = TimeTrial;
							}
							AllPresses.push(TimeTrial);
						}
					}
					// Check which button was pressed (shared buttons)
					if (Button_LM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '4';
						AllText = AllText + '4';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_MM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '5';
						AllText = AllText + '5';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_RM.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '6';
						AllText = AllText + '6';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Zero.contains(Mouse)) {
						ResponseText.text = ResponseText.text + '0';
						AllText = AllText + '0';
						if (FirstTime.length === 0) {
							FirstTime = TimeTrial;
						}
						AllPresses.push(TimeTrial);
					} else if (Button_Correction.contains(Mouse)) {
						ResponseText.text = ResponseText.text.slice(0, -1);
						AllText = AllText + 'X';
						AllPresses.push(TimeTrial);
					}
					// Prepare to stop the trial
					if (Button_Submit.contains(Mouse) && ResponseText.text.length > 0) {
						SubmitTime = TimeTrial;
						AllText = AllText + '$';
						AllPresses.push(TimeTrial);
						// Check whether the response is correct
						if (parseInt(ResponseText.text) == Cardinality) {
							ItemCorrect = 1;
						}
						ContinueRoutine = false;
					}
					if (Button_Unsure.contains(Mouse)) {
						SubmitTime = TimeTrial;
						AllText = 'Unsure$';
						AllPresses.push(TimeTrial);
						ContinueRoutine = false;
					}
					// Do not allow more than two digits
					if (ResponseText.text.length > 2) {
						ResponseText.text = ResponseText.text.slice(0, -1);
					}
				}
			}
		}
		// Update ResponseText
		if (TimeTrial >= 0.50) {
			ResponseText.setAutoDraw(true);
		}
		// Remove ResponseText
		if (ResponseText.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			ResponseText.setAutoDraw(false);
		}
		// Update Keypad
		if (TimeTrial < 8.50) {
			KeyPad.setAutoDraw(false);
			KeyPad.setAutoDraw(true);
		}
		// Remove Keypad
		if (KeyPad.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			KeyPad.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.5 && Button_Correction.status === PsychoJS.Status.NOT_STARTED) {
			Button_Correction.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Correction.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Correction.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.5 && Button_Unsure.status === PsychoJS.Status.NOT_STARTED) {
			Button_Unsure.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Unsure.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Unsure.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_LH.status === PsychoJS.Status.NOT_STARTED) {
			Button_LH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_MH.status === PsychoJS.Status.NOT_STARTED) {
			Button_MH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RH.status === PsychoJS.Status.NOT_STARTED) {
			Button_RH.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RH.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RH.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_LM.status === PsychoJS.Status.NOT_STARTED) {
			Button_LM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_MM.status === PsychoJS.Status.NOT_STARTED) {
			Button_MM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_MM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_MM.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_RM.status === PsychoJS.Status.NOT_STARTED) {
			Button_RM.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RM.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RM.setAutoDraw(false);
		}	
		// Display buttons
		if (TimeTrial > 0.50 && Button_LL.status === PsychoJS.Status.NOT_STARTED) {
			Button_LL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_LL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_LL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 8.50 && Button_ML.status === PsychoJS.Status.NOT_STARTED) {
			Button_ML.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_ML.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_ML.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 8.50 && Button_RL.status === PsychoJS.Status.NOT_STARTED) {
			Button_RL.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_RL.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_RL.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 8.50 && Button_Zero.status === PsychoJS.Status.NOT_STARTED) {
			Button_Zero.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Zero.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Zero.setAutoDraw(false);
		}
		// Display buttons
		if (TimeTrial > 0.50 && Button_Submit.status === PsychoJS.Status.NOT_STARTED) {
			Button_Submit.setAutoDraw(true);
		}
		// Remove buttons
		if (Button_Submit.status === PsychoJS.Status.STARTED && TimeTrial >= (30 - FrameCorrection)) {
			Button_Submit.setAutoDraw(false);
		}
		// End if too long
		if (TimeTrial >= (30 - FrameCorrection) ) {
			Tooslow = 999;
			SubmitTime = 999;
			AllPresses = 999;
			ResponseText.text = '[]';
			AllText = [];
			ItemCorrect = 0;
			ContinueRoutine = false;
		}
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			// Stop if time is over
			if (Time > Enumlimit) {
				trials.finished = true;
			} 
			return Scheduler.Event.NEXT;
		}
	};
}

// End of groupitizing loop
function GroupitizingRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		// Add relevant data to the datafile
		if (!DontSave) {
			PsychoXP.experiment.addData('Array_Response', ResponseText.text);
			PsychoXP.experiment.addData('Array_Correct', ItemCorrect);
			PsychoXP.experiment.addData('Array_Submit_RT', SubmitTime);
			PsychoXP.experiment.addData('Array_First_RT', FirstTime);
			PsychoXP.experiment.addData('Array_All_Inputs', AllText);
			PsychoXP.experiment.addData('Array_All_RT', AllPresses);
			PsychoXP.experiment.addData('Array_Timeout', Tooslow);
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// End of Math loop
function MathRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}

		if (!DontSave) {
		// Add relevant data to the datafile
			PsychoXP.experiment.addData('Symb_Response', ResponseText.text);
			PsychoXP.experiment.addData('Symb_Correct', ItemCorrect);
			PsychoXP.experiment.addData('Symb_Submit_RT', SubmitTime);
			PsychoXP.experiment.addData('Symb_First_RT', FirstTime);
			PsychoXP.experiment.addData('Symb_All_Inputs', AllText);
			PsychoXP.experiment.addData('Symb_All_RT', AllPresses);
			PsychoXP.experiment.addData('Symb_Timeout', Tooslow);
			PsychoXP.experiment.addData('Pad', PadName);
			PsychoXP.experiment.addData('Date', Date);
		}
		// Then continue
		return Scheduler.Event.NEXT;
	};
}

// Beginning of Stop sign
function StopsignRoutineBegin() {
	return function() {
		// Reset some variables.
		TrialClock.reset();
		ContinueRoutine = true; 
		// Add the components into a list
		Components = [];
		Components.push(Stopsign);
		// Set the status as "Not started"
		for (const ThisComponent of Components)
			if ('status' in ThisComponent)
				ThisComponent.status = PsychoJS.Status.NOT_STARTED;
		return Scheduler.Event.NEXT;
	};
}

// Stop sign
function StopsignRoutineEachFrame() {
	return function() {
		// Get time from start of routine and check mouse.
		Time = TrialClock.getTime();
		// Display sign
		if (Time >= 0.0 && Stopsign.status === PsychoJS.Status.NOT_STARTED) {
			Stopsign.setAutoDraw(true);
		}
		// Check when time is over
		if (Time > 1) ContinueRoutine = false;
		// Check whether to stop routine or repeat
		if (ContinueRoutine) {
			return Scheduler.Event.FLIP_REPEAT;
		} else {
			return Scheduler.Event.NEXT;
		}
	};
}

// End of Stop sign
function StopsignRoutineEnd() {
	return function() {
		for (const ThisComponent of Components) {
			if (typeof ThisComponent.setAutoDraw === 'function') {
				ThisComponent.setAutoDraw(false);
			}
		}
		return Scheduler.Event.NEXT;
	};
}

// Some PsychoJS function to make everything work:
// ending loops
function endLoopIteration(WhichScheduler, Snapshot) {
	return function() {
		if (typeof Snapshot !== 'undefined') {
			if (Snapshot.finished) {
				if (PsychoXP.experiment.isEntryEmpty()) {
					PsychoXP.experiment.nextEntry(Snapshot);
				}
				WhichScheduler.stop();
			} else {
				const ThisTrial = Snapshot.getCurrentTrial();
				if (typeof ThisTrial === 'undefined' || !('isTrials' in ThisTrial) || ThisTrial.isTrials) {
					PsychoXP.experiment.nextEntry(Snapshot);
				}
			}
			return Scheduler.Event.NEXT;
		}
	};
}
// importing conditions
function importConditions(CurrentLoop) {
	return function() {
		PsychoXP.importAttributes(CurrentLoop.getCurrentTrial());
		return Scheduler.Event.NEXT;
	};
}
// quitting the experiment
function quitPsychoXP(message, isCompleted) {
	// Check for and save orphaned data
	if (PsychoXP.experiment.isEntryEmpty()) {
		PsychoXP.experiment.nextEntry();
	}
	PsychoXP.experiment._trialsData = PsychoXP.experiment._trialsData.map(obj => mapOut(obj, [ "Loop_Groupitizing.thisRepN", "Loop_Groupitizing.thisTrialN", "Loop_Groupitizing.thisN",  "Loop_Groupitizing.thisIndex", "Loop_Groupitizing.ran", "Loop_Groupitizing_A.thisRepN", "Loop_Groupitizing_A.thisTrialN", "Loop_Groupitizing_A.thisN",  "Loop_Groupitizing_A.thisIndex", "Loop_Groupitizing_A.ran", "Loop_Groupitizing_B.thisRepN", "Loop_Groupitizing_B.thisTrialN", "Loop_Groupitizing_B.thisN",  "Loop_Groupitizing_B.thisIndex", "Loop_Groupitizing_B.ran"]));
	PsychoXP.window.close();
	PsychoXP.quit({
		message: message,
		isCompleted: isCompleted
	});
	return Scheduler.Event.QUIT;
}