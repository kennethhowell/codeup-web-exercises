"use strict";

var fruits = ["apple", "banana", "orange", "apple", "pineapple"];


function allIndexesOf (array, search) {
    var indices = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] === search) indices.push(i);
    }
   return indices;
}

console.log(allIndexesOf(fruits, "apple"));
console.log(allIndexesOf(fruits, "guava"));
console.log(allIndexesOf(fruits, "pineapple"));

