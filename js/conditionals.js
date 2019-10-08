"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// var numbertime = confirm("Would you like to enter a number?");
//
// if (numbertime) {
//     var usernum = parseInt(prompt("Great! I like numbers. What's your number?"));
//         if (isNaN(usernum)) {
//             alert("That's not a number, buddy!")
//         } else {
//             var plusHundred = usernum + 100;
//             var posinegiNum = usernum > 0;
//             var evenodduserNum = usernum % 2;
//             if (evenodduserNum == 0) {
//                 alert("Your number is even, buddy!");
//             } else {
//                 alert("Your number is odd, pal!");
//             }
//
//             alert("Did you know if you added 100 to your number it would be " + plusHundred + ".");
//
//             if (posinegiNum) {
//                 alert("By the way, your number is positive!");
//             } else {
//                 alert("FYI, you've got a negative number.");
//             }
//         }
// } else {
//     alert("I'm sorry to hear that. No numbers for us today");
// }

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor (input) {
    if (input == "red") {
        return "Red is the color of firetrucks.";
    }
    else if (input == "orange") {
        return "The Orange dynasty was quite famous in Europe.";
    }
    else if (input == "yellow") {
        return "Yellow bananas are riper and tasty.";
    }
    else if (input == "green")
    {
        return "Green grass is desired for many landscaped lawns.";
    }
    else if (input == "blue") {
        return "Blue skies over Texas are the best.";
    }
    else if (input == "indigo") {
        return "Indigo is a very beautiful color linked to royalty.";
    }

    else if (input == "violet") {
        return "Violets grow wildly in the springtime"
    }
    else {
        return input + "? I don't know much about " + input + ".";
    }

}

console.log(analyzeColor("red"));
console.log(analyzeColor("orange"));
console.log(analyzeColor("yellow"));
console.log(analyzeColor("green"));
console.log(analyzeColor("blue"));
console.log(analyzeColor("indigo"));
console.log(analyzeColor("violet"));
console.log(analyzeColor("pink"));
console.log(analyzeColor("navy"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
