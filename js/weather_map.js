(function (){
    "use strict";


var testget = $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/892be8803635af0b0c775e7113aefb51/29.4284,-98.4870")
    var currentweather = "";
    var tomweather = "";
    var dayafttomweather = "";
    testget.done(function(data){
        var temp = parseInt(data.currently.temperature);
        var humidity = parseInt(data.currently.humidity * 100);
        var windspeed = parseInt(data.currently.windSpeed);
        var bpressure = parseInt(data.currently.pressure);
        currentweather += "<span class=\"interiortext\"> Currently it is " + temp + "°F</span>";
        currentweather += "<span class=\"interiortext\"> Humidity: " + humidity + "%</span>";
        currentweather += "<span class=\"interiortext\"> Wind Speed: " + windspeed + " knots</span>";
        currentweather += "<span class=\"interiortext\"> Barometric Pressure: " + bpressure + "mb</span>";
        currentweather += "<span class=\"interiortext\">" + data.minutely.summary + "</span>";
        $("#today").append(currentweather);
    })

    testget.done(function(data){
        var hightemp = parseInt(data.daily.data[1].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[1].temperatureLow);
        var rainchance = parseInt(data.daily.data[1].precipProbability * 100);
        var summation = data.daily.data[1].summary;
        console.log(summation);

        tomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        tomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        tomweather += "<span class=\"interiortext\">" + summation + "</span>";
        $("#tomorrow").append(tomweather);
    })



})();