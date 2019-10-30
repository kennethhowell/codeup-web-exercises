$(document).ready(function() {

$("li").css("font-size", "20px")

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
});