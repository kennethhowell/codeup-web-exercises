// Function Drills
// Functions using conditionals but not loops or arrays:
//
//     Make a function named isOdd(number)
function isOdd(x) {
    var remainder = (x % 2) == 1;
    return remainder;
}

// console.log(isOdd(1));
// console.log(isOdd(2));
// console.log(isOdd(3));
// console.log(isOdd(4));

// Make a function named isEven(number)
function isEven(x) {
    var remainder = (x % 2) == 0;
    return remainder;
}

// console.log(isEven(1));
// console.log(isEven(2));
// console.log(isEven(3));
// console.log(isEven(4));
// console.log(isEven(5));

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}

// console.log(identity("quick"));
// console.log(identity("brown"));
// console.log(identity("fox"));

//     Make a function named isFive(input)
function isFive(input) {
    var checkFive = (input === 5);
    return checkFive;
}

// console.log(isFive("five"));
// console.log(isFive(5));
// console.log(isFive(3));


// Make a function named addFive(input) that adds five to some input.

function addFive(input){
    var sumup = (input + 5);
    return sumup;
}

// console.log(addFive(1));
// console.log(addFive(2));
// console.log(addFive(3));
// console.log(addFive(4));

//     Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    var checkfive = ((input % 5) == 0);
    return checkfive;
}

// console.log(isMultipleOfFive(4));
// console.log(isMultipleOfFive(55));
// console.log(isMultipleOfFive(102));
// console.log(isMultipleOfFive(5));

// Make a function named isThree(input)
function isThree(input) {
    var checkthree = (input === 3);
    return checkthree;
}

// console.log(isThree(3));
// console.log(isThree(4));
// console.log(isThree(5));
// console.log(isThree(6));

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    var checkthree = ((input % 3) == 0);
    return checkthree;
}

// console.log(isMultipleOfThree(3));
// console.log(isMultipleOfThree(6));
// console.log(isMultipleOfThree(9));
// console.log(isMultipleOfThree(11));
// console.log(isMultipleOfThree(-2));

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    var checkthree = ((input % 3) == 0);
    var checkfive = ((input % 5) == 0);
    var combo = checkthree && checkfive;
    return combo;
}

// console.log(isMultipleOfThreeAndFive(15));
// console.log(isMultipleOfThreeAndFive(30));
// console.log(isMultipleOfThreeAndFive(60));
// console.log(isMultipleOfThreeAndFive(9));
// console.log(isMultipleOfThreeAndFive(10));

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    var checkmulti = ((target % n) == 0);
    return checkmulti;
}

// console.log(isMultipleOf(15, 3));
// console.log(isMultipleOf(21, 7));
// console.log(isMultipleOf(20, 9));
// console.log(isMultipleOf(12, 5));

// Make a function named isTrue(boolean)
function isTrue(boolean){
    var truth = boolean && true;
    return truth;
}

// console.log(isTrue(true));
// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue("1"));

// Make a function named isFalse(boolean)
// function isFalse(boolean) {
//     var nottrue = boolean && true;
//     return !nottrue;
// }
//
// console.log(isFalse(true));
// console.log(isFalse(false));
// console.log(isFalse(1));
// console.log(isFalse("maybe"));

// Make a function named isTruthy(input), remember that values other than true will behave like true
// function isTruthy(truthy){
//     switch(truthy){
//         case true:
//             return "truthy";
//         case false:
//             return "false";
//         default:
//             break;
//     }
// }
//
// console.log(isTruthy(0));

// function truthyOrFalsy(a) {
//     return a ? "truthy" : "falsy";
// }

// function isTruthy (truthy) {
//     if (truthy) {
//         return "truthy";
//     } else {
//         return "falsy";
//     }

// }
//
// console.log(isTruthy(1));
// console.log(isTruthy(0));
// console.log(isTruthy(10 == 5));


// Make a function named isFalsy(input), remember that values other than false behave like false
// function isFalsy (falsy) {
//     if (!falsy) {
//         return "falsy";
//     } else {
//         return "truthy";
//     }
//
// }
//
//
// console.log(isFalsy(0));
// console.log(isFalsy(1));
// console.log(isFalsy(10 == 5));
// Make a function named isVowel(letter)
function isVowel(letter) {
    var returnMessage;
    switch(letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            returnMessage = "This is a vowel!";
            break;
        default:
            returnMessage = "This is not a vowel.";
    }
    return returnMessage;
}
// alert(isVowel("a"));
// alert(isVowel("y"));
// alert(isVowel(1));

// Make a function named isConsonant(letter)
function isConsonant(letter) {
    var returnMessage;
    switch(letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            returnMessage = "This is not a consonant!";
            break;
        default:
            returnMessage = "This is a consonant.";
    }
    return returnMessage;
}

