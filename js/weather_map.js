(function (){
    "use strict";

    var weathercondition = [
        {
            "clear-day":"img/weathericons/Sun.svg"
        },{
            "clear-night":"img/weathericons/Moon-Full.svg"
        },{
            "rain":"img/weathericons/Cloud-Rain-Alt.svg"
        },{
            "snow":"img/weathericons/Snowflake.svg"
        },{
            "sleet":"img/weathericons/Cloud-Hail.svg"
        },{
            "wind":"img/weathericons/Wind.svg"
        },{
            "fog":"img/weathericons/Cloud-Fog-Sun-Alt.svg"
        },{
            "cloudy":"img/weathericons/Cloud.svg"
        },{
            "partly-cloudy-day":"img/weathericons/Cloud-Sun.svg"
        },{
            "partly-cloudy-night":"img/weathericons/Cloud-Moon.svg"
        },];

    function iconMatch(weather){
        switch(weather) {
            case "clear-day":
                return weathercondition[0]["clear-day"];
            case "clear-night":
                return weathercondition[1]["clear-night"];
            case "rain":
                return weathercondition[2]["rain"];
            case "snow":
                return weathercondition[3]["snow"];
            case "sleet":
                return weathercondition[4]["sleet"];
            case "wind":
                return weathercondition[5]["wind"];
            case "fog":
                return weathercondition[6]["fog"];
            case "cloudy":
                return weathercondition[7]["cloudy"];
            case "partly-cloudy-day":
                return weathercondition[8]["partly-cloudy-day"];
            case "partly-cloudy-night":
                return weathercondition[9]["partly-cloudy-night"];
        }
    }

//
var testget = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/892be8803635af0b0c775e7113aefb51/29.4284,-98.4870")
    var currentweather = "";
    var tomweather = "";
    var dayafttomweather = "";
    testget.done(function(data){
        var condition = data.currently.icon;
        var icon = iconMatch(condition);
        var temp = parseInt(data.currently.temperature);
        var humidity = parseInt(data.currently.humidity * 100);
        var windspeed = parseInt(data.currently.windSpeed);
        var bpressure = parseInt(data.currently.pressure);
        currentweather += "<span class=\"interiortext\"> Currently it is: " + temp + "°F</span>";
        currentweather += "<img src=\"" + icon + "\">";
        currentweather += "<span class=\"interiortext\"> Humidity: " + humidity + "%</span>";
        currentweather += "<span class=\"interiortext\"> Wind Speed: " + windspeed + " knots</span>";
        currentweather += "<span class=\"interiortext\"> Barometric Pressure: " + bpressure + "mb</span>";
        currentweather += "<span class=\"interiortext\">" + data.minutely.summary + "</span>";
        $("#today").append(currentweather);
    });

    testget.done(function(data){
        var hightemp = parseInt(data.daily.data[1].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[1].temperatureLow);
        var rainchance = parseInt(data.daily.data[1].precipProbability * 100);
        var summation = data.daily.data[1].summary;
        var condition = data.daily.data[1].icon;
        var icon = iconMatch(condition);

        tomweather += "<span class=\"interiortext\">Tomorrow: </span>";
        tomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        tomweather += "<img src=\"" + icon + "\">";
        tomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        tomweather += "<span class=\"interiortext\">" + summation + "</span>";
        $("#tomorrow").append(tomweather);
    });
    //
    testget.done(function (data){
        var hightemp = parseInt(data.daily.data[2].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[2].temperatureLow);
        var rainchance = parseInt(data.daily.data[2].precipProbability * 100);
        var summation = data.daily.data[2].summary;
        var condition = data.daily.data[1].icon;
        var icon = iconMatch(condition);

        dayafttomweather += "<span class=\"interiortext\">Day after tomorrow: </span>";
        dayafttomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        dayafttomweather += "<img src=\"" + icon + "\">";
        dayafttomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        dayafttomweather += "<span class=\"interiortext\">" + summation + "</span>";
        $("#dayafter").append(dayafttomweather);

    });

   var conditiontest = "";

// testget.done(function (data){
//        conditiontest = data.currently.icon;
//         console.log(conditiontest);
//         var result = iconMatch(conditiontest);
//     $("#icontest").html("<img src=\"" + result + "\">" );
//     });



//
//     function iconMatch(weather){
//         switch(weather) {
//             case "clear-day":
//                 return weathercondition[0]["clear-day"];
//             case "clear-night":
//                 return weathercondition[1]["clear-night"];
//             case "rain":
//                 return weathercondition[2]["rain"];
//             case "snow":
//                 return weathercondition[3]["snow"];
//             case "sleet":
//                 return weathercondition[4]["sleet"];
//             case "wind":
//                 return weathercondition[5]["wind"];
//             case "fog":
//                 return weathercondition[6]["fog"];
//             case "cloudy":
//                 return weathercondition[7]["cloudy"];
//             case "partly-cloudy-day":
//                 return weathercondition[8]["partly-cloudy-day"];
//             case "partly-cloudy-night":
//                 return weathercondition[9]["partly-cloudy-night"];
//         }
//     }
//
//     var cloudy = iconMatch("cloudy");
//
// $("#icontest").html("<img src=\"" + cloudy + "\">" );
})();