$(document).ready(function() {

// $("li").css("font-size", "20px")

// $("h1").css("background-color", "gold");
// $("p").css("background-color", "gold");
// $("li").css("background-color", "gold");

    // $("li, p, h1").css("background-color", "gold")

// alert( $("h1").html());
//

//     Add jQuery code that will change the background color of an h1 element when clicked.
//

    $("h1").click(function(){
        $(this).css("background-color", "red");
    });
//         Make all paragraphs have a font size of 18px when they are double clicked.
//

    $("p").dblclick(function(){
        $(this).css("font-size", "18px");
    })
//         Set all li text color to red when the mouse is hovering; reset to black when it is not.



    $("li").hover(
        function () {
            $(this).css("color","red");
    },
        function () {
            $(this).css("color","black");
    }


    );
});

// write a js function that will return an array of hamsters height ascending order

var hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

// function ascendingHamsters(hamsters){
//     var bucket = [];
//     var i = 0;
//     var testcase = 0;
//     for (i; i < hamsters.length; i++){
//        if (hamsters[i].heightInMM > testcase) {
//            testcase = hamsters[i].heightInMM;
//            bucket.push(hamsters[i]);
//        } else if (hamsters[i].heightInMM < testcase && hamsters[i].heightInMM < hamsters[i - 1].heightInMM) {
//            bucket.unshift(hamsters[i]);
//        }
//     }
//     console.log(bucket);
//     return bucket
// }
//
// ascendingHamsters(hamsters);