'use strict';
// use strict is almost alwayst the first line of our js files
console.log('It is working!');

var user = prompt("What is your name?"); 
console.log(user + " , thank you for taking the time to visit my page!");
    // alert(user + " , thank you for taking the time to visit my page!");
    
// var readyForQ = confirm(user + ", are you ready to start the quiz?  Don\'t be scared, you will do fine.")
// // need a confirm in here
// // do {
// //     readyForQ = confirm(user + ", are you ready to start the quiz?  Don\'t be scared, you will do fine.");
// //   console.log(readyForQ);
// // } while (!true);
// console.log('Let\'s Go!);

var dog = confirm("I currently have four dogs\nOk = Yes and Cancel = No");
// var dog = ('YES', 'NO', 'Y', 'N', 'Yes', 'No');
// str = str.toLowerCase();
// console.log(str);


// if (sign.toLowerCase() == "scorpio") {
//     alert("Wow! I'm a Scorpio too!");
//   }   
console.log(dog);
    // [need to validate answer with yes/no or y/n]
var liveCo = confirm('I lived in Colorado for five months');
    console.log(liveCo);  
    // [need to validate answer with yes/no or y/n]
var goal = confirm('One of my goals is to reinvent myself');
    console.log(goal);  
    // [need to validate answer with yes/no or y/n]
var workOut = confirm('I workout in my own home');
    console.log(workOut);  
// [need to validate answer with yes/no or y/n]

var guessNumber = prompt("I have a number in my bit-brain that is between 1 and 23.  What number am I thinking of?");
var greeting=""
if(guessNumber ==='17')  {
    greeting = "You got it!";
} else if (guessNumber < '16' || guessNumber > '18') {
    greeting = "You're too cold!";
}  else (guessNumber === '16' || guessNumber === '18'); {
    greeting = "You're getting warmer!"
}
        console.log(guessNumber);  
// [need a loop for number guess and a break when they guess the correct answer]

var bands = ['Bon Jovi', 'Guns and Roses', 'Tesla', 'Motley Crue', 'Cinderella', 'Kix', 'Def Leppard', 'Poison', 'Warrant'];

var eighties = prompt("In the 80s, I loved hair bands.  Name a hair band and I will let you know if it was one that I liked.  Go!");
for (var i = 0; i < bands.length; i++) {
    
}
// Use if else to compare all of then if === bon jovi then else if === guns and RTCSessionDescription, then...else would be incorrect answer and ask them to try again
    console.log(eighties);  
// [Also need a loop that has a break when they guess a correct answer]

// [Placeholder for creating the number of correct answers out of X questions]