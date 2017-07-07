var mymap = L.map('mapid').setView([37.7749, -122.4194], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.streets',
  accessToken: 'pk.eyJ1IjoidmlyZW5iIiwiYSI6ImNqNHU1MXljcDBmczMyd21jYTJuZjZqN20ifQ.GUKFDDDMgcBn5IhwSQyDNQ'
}).addTo(mymap);



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
