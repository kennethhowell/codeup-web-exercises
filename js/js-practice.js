// one multiplication and one division js function anon and named

"use strict";

function multiplyGuy(x , y) {
    return x * y;
}

function divisionDude(x , y) {
    return x / y;
}

var multiGuy = function(x , y) {
    return x * y;
};

var diviDude =  function(x , y) {
    return x / y;
};


const shoppingCart = {
    "tax": .08,
    "items": [
        {
            "title": "orange juice",
            "price": 3.99,
            "quantity": 1
        },
        {
            "title": "rice",
            "price": 1.99,
            "quantity": 3
        },
        {
            "title": "beans",
            "price": 0.99,
            "quantity": 3
        },
        {
            "title": "chili sauce",
            "price": 2.99,
            "quantity": 1
        },
        {
            "title": "chocolate",
            "price": 0.75,
            "quantity": 9
        }
    ]
}


function mostSpentOnItem(shoppingCart){
    var i;
    var highest = 0;
    var price = 0;
    var quantity = 0;
    var total = 0;
    var returnobj = {};
    for (i = 0; i < shoppingCart.items.length; i++) {
        price = (shoppingCart.items[i].price);
        quantity = shoppingCart.items[i].quantity;
        total = price * quantity;
        if (total > highest) {
            highest = total;
            console.log(highest);
        } else (shoppingCart.items[i].quantity * shoppingCart.items[i].price === highest)
        {


            returnobj = shoppingCart.items[i];
            // console.log(returnobj);
        }

    }
    return returnobj;
}

mostSpentOnItem(shoppingCart);