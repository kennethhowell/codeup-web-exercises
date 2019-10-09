"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin

// if(isAdmin) {
//     //show specific navbar;
// }

//^ psuedocode, typing out steps of what you're doing, helpful as learner


//Together: Send a 20% off coupon if its users birthday

// if(isBirthday) {
//     //send 20% off coupon
// }

//Together: Write an if statement that alerts "It's raining" if isRainy is true

// var isRaining = true;
//
// // if(isRaining) {
// //     alert("It's raining");
// // }

//Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
//
// var itemCost = 100;
// var currentBalance = 200;
//
// if (itemCost < currentBalance) {
//     alert("You good! Treat yourself");
// }
//
//
// //TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
//
// var numberOfLives = 0;
//
// if (numberOfLives === 0) {
//     alert("Sorry, game over!")
// }
//
// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
//
// var weatheroutsideisfrightful = true;
//
// if (weatheroutsideisfrightful) {
//     alert("It's snowing!");
// }
//
// //TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
//
// var userInput = 11;
//
// if (userInput > 10) {
//     alert("True!")
// }
//
//
// //TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
//
// function lifeCheck () {
//     var numberOfLives = 0;
//     if (numberOfLives === 0) {
//         alert("Sorry, game over!");
//     }
// }
//
// lifeCheck();
//
// function snowDay() {
//     var snowingOut = true;
//     if (snowingOut) {
//         alert("It's snowing! Everyone panic!")
//     }
// }
//
// snowDay();
//
//
// function greaternotEqual(input) {
//     var userinput = input;
//     if (userinput > 10) {
//         alert("bigger than 10 :) for sure")
//     }
// }
//
// greaternotEqual(11);

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//Together: Show a specific navbar if user is admin, else show a different navbar

// var isAdmin = true;
//
// if (isAdmin) {
//     //show specific navbar
//     alert("User is admin!");
// } else {
//     alert("Faker! User is regular user!");
// }


//Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"


// var isRainy = true;
//
// if (isRainy) {
//     alert("It's raining!");
// } else {
//     alert("Have a nice day!");
// }

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
//
// var numberOfLives = 0;
//
// if (numberOfLives === 0) {
//     alert("Sorry, game over!")
// } else {
//     alert("Next level!")
// }

// //TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
// var currentweather = "snowing";
//
// if (currentweather === "snowing") {
//     alert("It's snowing!");
// } else {
//     alert("Check back later for more details!");
// }
//
// //TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
// var numberInput = 11;
//
// if (numberInput > 10) {
//     alert("True! That's bigger than 10!");
// } else {
//     alert("The number is less than or equal to 10.");
// }
//
// //TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
// var numberOfLives = 0;
//
// function checkIfGameIsOver(input) {
//     if (numberOfLives === 0) {
//         return "Sorry, game over";
//     } else {
//         return "Next level!"
//     }
// }
//
// checkIfGameIsOver(numberOfLives);





// //TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
// var isSnowy = true;
//
// function snowDay(input){
//     if (input) {
//         alert("It's snowing!");
//     } else {
//         alert("Check back later for more details");
//     }
// }
//
// snowDay(isSnowy);

// SHOULD WE DELETE STUFF EXAMPLE

// var weShouldDeleteStuff = confirm('Are you sure you want to delete everything?');
//
// console.log("The value of the confirm is: " + weShouldDeleteStuff);
//
// if (weShouldDeleteStuff) {
//     // delete all the things...
//     alert("We are deleting everything...");
// } else {
//     alert("Operation Canceled!");
// }


//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

// var legalage = confirm("Are you thirteen years of age or older?");
//
// console.log(("Confirm value is " + legalage));
//
// if (legalage) {
//     alert("You may proceed.");
// } else {
//     alert("Sorry, you are not able to proceed.")
// }

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
// var weather = "snowing";
//
// if (weather === "snowing") {
//     alert("It's snowing!");
// } else if (weather === "raining") {
//     alert("It's raining!");
// } else if (weather === "sunny") {
//     alert("It's sunny!");
// } else {
//     alert("Have a good one, it'll be nice out.");
// }


//Together: refactor the above statement as a function
// var weather = prompt("Type in snowing, raining, sunny for specific responses.")
//
// function weatherCheck(input) {
//     if (input === "snowing") {
//         alert("It's snowing!");
//     } else if (input === "raining") {
//         alert("It's raining!");
//     } else if (input === "sunny") {
//         alert("It's sunny!");
//     } else {
//         alert("Have a good one, it'll be nice out.");
//     }
// }
//
// weatherCheck(weather);


// Together: PIZZA PREFERENCE EXAMPLE

