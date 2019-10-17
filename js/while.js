// // while loop multiplying by two
//
// // var i = 2;
// //
// // while (i <= 65536) {
// //     console.log("multiplication loop currently at number:" + i);
// //     i = i * 2;
// // }
//
// while loop ice cream word problem ~ random num 50 - 100 = cones to sell, 1 - 5 = cones sold, return msg for status of inventory and sale

var allCones = Math.floor(Math.random() * 50) + 50;
var i = allCones;


do {
    var soldcones = Math.floor(Math.random() * 5) + 1;

    if (i > 0 && i >= soldcones) {
        i = i - soldcones;
        console.log(soldcones + " cones were just sold! And you have " + i + " cones left!");
    } else if (soldcones > i) {
        console.log("You can't sell " + soldcones + " cones! You only have " + i + " cones left to sell!");
    }


} while (i > 0);

console.log("You sold all the cones! Let's boogie!");

