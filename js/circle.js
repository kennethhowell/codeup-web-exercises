(function() {
    "use strict";

    // create a circle object
    var circle = {
            radius: 3,

            getArea: function () {
                // TODO: complete this method
                var areaReturn = (Math.PI * Math.pow(circle.radius, 2));
                // TODO: return the proper value
                return areaReturn;

            },

            logInfo: function (doRounding) {
                // TODO: complete this method.
                if (doRounding) {
                    var roundedArea = Math.round(circle.getArea(circle.radius));
                } else {
                    var roundedArea = circle.getArea(circle.radius);
                }

                console.log("Area of a circle with radius: " + this.radius + ", is: " + roundedArea);
            }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
