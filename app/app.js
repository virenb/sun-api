// var L = require('leaflet');
var mymap = L.map('mapid').setView([37.7749, -122.4194], 13);

// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=', {
// 	maxZoom: 18,
// 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
// 		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
// 		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
// 	mapId: 'mapbox.streets'
// }).addTo(mymap);

L.tileLayer('https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mapId: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidmlyZW5iIiwiYSI6ImNqNTFwaXFjMzA0bm8zM214czl6cmQ1MXcifQ.Ym5Z397Ed-UL3wXkU1Qbbw'
}).addTo(mymap); 

//pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw
var popup = L.popup();

function onMapMove(e) {
  var lat = mymap.getCenter().lat.toFixed(3);
  var lng = mymap.getCenter().lng.toFixed(3);
  // console.log("You are at " + lat + ", " + lng);
  $("#latlong").text(lat + ", " + lng);
  $.getJSON("https://api.sunrise-sunset.org/json", {
    lat: lat,
    lng: lng
  }, function (results) {
    $("#sunrise").text(results.results.sunrise);
    $("#sunset").text(results.results.sunset);
  });
}

mymap.on('move', onMapMove);
