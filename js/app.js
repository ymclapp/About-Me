'use strict';
// use strict is almost alwayst the first line of our js files
console.log('It is working!');

<script>
        var user = prompt("What is your name?"); 
            console.log(user + " , thank you for taking the time to visit my page!");
{/* [normalize the response with the lowercase] */}
        var readyForQ = prompt(user + " , are you ready to start the quiz?  Don\'t be scared, you will do fine.")
        if (confirm("Press a button!")) {
            txt = "Yeah!  Let\'s go!";
            } else {
            txt = "Ok, then come back later!";
            } 
            console.log(readyForQ)
        var dog = prompt("I currently have four dogs");
            console.log(dog);
            {/* [need to validate answer with yes/no or y/n] */}
        var liveCo = prompt("I lived in Colorado for five months");
            console.log(liveCo);  
            {/* [need to validate answer with yes/no or y/n] */}
        var goal = prompt("One of my goals is to reinvent myself");
            console.log(goal);  
         {/* [need to validate answer with yes/no or y/n] */}
        var workOut = prompt("I workout in my own home");
            console.log(workOut);  
        {/* [need to validate answer with yes/no or y/n] */}
    </script>