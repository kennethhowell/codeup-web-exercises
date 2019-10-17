(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an unordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var brPlanets = planetsArray.join("<br>");
    // console.log(brPlanets);
    // console.log(planetsArray);


    //bonus
    console.log(planetsArray);

    function ulliPlanets(arr){
        var str = '';
        for(var i = 0; i < arr.length; i++){
            str += '<li>' + arr[i] + '</li>;';
        }
        return str;
    }

    planetsArray = ulliPlanets(planetsArray)
    // console.log(planetsArray);

    planetsArray = planetsArray.split(";");
    // console.log(planetsArray);


    planetsArray.unshift("<ul>");
    // console.log(planetsArray);

    planetsArray.push("</ul>");
    // console.log(planetsArray);

    planetsArray = planetsArray.join(" ");
    console.log(planetsArray);


})();