// alert(isConsonant("r"));
// alert(isConsonant("t"));
// alert(isConsonant("a"));
// alert(isConsonant("e"));

// Make a function named isCapital(letter)
function isCapital(letter) {
    var uppercasecheck = (letter == letter.toUpperCase());
    return uppercasecheck;
}

// alert(isCapital("U"));
// alert(isCapital("u"));
// alert(isCapital("a"));

// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    var lowercasecheck = (letter != letter.toUpperCase());
    return lowercasecheck;
}

// console.log(isLowerCase("a"));
// console.log(isLowerCase("b"));
// console.log(isLowerCase("C"));
// console.log(isLowerCase("D"));

// Make a function named hasLowerCase(string) that returns if a string has any lower cased letter
function hasLowerCase(str) {
    return str.toUpperCase() != str;
}

// alert(hasLowerCase("A QUICK BROWN FOx"));
// alert(hasLowerCase("A QUICK BROWN FOX"));

// Make a function named isSpace(letter) that returns if a character is a space character
function isSpace(input) {
    return (input == " ");
}

// console.log(isSpace(prompt("you know what to do")));
// console.log(isSpace(prompt("you know what to do")));
// console.log(isSpace(prompt("you know what to do")));

// Make a function named isZero(number)
function isZero(num) {
    var checkZero = parseInt(num);
    return checkZero === 0;
}

// console.log(isZero(prompt("gimme some numbers")));
// console.log(isZero(prompt("gimme some numbers")));
// console.log(isZero(prompt("gimme some numbers")));

// Make a function named notZero(input) that returns true if the input is not zero
function notZero(num){
    var checkZero = parseInt(num);
    return checkZero !== 0;
}

// console.log(notZero(prompt("gimme some numbers")));
// console.log(notZero(prompt("gimme some numbers")));
// console.log(notZero(prompt("gimme some numbers")));


// Write a function named lowerCase(string)
function lowerCase(string) {
    var returnMessage = string.toLowerCase();
    return returnMessage;
}

// console.log(lowerCase("LOWERCASE LOWERCASE LOWERCASE"));
// console.log(lowerCase("LOWERCASE LOWERCASE LOWERCASE"));
// console.log(lowerCase("LOWERCASE LOWERCASE LOWERCASE"));

// Write a function named double(n) that returns a number times two
function double(n) {
    return n * 2;
}

// console.log(double(2));

// Write a function named triple(n) that returns a number times 3
function triple(n){
    return n * 3;
}


// Write a function named quadruple(n) that returns a number times 4
function quadruple(n){
    return n * 4;
}


// Write a function named half(n) that returns 1/2 of the provided input
function half(n){
    return n / 2;
}


// Write a function named subtract(a, b) that returns a minus b
function subtract(a , b){
    return a - b;
}
// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a , b){
    return a * b;
}

// Write a function named divide(a, b) that returns a divided by b
function divide(a , b){
    return a / b;
}



// Write a function named remainder(a, b) that returns the remainder after dividing a by b
function remainder(a , b){
    return a % b;
}


// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b
function modulo(a , b){
    return (remainder(a , b));
}


// console.log(modulo(6, 3));
// console.log(modulo(7, 3));
// console.log(remainder(6, 3));
// console.log(remainder(7, 3));


// Write a function named cube(n) that returns n * n * n
function cube(n){
    var number = n * n * n;
    return number;
}



// Write a function named squareRoot(n) that returns the square root of the input
function squareRoot(n){
    var rooted = Math.sqrt(n);
    return rooted;
}

// console.log(squareRoot(9));
// console.log(squareRoot(36));
// console.log(squareRoot(25));

// Write a function named cubeRoot(n) that returns the cube root of the input
function cubeRoot(n){
    var cubed = Math.cbrt(n);
    return cubed;
}


// console.log(cubeRoot(125));
// console.log(cubeRoot(27));
// console.log(cubeRoot(8));


// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
function invertSign(number){
    var inverted = number * -1;
    return inverted;
}

// console.log(invertSign("string"));
// console.log(invertSign(5));
// console.log(invertSign(-5));


// Write a function named degreesToRadians(number)
function degreesToRadians(number){
    var radianResult = number * (Math.PI / 180);
    return radianResult;
}


// Write a function named radiansToDegrees(number)
function radiansToDegrees(number){
    var degreesDecree = number * (180 / Math.PI);
    return degreesDecree;
}

// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
function isBlank(input){
    var blankResult = input.trim();
    return !(blankResult.length > 0);
}

// console.log(isBlank("        "));
// console.log(isBlank("      waldo  "));
// console.log(isBlank("waldo"));
// console.log(isBlank("                       . "));
// console.log(isBlank("                                                                                   " +
//     " "));


