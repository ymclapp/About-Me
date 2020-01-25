'use strict';
// use strict is almost alwayst the first line of our js files
console.log('It is working!');

var user = prompt("What is your name?"); 
    console.log(user + " , thank you for taking the time to visit my page!");
    var str = user;
    var res = user.toLowerCase();

var readyForQ = confirm(user + ", are you ready to start the quiz?  Don\'t be scared, you will do fine.")
// need a confirm in here
// do {
//     readyForQ = confirm(user + ", are you ready to start the quiz?  Don\'t be scared, you will do fine.");
//   console.log(readyForQ);
// } while (!true);
console.log('Let\'s Go!);

var dog = prompt("I currently have four dogs");
    console.log(dog);
    // [need to validate answer with yes/no or y/n]
var liveCo = prompt("I lived in Colorado for five months");
    console.log(liveCo);  
    // [need to validate answer with yes/no or y/n]
var goal = prompt("One of my goals is to reinvent myself");
    console.log(goal);  
    // [need to validate answer with yes/no or y/n]
var workOut = prompt("I workout in my own home");
    console.log(workOut);  
// [need to validate answer with yes/no or y/n]

var guessNumber = prompt("I have a number in my bit-brain that is between 1 and 23.  What number am I thinking of?");
    console.log(guessNumber);  
// [need a loop for number guess and a break when they guess the correct answer]

var eighties = prompt("In the 80s, I loved hair bands.  Name a hair band and I will let you know if it was one that I liked.  Go!");
    console.log(eighties);  
// [need an array for:  Bon Jovi, Guns and Roses, Tesla, Motley Crue, Cinderella, Kix, Def Leppard, Poison, Warrant] [Also need a loop that has a break when they guess a correct answer]

// [Placeholder for creating the number of correct answers out of X questions]