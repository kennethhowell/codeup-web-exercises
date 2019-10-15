" use strict";

console.log("Hello from Javascript!");

alert("Welcome to my website");

var favcolor = prompt("What is your favorite color?");

alert("Great, " + favcolor + " is my favorite color too!");

//You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days . .), and Hercules (1 day. .).
// If price for a movie per day is $3, how much will you have to pay?

var tlMdays = parseInt(prompt("You've rented some movies at $3 dollars a day per movie for your kids - they dig 'The Little Mermaid' pretty well, how many days do you rent it?"));

alert("Got it, you rent 'The Little Mermaid' for " + tlMdays + " days.");

var  brotherBdays = parseInt(prompt("Now, they love Brother Bear to death, so how many days do you rent that?"));

alert("Got it, you rent 'Brother Bear' for " + brotherBdays + " days.");

var  herculesdays = parseInt(prompt("Finally, Hercules. They haven't seen that one before so you're not sure how much they'll like it - how many days do you rent that?"));

alert("Got it, you rent 'Hercules' for " + herculesdays + " days.");

var owedformovies = (tlMdays + brotherBdays + herculesdays) * 3;

alert("The total for your movie rental is " + owedformovies + " dollars!");

//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350.
// How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var GoogleRate = 400;
var AmazonRate = 380;
var FaceRate = 350;

alert("Well, let's see how much you've made to cover your bill - you make $400 an hour for Google's contract, $380 for Amazon's contract, and $350 for Facebook's contract.");

var GoogleWorked = parseInt(prompt("How many hours did you work for Google this week?"));
var AmazonWorked = parseInt(prompt("How many hours did you work for Amazon this week?"));
var FaceWorked = parseInt(prompt("How many hours did you work for Facebook this week?"));

var cashmoney = (GoogleRate * GoogleWorked) + (AmazonRate * AmazonWorked) + (FaceRate * FaceWorked);

alert("Good news, you've got enough! Thanks for working " + GoogleWorked + " hours for Google, plus " + AmazonWorked + " hours for Amazon, and " + FaceWorked + " hours for Facebook. You've got $" + cashmoney + " dollars in the bank, so you've got the budget for your movies!");

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classtime =  9;
var classsize = 125;

var classtimeUser = parseInt(prompt("A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with their current schedule. This class starts at 9AM, what time is your earliest class for that day? Please answer with a number." ));
var classsizeUser = parseInt(prompt("So that's when your earliest class is - class sizes max out at 125, how many people are in the class you're interested in?"));

var studentCanSignUp = classsizeUser < classsize && classtime !== classtimeUser;

if (studentCanSignUp) {
    alert("Excellent. Everything is in order, you can proceed to register.")
} else {
    alert("Woops - it looks like this class won't work out for registration purposes currently.")
}

// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

alert("Let's see if we can save you some money on your classes before you go!");

var offerCurrent = true;
var premiumMem =  parseInt(prompt("How many months have you been a premium member with our institution? Please put in 0 if you're not yet a premium membership holder."));
var shoppingcart = parseInt(prompt("How many classes are you looking to register for with us?"));

var discountCheck = offerCurrent && (shoppingcart > 2 || premiumMem >= 1);

if (discountCheck) {
    alert("Congratulations! From what I can tell, you qualify for a discount offer for our classes. Remember to mention this to the registrar when finalizing your schedule.")
} else {
    alert("Thank you so much for enrolling with us - our registrar cannot extend a discount offer to you at this time, but inquire with them regarding the program guidelines!")
}
