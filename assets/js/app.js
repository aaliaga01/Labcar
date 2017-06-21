/*Geolocalizacion*/

function initMap(){

  //Para que el mapa aparezca en el sitio
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 12,
    center: {lat: -33.4569400, lng: -70.6482700},//mapa parte en santiago
    disableDefaultUI: true //para contoles de zoom y imagen relieve - satelite NO se muestren
  });
  
}