//     Make a function named trim(string) that removes empty spaces before and after the input.
function trim(string) {
    var returnMessage = string.trim();
    return returnMessage;
}

// console.log(trim("waldo"));
// console.log(trim(" waldo "));
// console.log(trim(" waldo    "));
// console.log(trim("  waldo "));
// console.log(trim("      waldo "));
// console.log(trim(" waldo        "));


//     Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual (input1 , input2) {
    var returnMessage = input1 == input2;
    return returnMessage;
}

// console.log(areEqual(5, 5));
// console.log(areEqual(5, "5"));
// console.log(areEqual("waldo", "waldo"));
// console.log(areEqual("waldo", "where is"));

// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
function areIdentical(input1 , input2) {
    var returnMessage = input1 === input2;
    return returnMessage;
}

// console.log(areIdentical(5, 5));
// console.log(areIdentical(5, "5"));
// console.log(areIdentical("waldo", "waldo"));
// console.log(areIdentical("waldo", "where is"));

//     Make a function named not(input) returns the input with a flipped boolean
function not(input) {
    var returnMessage = !input;
    return returnMessage;
}

// console.log(not(true));
// console.log(not(false));

// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input) {
    var returnMessage = !(not(input));
    return returnMessage;
}
// console.log(notNot(true));
// console.log(notNot(false));

//     Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1 , predicate2) {
    var returnMessage = predicate1 && predicate2;
    return returnMessage;
}

// console.log(and(true, true));
// console.log(and(true, false));

// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    var returnMessage = predicate1 || predicate2;
    return returnMessage;
}

// console.log(or(true, false));
// console.log(or(false, false));
// console.log(or(true, true));


// Write a function called reverseString(string) that reverses a string
function reverseString(string){
    var returnMessage = string.split("").reverse().join("");
    return returnMessage;
}

// console.log(reverseString("hello"));
// console.log(reverseString("ydwoH"));
// console.log(reverseString("amanaplanacanalpanama"));


// Make a function named absoluteValue(number) that returns the absolute value of a number.

function absoluteValue(number) {
    var returnMessage = Math.abs(number);
    return returnMessage
}


//     Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.
function rollDice (sides) {
    var parsed =  parseInt(sides);
    var bonesrolled = Math.floor(Math.random() * (parsed - 1 + 1) ) + 1;
    return bonesrolled;
}

// console.log(rollDice(6));
// console.log(rollDice(8));
// console.log(rollDice(12));
// console.log(rollDice(1));


//     Simple Function Drills
// Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
function returnTwo() {
    var returnMessage = 2;
    return returnMessage;
}


// console.log(returnTwo());

//
//     Make a function called sayHowdy() which console.logs the string “Howdy!”
function sayHowdy(){
    var returnMessage = "Howdy!";
    return returnMessage;
}

// console.log(sayHowdy());

//
// Test this function by directly calling sayHowdy()
//
// Remember this function does not need a defined return value
//
// Make a function called returnName() that returns the string of your name
function returnName(){
    var returnMessage = "Kenneth";
    return returnMessage;
}

// console.log(returnName());

//
// Test this function with console.log(returnName())
//
//     Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with console.log(addThree(5))
function addThree(num){
    var returnMessage = num + 3;
    return returnMessage;
}

// console.log(addThree(5));
// console.log(addThree(10));
// console.log(addThree(15));


//
//     Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString('codeup'))
function sayString(str){
    var returnMessage = str.toString();
    return returnMessage;
}

// console.log(sayString("codeup"));
// console.log(sayString(5));
// console.log(sayString(Infinity));


//
//     Challenge Function Drills
// Write a function called identity(input) that takes in an argument called input and returns that input.
// function identity(input){
//     var returnMessage = input;
//     return returnMessage;
//
// }
//
// console.log(identity(5));
// console.log(identity("5"));
// console.log(identity(true));


//
//     Write a function called getRandomNumber(min, max) that returns a random number between min and max values sent to that function call.
//

// function getRandomNumber(min, max) {
//     var returnMessage = Math.floor(Math.random() * (parseInt(max) - parseInt(min) + 1)) + parseInt(min);
//     return returnMessage;
// }
//
// console.log(getRandomNumber(1, 10));
// console.log(getRandomNumber(1, 10));
// console.log(getRandomNumber(1, 10));


// Write a function called first(input) that returns the first character in the provided string.
// function first(input){
//     var returnMessage = input[0];
//     return returnMessage;
// }
//
// console.log(first("first"));
// console.log(first("second"));
// console.log(first("third"));


//
//     Write a function called last(input) that returns the last character of a string
// function last(input){
//     var returnMessage = input[input.length - 1];
//     return returnMessage;
// }
//
// console.log(last("last"));
// console.log(last("did not finish"));
// console.log(last("disqualified"));
//
// Write a function called rest(input) that returns everything but the first character of a string.
function rest(input){
    var returnMessage = input.slice(1);
    return returnMessage;
}

