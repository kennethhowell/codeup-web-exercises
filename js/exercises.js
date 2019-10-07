 // You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days . . .), and Hercules (1 day. . .).
 // If price for a movie per day is $3, how much will you have to pay?

 function BlockBusterRental (a, b, c) {
    var rentaldue = (a + b + c) * 3;
        return rentaldue;
 }

 console.log(BlockBusterRental(3, 5, 1));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400 (6 hr), Amazon $380 (4 hr), and Facebook $350 (10 hr).
 // How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.


 function PayDay () {
     var GoogleTime = 6;
     var AmazonTime = 4;
     var FacebookTime = 10;
     var getmoney = (GoogleTime * 400) + (AmazonTime * 380) + (FacebookTime * 350);
     return getmoney;

 }

 console.log(PayDay());

 // A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

 function enrollmentCheck () {
     return classnotfull(true) && scheduleclear(true);
 }

 // david walkthrough
 // var classTime = "9AM";
 // var classSize = "125;
 // var currClassSize = 108;
 // var studentClassTime = "9AM";
 // var studentCanSignUp = currClassSize < classSize && classTime !== studentClassTime;

 // A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

 function limitedtimeOffer() {
     return shoppingcart > 2 && offercurrent(true) || premiummember(true) && offercurrent(true);
 }
 //
 // david w-t
 // var offerValid = true;
 // var cart = 3;
 // var isPremiumMember = false;
 // var canHaveDiscount = offerValid && (cart > 2 || isPremiumMember)

 // Use the following code to follow the instructions below:
 //
 //
 // var username = 'codeup';
 // var password = 'notastrongpassword';
 // Create a variable that holds a boolean value for each of the following conditions:
 //
 // the password must be at least 5 characters
 // the password must not include the username
 // the username must be no more than 20 characters
 // neither the username or password can start or end with whitespace


 var isfivemin = password.length() >= 5;
 var userninpw = password.includes(username);
 var istwentymax = username.length() <= 20;
 var whitespace = password.contains(" ") || username.contains(" ");


 // d w-t
 //
 // password.length >=5 && password.indexOf(username) === -1 && username.length <= 20 && username === username.trim() && password === password.trim();