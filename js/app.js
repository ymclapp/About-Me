'use strict';
// use strict is almost alwayst the first line of our js files
console.log('It is working!');
var user="";

function firstQuestion() {
	user = prompt("What is your name?");
	// console.log(user + " , thank you for taking the time to visit my page!");
	alert(user + " , thank you for taking the time to visit my page!");

	var ready = prompt('Are you ready to start the quiz? \n\nAnswer wisely and make sure your answer is in the format of yes or no or y or n');
	// // console.log(ready)
	if (ready === 'n' || ready === 'no') {
		alert("Okay then.  Good bye, " + user);
	} else if (ready === 'yes' || ready === 'y') {
		alert("Ok!  Let\'s go!");
	} else {
		alert("Please provide an answer in the correct format");
	}
}

function dogNumber() {
	var dog = prompt('I currently have four dogs.\n\nAnswer wisely and make sure your answer is in the format of yes or no or y or n');
	// // console.log(dog)
	if (dog === 'n' || dog === 'no') {
		alert("That is correct!  I have two pucheinies (pug/chihuahua/weinie dog");
	} else if (dog === 'yes' || dog === 'y') {
		alert("That is incorrect!    I have two pucheinies (pug/chihuahua/weinie dog");
		// 	// tally
	} else {
		alert("Please provide an answer in the correct format");
	}
}

function liveCo() {
	var liveCo = prompt('Did I live in Colorado for five months?\n\nAnswer wisely and make sure your answer is in the format of yes or no or y or n');
	// // console.log(liveCo);
	if (liveCo === 'n' || liveCo === 'no') {
		alert("That is correct!  I have never lived in Colorado.");
	} else if (liveCo === 'yes' || liveCo === 'y') {
		alert("You're incorrect!  I have never lived in Colorado");
		// 	// tally
	} else {
		alert("Please provide an answer in the correct format");
	}
}

function questionTwo() {
	var goal = prompt('One of my goals is to reinvent myself\n\nAnswer wisely and make sure your answer is in the format of yes or no or y or n');
	// // console.log(goal);
	if (goal === 'n' || goal === 'no') {
		alert("That is incorrect!  I look forward to reinventing myself with these coding courses");
	} else if (goal === 'yes' || goal === 'y') {
		alert("That is correct!  I look forward to reinventing myself with these coding courses");
		// 	// tally
	} else {
		alert("Please provide an answer in the correct format");
	}
}

function questionThree() {
    var workOut = prompt('I workout in my own home\n\nAnswer wisely and make sure your answer is in the format of yes or no or y or n');
	if (workOut === 'n' || workOut === 'no') {
		alert("That is incorrect!  I workout with Beachbody on Demand regularly");
	} else if (workOut === 'yes' || workOut === 'y') {
		alert("That is correct!  I workout with Beachbody on Demand regularly");
		// 	// tally
	} else {
		alert("Please provide an answer in the correct format");
	}
}

// function questionFour() {
//     var guessNumber = prompt("I have a number in my bit-brain that is between 1 and 23.  What number am I thinking of?");
//     // // console.log(guessNumber)
//     if (guessNumber === '17') {
//         alert("You got it!");
//     } else if (guessNumber < '16' || guessNumber > '18') {
//         alert("You're too cold!");
//     } else if (guessNumber === '16' || guessNumber === '18') {
//         alert("You're getting warmer!");
//     } else {
//         alert("Please provide an answer in the correct format/between 1 and 23");
//     }
// }

function questionFour() {
    var userCorrect = false;
    var guessNumber = 17;
    var guesses = 0;
	while (guesses < 6) {
        var guessNumber = prompt("I have a number in my bit-brain that is between 1 and 23.  What number am I thinking of?");

	for (var i = 0; i < 6; i++) {
		if (guessNumber === '17') {
			alert("You got it!");
			guesses = 6;
			userCorrect = true;
			break;
		}
	}
		if (guesses !== 6 && guessNumber < '16' || guessNumber > '18') {
			alert("You're too cold!");
		}

		guesses++;

		if (guesses !== 6 && guessNumber === '16' || guessNumber === '18') {
			alert("You're getting warmer!");
	}
		guesses++;

	} 	if (guesses = 6) {
			alert("The correct answer is 17.  Thank you for playing!");
	}
}

function lastQuestion() {
    var userCorrect = false;
    var bands = ['bon jovi', 'guns and roses', 'tesla', 'motley crue', 'cinderella', 'kix', 'def leppard', 'poison', 'warrant'];
    var guesses = 0;
	while (guesses < 6) {
        var eighties = prompt("In the 80s, I loved hair bands.  Name a hair band and I will let you know if it was one that I liked.  Go!").toLowerCase();

	for (var i = 0; i < bands.length; i++) {
		if (eighties === bands[i]) {
			alert("Bang your head!  Way to go!\n\nHere are the bands that were my top picks:  Bon Jovi, Guns and Roses, Tesla, Motley Crue, Cinderella, Kix, Def Leppard, Warrant, and Poison.");
			alert(user + ", thank you again for visiting my page!");
			guesses = 6;
			userCorrect = true;
			break;
		}
	}	
		if (guesses !== 6) {
            alert(user + ' ,dude, try again!');
		}
		guesses++;
	}	
		if (userCorrect === false) {
			alert("Keep practicing your cowbell!\n\nHere are the bands that were my top picks:  Bon Jovi, Guns and Roses, Tesla, Motley Crue, Cinderella, Kix, Def Leppard, Warrant, and Poison.");
			alert(user + ", thank you again for visiting my page!");
		}
	}

	// Add in the info from Justin's that added up the numbers or Craig's video

firstQuestion();
dogNumber();
liveCo();
questionTwo();
questionThree();
questionFour();
lastQuestion();