//
// console.log(rest("Aaron"));
// console.log(rest("San Antonio"));
// console.log(rest("Ssizzurp"));
// //
//     Write a function called reverse(input) that takes a string and returns it reversed.
function reverse(input){
    var returnMessage = input.split("").reverse().join("");
    return returnMessage;
}

// console.log(reverse("amanaplanacanalpanama"));
// console.log(reverse("ydwoH"));
// console.log(reverse("Hello"));




//
//     Write a function called isNumeric(input) that takes an input and returns a boolean if the input is numeric.
//
// function isNumeric(input) {
//     var returnMessage = isNaN(input);
//     return returnMessage;
// }

// function isNumeric(input){
//     return typeof input === "number";
// }
//
// console.log(isNumeric(6));
// console.log(isNumeric("6"));
// console.log(isNumeric(true));
//
//     Write a function called count(input) that takes in a string and returns the number of characters.

// function count(input){
//     var returnMessage = input.length;
//     return returnMessage;
// }
//
// console.log(count("four"));;
// console.log(count("four and four"));;
// console.log(count("0"));;

//
//     Write a function called add(a, b) that returns the sum of a and b
function add(a , b){
    var returnMessage = parseFloat(a) + parseFloat(b);
    return returnMessage;
}
//
// console.log(add(2, 5));
// console.log(add(2, 6));
// console.log(add(2, 7));
// console.log(add(2, "three"));

//
// Write a function called subtract(a, b) that return the difference between the two inputs.
function subtract(a , b){
    var returnMessage = parseFloat(a) - parseFloat(b);
    return returnMessage;
}

// console.log(subtract(10, 5));
// console.log(subtract(12, 6));
// console.log(subtract(14, 7));
// console.log(subtract(6, "three"));


//
//     Write multiply(a, b) function that returns the product
function multiply(a , b){
    var returnMessage = parseFloat(a) * parseFloat(b);
    return returnMessage;
}

// console.log(multiply(2, 5));
// console.log(multiply(2, 6));
// console.log(multiply(2, 7));
// console.log(multiply(2, "three"));

//
// Write a divide(numerator, denominator) function that returns a divided by b
function divide(numerator, denominator){
    var returnMessage = parseFloat(numerator) / parseFloat(denominator);
    return returnMessage;
}


// console.log(divide(10, 5));
// console.log(divide(18, 6));
// console.log(divide(28, 7));
// console.log(divide(9, "three"));

//
// Write a remainder(number, divisor) function that returns the remainder left over when dividing number by the divisor
function remainder(number, divisor){
    var returnMessage = parseFloat(number) % parseFloat(divisor);
    return returnMessage;
}

// console.log(remainder(6, 2));
// console.log(remainder(7, 2));
// console.log(remainder(10, 3));


//
// Write the function square(a) that takes in a number and returns the number multiplied by itself.
function square(a){
    var parsed = parseFloat(a);
    var returnMessage = parsed * parsed;
    return returnMessage;
}

// console.log(square(2));
// console.log(square(3));
// console.log(square(4));
// console.log(square(true));
// console.log(square("six"));

//
//     Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators
// function sumOfSquares(a , b){
//     var squareA = square(a);
//     var squareB = square(b);
//     var returnMessage = add(squareA, squareB)
//     return returnMessage;
// }
//
// console.log(sumOfSquares(2, 2));;
// console.log(sumOfSquares(4, 4));;
// console.log(sumOfSquares(3, 4));;


//
// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
//

function doMath(operator, a, b) {
    var returnMessage = operator(a , b);
    return returnMessage;
}

console.log(doMath(subtract, 10, 2));

// Even More Function Bonuses
// Create a function that will return how many whitespace characters are at the beginning and end of a string.
//
//     Create a function that takes in two string inputs.
//
//     If the second string input is present in the first, return the first input string with the second input string removed from it.
//     If the second string input is present multiple times in the first, the second string will only be removed where it first occurs in the first string.
//     If the second string input is not present in the first, return the first string as entered in the function.
// Create a function that takes in a string and returns true if the last letter is an "a" (otherwise, return false).
//
// EXTRA CHALLENGE: create a function that will return how many whitespace characters are at the beginning of a string (hint: use regex).
//
// Create a function returnTrueMessage() that returns the string "Hey, it's true!"
//
// Create a function returnFalseMessage() that returns the string "Hey, it's false!"
// Create a function returnMessage() that takes in a function and returns the call to the function
// Experiement passing in different functions.
//     Create a function, willLoginUser() that takes in a username string, password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the password and the user is at least 18 years old. If the user is an admin, they do not have to be a certain age but the password must still not match the username.