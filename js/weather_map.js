
    "use strict";

    function reverseGeocode(coordinates, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                var cityname;
                cityname = data.features[2].text + ", " + data.features[3].text;
                console.log(cityname);
                $("#cityname").empty().html(cityname.toLowerCase());
            });
    }

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
    };



    function currentUpdate(obj){
        var currentweather = "";
        var condition = obj.currently.icon;
        var icon = iconMatch(condition);
        var temp = parseInt(obj.currently.temperature);
        var humidity = parseInt(obj.currently.humidity * 100);
        var windspeed = parseInt(obj.currently.windSpeed);
        currentweather += "<span class=\"interiortext\"> Today:</span>";
        currentweather += "<span class=\"interiortext\"> Currently it is: " + temp + "°F</span>";
        currentweather += "<span class=\"interiortext\"> Humidity: " + humidity + "%</span>";
        currentweather += "<span class=\"interiortext\"> Wind Speed: " + windspeed + " knots</span>";
        currentweather += "<span class=\"interiortext\">" + obj.hourly.summary + "</span>";
        currentweather += "<img src=\"" + icon + "\">";
        $("#today").html(currentweather);
    };

    function tomorrowUpdate(data){
        var hightemp = parseInt(data.daily.data[1].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[1].temperatureLow);
        var rainchance = parseInt(data.daily.data[1].precipProbability * 100);
        var summation = data.daily.data[1].summary;
        var condition = data.daily.data[1].icon;
        var icon = iconMatch(condition);
        var tomweather = "";
        tomweather += "<span class=\"interiortext\">Tomorrow: </span>";
        tomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        tomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        tomweather += "<span class=\"interiortext\">" + summation + "</span>";
        tomweather += "<img src=\"" + icon + "\">";
        $("#tomorrow").html(tomweather);
    };

    function dayaftertomUpdate(data){
        var hightemp = parseInt(data.daily.data[2].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[2].temperatureLow);
        var rainchance = parseInt(data.daily.data[2].precipProbability * 100);
        var summation = data.daily.data[2].summary;
        var condition = data.daily.data[2].icon;
        var icon = iconMatch(condition);
        var dayafttomweather = "";
        dayafttomweather += "<span class=\"interiortext\">Day after tomorrow: </span>";
        dayafttomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        dayafttomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        dayafttomweather += "<span class=\"interiortext\">" + summation + "</span>";
        dayafttomweather += "<img src=\"" + icon + "\">";
        $("#dayafter").html(dayafttomweather);
    };

    var longitude = "-98.4936";
    var latitude = "29.4241";
    var url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latitude + "," + longitude;
    var getweather = $.get(url);
    mapboxgl.accessToken = mapboxToken;


    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/howellken/ck23ffxwnfj2o1cnlfxxdh7tj",
        center: [-98.4916, 29.4252],
        zoom: 7
    });

    var marker = new mapboxgl.Marker()
        .setLngLat([-98.4861, 29.4260])
        .setDraggable(true)
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        $("#today").empty();
        $("#tomorrow").empty();
        $("#dayafter").empty();
        reverseGeocode(lngLat, mapboxToken);
        latitude = lngLat.lat;
        longitude = lngLat.lng;
        url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latitude + "," + longitude;
        getweather = $.get(url);
        getweather.done(function(data){
            var baton = data;
            currentUpdate(baton);
            tomorrowUpdate(baton);
            dayaftertomUpdate(baton);
        });
    };

    marker.on('dragend', onDragEnd);

    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });

   $('#geocoder').append(geocoder.onAdd(map));


$(document).ready(function(){

    getweather.done(function(data){
        var currentweather = "";
        var condition = data.currently.icon;
        var icon = iconMatch(condition);
        var temp = parseInt(data.currently.temperature);
        var humidity = parseInt(data.currently.humidity * 100);
        var windspeed = parseInt(data.currently.windSpeed);
        currentweather += "<span class=\"interiortext\"> Today:</span>";
        currentweather += "<span class=\"interiortext\"> Currently: " + temp + "°F</span>";
        currentweather += "<span class=\"interiortext\"> Humidity: " + humidity + "%</span>";
        currentweather += "<span class=\"interiortext\"> Wind Speed: " + windspeed + " knots</span>";
        currentweather += "<span class=\"interiortext\">" + data.minutely.summary + "</span>";
        currentweather += "<img src=\"" + icon + "\">";

        $("#today").html(currentweather);
    });

    getweather.done(function(data){
        var hightemp = parseInt(data.daily.data[1].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[1].temperatureLow);
        var rainchance = parseInt(data.daily.data[1].precipProbability * 100);
        var summation = data.daily.data[1].summary;
        var condition = data.daily.data[1].icon;
        var icon = iconMatch(condition);
        var tomweather = "";

        tomweather += "<span class=\"interiortext\">Tomorrow: </span>";
        tomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        tomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        tomweather += "<span class=\"interiortext\">" + summation + "</span>";
        tomweather += "<img src=\"" + icon + "\">";

        $("#tomorrow").html(tomweather);
    });

    getweather.done(function (data){
        var hightemp = parseInt(data.daily.data[2].temperatureHigh);
        var lowtemp = parseInt(data.daily.data[2].temperatureLow);
        var rainchance = parseInt(data.daily.data[2].precipProbability * 100);
        var summation = data.daily.data[2].summary;
        var condition = data.daily.data[2].icon;
        var icon = iconMatch(condition);
        var dayafttomweather = "";
        dayafttomweather += "<span class=\"interiortext\">Day after tomorrow: </span>";
        dayafttomweather += "<span class=\"interiortext\"> High/Low: " + hightemp + "°F/" + lowtemp + "°F</span>";
        dayafttomweather += "<span class=\"interiortext\"> Chance for precipitation: " + rainchance + "%</span>";
        dayafttomweather += "<span class=\"interiortext\">" + summation + "</span>";
        dayafttomweather += "<img src=\"" + icon + "\">";

        $("#dayafter").html(dayafttomweather);

    });


    $("#forecastbutton").click(function (e){
        e.preventDefault();
        $("#today").empty();
        $("#tomorrow").empty();
        $("#dayafter").empty();
        latitude = $("#latitude").val();
        longitude = $("#longitude").val();
        url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latitude + "," + longitude;
        getweather = $.get(url);
        getweather.done(function(data){
            var baton = data;
            currentUpdate(baton);
            tomorrowUpdate(baton);
            dayaftertomUpdate(baton);
        });
    });



    geocoder.on('result', function(result){
        var storage;
        var cityname;
        cityname = result.result.text + ", " + result.result.context[0].text;
        $("#cityname").empty().html(cityname.toLowerCase());
        storage = result.result.center;
        $("#today").empty();
        $("#tomorrow").empty();
        $("#dayafter").empty();
        latitude = storage[1];
        longitude = storage[0];
        var arraycords = [longitude, latitude];
        marker.setLngLat(arraycords);
        url = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkskyToken + "/" + latitude + "," + longitude;
        getweather = $.get(url);
        getweather.done(function(data){
            var baton = data;
            currentUpdate(baton);
            tomorrowUpdate(baton);
            dayaftertomUpdate(baton);
        });
    });




});

