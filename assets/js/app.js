/*Geolocalizacion*/

function initMap(){
  //Para que el mapa aparezca en mi html
  var directionsService = new google.maps.DirectionsService;
  var directionsDisplay = new google.maps.DirectionsRenderer;
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 12,
    center: {lat: -33.4569400, lng: -70.6482700}//mapa parte en santiago
  });
  
  directionsDisplay.setMap(map);

  //para autocompletar
 	var origenAutoComp = (document.getElementById('origen')); //toma punto de origen
  var autocompletar = new google.maps.places.Autocomplete(origenAutoComp);
  autocompletar.bindTo('bounds', map);

  var destinoAutoComp = (document.getElementById('destino')); //toma punto de destino
  var autocompletar = new google.maps.places.Autocomplete(destinoAutoComp);
  autocompletar.bindTo('bounds', map);
}