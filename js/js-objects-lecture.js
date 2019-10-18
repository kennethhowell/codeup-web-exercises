"use strict";
// console.log("Welcome to Intro to Objects!");

/*********************************************
 *              INTRO TO OBJECTS
 ******************************************** */

/**
 * Objects are an unordered collection of related data in the form of
 * key:value pairs
 */


/*********************************************
 *              CREATING NEW OBJECTS
 ******************************************** */

/**
 * Objects can be created in JavaScript through the use of the 'new
 * Object()' constructor, or Object literal notation using curly braces.
 */

/**
 * TO DO TOGETHER: Create a new variable (of type Object) and call it
 * 'myPhone'. Use either the constructor or Object literal notation.
 */

var myPhone = {};


/**
 * TO DO: Create a new Object and call it 'myMac'. use either the
 * constructor or Object literal notation.
 */

var myMac = {};

/*********************************************
 *              PROPERTIES
 ******************************************** */

/**
 * TO DO TOGETHER: Using dot notation, assign these properties to your phone
 * Object: 'model', 'color', 'storage'. Console log your phone variable to
 * check that the information was stored properly.
 */

myPhone.model = "Motorola G7 Power";
myPhone.color = "Black";
myPhone.storage = "64gb";

// console.log(myPhone);


/**
 * TO DO: Using dot notation, assign these properties to your Mac
 * Object: 'model', 'size', 'year', Console log the Object to check if the
 * information was stored properly
 */

myMac.model = "MacBook Air";
myMac.size = "Whatever Aubriana bought";
myMac.year = "2013?";

// console.log(myMac);

/**
 * TO DO TOGETHER: Assign a 'name' property to your phone. This should be of
 * type Object and store properties for the user's 'firstName' and
 * 'lastName'. Use console log to access the user's 'lastName'
 */

myPhone.name = {
    firstName: "Kenneth",
    lastName: "Howell"
};


// console.log(myPhone.name.lastName);
/**
 * TO DO: Using dot notation, assign a property called 'folders' that stores
 * an Array representing different folders in your system.
 */

myMac.folders =  ["IdeaProject", "My Mac", "Howell","Other stuff"]

// console.log(myMac);

// function myApps(){
//     console.log("These are my apps: ");
//     myMac.folders.forEach(function (folder) {
//         console.log(folder);
//     })
// }
//
// myApps();
/**
 * TO DO: Assign a 'login' property. This should be an object that stores
 * 'username','fakePassword' and 'email'
 */


myMac.login = {
    username: "khowell",
    fakePassword: "strongpw",
    email: "email@email.email"
}

console.log(myMac);

/*********************************************
 *                  METHODS
 ******************************************** */

/**
 * TO DO TOGETHER: We are going to add functionality to our phone Object.
 * Using the dot notation, add a method named 'call' that console logs the
 * message: "Dialing..."
 */

myPhone.call = function (){
       return console.log("Dialing. . .");
};


// myPhone.call();
/**
 * TO DO: Let's add functionality to our Mac Object. Create a method named
 * 'powerOn'. When called, this should display a console message that says
 * "Powering on..."
 */

myMac.powerOn = function () {
    return console.log("Powering on . . .");
}

// myMac.powerOn();

/**
 * TO DO TOGETHER: Let's add one more piece of functionality. Create a
 * method on the phone object that returns a message displaying the user's
 * firstName and lastName. Hint: use the 'this' keyword.
 */

myPhone.currentUser = function () {
   return console.log("Current user is: " + this.name.firstName + " " + this.name.lastName)
};

// myPhone.currentUser();

/**
 * TO DO: One last thing. Let's add a 'currentUser' method that displays the
 * Mac user's 'username' and 'email'. Use the 'this' keyword to reference
 * the properties we created earlier.
 */

myMac.currentUser = function () {
    return console.log("This Mac's current user is " + this.login.username + " with the e-mail of " + this.login.email)
};

myMac.currentUser();
/*********************************************
 *                  NESTED VALUES
 ******************************************** */

/**
 * Because an Object is a collection of data and functionality, very often
 * we will see nested values. This can mean an Array of Objects containing
 * Arrays, Objects containing other Objects and so on.
 *
 * It is important to understand the shape of our data so that we can
 * navigate through it.
 */


/*********************************************
 *                  ARRAYS OF OBJECTS
 ******************************************** */

/**
 * If we have an Array of Objects, we can iterate through it to access each
 * Object element and pull the properties and methods that we need.
 */
