"use strict";
mapboxgl.accessToken = mapboxToken;


var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/howellken/ck23ffxwnfj2o1cnlfxxdh7tj",
    center: [-98.4916, 29.4252],
    zoom: 9
})

var favspots =  [{
    name: "india palace",
    address: "8474 Fredericksburg Rd, San Antonio, TX 78229",
    popupHTML: "<em>India Palace:</em> long-standing indian buffet with high quality and diverse flavors"
},{
    name: "taqueria jalisco",
    address: "7094 Bandera Rd, San Antonio, TX 78228",
    popupHTML: "<em>Taqueria Jalisco:</em> casual spot for tex-mex and north mex foods with great lunch specials"
},{
    name: "louie italian restaurant",
    address: "4979 Northwest Loop 410, San Antonio, TX 78229",
    popupHTML: "<em>Louie's Italian:</em> italian spot with fine ambiance and excellent from-scratch tasting dishes"

}];


function placeMarkerAndPopup(array, token, map) {
    array.forEach(function (favspot, i) {
        var addy = array[i].address;
        console.log(addy);
        var popuptext = array[i].popupHTML;
        console.log(popup);
        var popup = new mapboxgl.Popup()
        .setHTML(popuptext);

        geocode(addy, token).then(function (coordinates) {
            var marker = new mapboxgl.Marker()
                .setLngLat(coordinates)
                .addTo(map)
                .setPopup(popup);
        })
    });
};


placeMarkerAndPopup(favspots, mapboxToken, map);


