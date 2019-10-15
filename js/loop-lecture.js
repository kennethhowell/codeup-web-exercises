"use strict";
/*
* WHILE LOOPS
*/

// 1. Create a while loop that counts to 100 in increments of ten:
// (10...20...30...)

// var i = 0;
//
// while (i < 101) {
//     console.log("Counting up! Currently at " + i);
//     i = i + 10;
// }

// 2. Create a while loop that counts backwards from 50 - 1

// var i = 50;
//
// while (i > 0) {
//     console.log("Counting back! Currently at number " + i);
//     i--;
// }

var myQuestion;
//
// // 3. Create a while loop that asks the user for a confirmation when asked: "Would you like to exit?"
// // Store the confirm in the myQuestion variable.
// // Try running this. What happens?
//
//
// myQuestion = confirm("Would you like to exit?")
//
// while (myQuestion === false) {
//     myQuestion = confirm("Would you like to exit?");
// }

/*
* DO-WHILE LOOPS
*/


// 4. Refactor question 3 using a do-while loop.
// What is the behavior this time?

// do {
//     myQuestion = confirm("Do you want to exit?")
// } while (!myQuestion);



// 5. Create a do-while loop that prompts the user for a color and continues
// to prompt until the string passed is "blue"
// var betterbeblue;
//
//
// do {
//     betterbeblue = prompt("Enter a color please - well, as long as it's the color blue.")
// } while (betterbeblue !== "blue");

// 6. Refactor question 1 using a do-while loop.

var i = 0

do {
    console.log(i = i + 10);
} while (i < 91);

/*
* FOR LOOPS
*/

var myArray = ["apples", "oranges", "bananas", "grapes", "pineapples"];

// 7. Create a for loop that iterates over this array and logs out each
// element to the console

// for (var y = 0; y < myArray.length; y++) {
//     console.log(myArray[y]);
// }



// 8. You are going to use a for loop to complete the FizzBuzz exercise.
// Your program should count up to 100.
// For numbers divisible by 3, log "Fizz"
// For numbers divisible by 5, log "Buzz"
// If divisible by 3 and 5, log "FizzBuzz"
// All other cases, just log the number.

for (var x = 0; x < 101; x++) {
    if (x % 3 === 0 && x % 5 === 0 && x !== 0) {
        console.log("fizzbuzz");
    } else if (x % 3 === 0) {
        console.log("fizz");
    } else if (x % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(x);
    }
}



// 9. Refactor question 1 using a for-loop

for (var x = 0; x < 101; x = x + 10) {
    console.log(x);
}


/*
* BREAK AND CONTINUE
*/

// 11. Refactor question 1: using a 'break', stop the counting once it hits 70.

// 12. Refactor question 2: using a 'continue', skip numbers 50-26 and only
// log 25 - 1.