// var pizzaPreference = prompt("What kind of pizza do you like?");
// console.log("User pizza input: " + pizzaPreference);
//
// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// }  else if (pizzaPreference === "ham"){
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

// var trafficsignal = prompt("What color is the light you're approaching in your car? Red, yellow, or green?");

// if (trafficsignal === "red") {
//     alert("Come to a stop!");
// } else if (trafficsignal === "yellow") {
//     alert("Slow down if you're not already in the intersection.");
// } else if (trafficsignal === "green") {
//     alert("You're good to keep driving on.")
// } else {
//     alert("Umm, I don't think traffic lights come in that color where I'm from.")
// }

// function trafficLight(trafficsignal) {
//     if (trafficsignal === "red") {
//         alert("Come to a stop!");
//     } else if (trafficsignal === "yellow") {
//         alert("Slow down if you're not already in the intersection.");
//     } else if (trafficsignal === "green") {
//         alert("You're good to keep driving on.")
//     } else {
//         alert("Umm, I don't think traffic lights come in that color where I'm from.")
//     }
// }
//
// trafficLight("red");


// ================ NESTED STATEMENTS ===============
//Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligible for a license.

// 14 = no
// 15 = permit
// 16 = license w/ permit or go get permit


// var userAge = 16;
// var hasPermit = false;
//
// if (userAge < 15) {
//     alert("Sorry, you're not eligible for a permit!");
// } else {
//     if (userAge === 15) {
//         alert("You're eligible for a permit.");
//     } else if (userAge >= 16 && hasPermit) {
//         alert("You're eligible for a license.");
//     } else if (userAge >= 16 && !hasPermit) {
//         alert("Sorry, you need to get a permit first.");
//     }
// }


// ================ TERNARY STATEMENT ================

//Together: Regular way

// var message;
// var success = true;
//
// if (success) {
//     message = "Operation was successful.";
// } else {
//     message = "Oops, something went wrong.";
// }
// console.log(message);


// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!

// var weather = "sunny";
// var weatherMessage = (weather === "rainy") ? "It's raining!" : "Have a nice day.";
// console.log(weatherMessage);

// =============== SWITCH STATEMENT ================
//Together:

// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// switch(pizzaPreference) {
//     case "pineapple and hot sauce":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "cheese":
//         alert("Just plain cheese? Okay...");
//         break;
//     default:
//         alert(pizzaPreference + " isn't my favorite, but let's order some!");
//         break;
// }


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var weathercond = "rainy";

switch(weathercond) {
    case "rainy":
        alert("It's raining today!");
        break;
    case "sunny":
        alert("It'll be lovely outside today!");
        break;
    case "snow":
        alert("It's snowing in San Antonio! Ahh!");
        break;
    default:
        alert("I'm not sure what kind of weather we're getting today.");
}

//TODO: Rewrite the intersection function from earlier as a switch statement.
var trafficcolor = prompt("What color is the traffic light at the intersection you're driving towards?");

switch(trafficcolor) {
    case "red":
        alert("Come to a stop");
        break;
    case "yellow":
        alert("Slow down if you are not in the intersection already.");
        break;
    case "green":
        alert("Proceed forward");
        break;
    default:
        alert(trafficcolor + ", huh? Be cautious with that.");
}

================ REVERSE ENGINEERING =================
Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html

// confirm or form of input statement adds 5 to the default or returns 5 as default

2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html

// if else statements returning different messages

3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

// if else or ternary for black/white bg

//
//     var checkBox = document.querySelector('input');
// var para = document.querySelector('p');
// var shoppingDone = false;
//
// checkBox.addEventListener('change',function() {
//     checkBox.disabled = true;
//     shoppingDone = true;
//     updateAllowance();
// });
//
// function updateAllowance() {
//     if(shoppingDone === true) {
//         var childsAllowance = 10;
//     } else {
//         var childsAllowance = 5;
//     }
//
//     para.textContent = 'Child has earned $' + childsAllowance + ' this week.';
// }
//
// updateAllowance();
//
//
//
// var select = document.querySelector('select');
// var para = document.querySelector('p');
// var temperature = 29;
//
// select.onchange = setWeather;
//
// function setWeather() {
//     var choice = select.value;
//
//     if(choice === 'sunny') {
//         para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
//     } else if(choice === 'rainy') {
//         para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
//     } else if(choice === 'snowing') {
//         para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
//     } else if(choice === 'overcast') {
//         para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
//     } else {
//         para.textContent = '';
//     }
// }
//
//
//
//
// var select = document.querySelector('select');
// var html = document.querySelector('html');
//
// select.onchange = function() {
//     select.value === 'black' ? update('black','white') : update('white','black');
// }
//
// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
// }
//