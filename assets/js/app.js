/*Geolocalizacion*/

function initMap() {
	
	//para calcular la ruta entre dos puntos
	var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
	
        var map = new google.maps.Map(document.getElementById('mapa'), {
          center: {lat: -33.4569400, lng: -70.6482700}, //muestra ubicacion inicial en stgo
          zoom: 17,
          disableDefaultUI: true //quita el zoom y las vistas de mapa
        });

         directionsDisplay.setMap(map);

        // Pregunta si quieres activar geolocalizacion.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var miPosicion = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            map.setZoom(17);
    		map.setCenter(miPosicion); //centra el mapa en la ubicacion

            var marker = new google.maps.Marker({ //funcion que coloca un marcador
        	position: miPosicion,
        	animation: google.maps.Animation.BOUNCE,
        	map: map,
    		});

        	}, 

          	function() {
         	error(true, map.getCenter());
          	});

        } else {
          // se ejecuta esta funcion si no escuentra la ubicacion
          error(false, map.getCenter());
        }

        //para autocompletar
 		var origenAutoComp = (document.getElementById('partida')); //toma punto de origen
  		var autocompletar = new google.maps.places.Autocomplete(origenAutoComp);
  		autocompletar.bindTo('bounds', map);

  		var destinoAutoComp = (document.getElementById('destino')); //toma punto de destino
  		var autocompletar = new google.maps.places.Autocomplete(destinoAutoComp);
  		autocompletar.bindTo('bounds', map);
	
  	//para que funcione con el boton
  	document.getElementById("trazar").addEventListener("click", function(){
         	calculateAndDisplayRoute(directionsService, directionsDisplay);
        });
	
  	//toma los datos de ambos input y los busca
      	function calculateAndDisplayRoute(directionsService, directionsDisplay) {
        directionsService.route({
          	origin: document.getElementById('partida').value,
          	destination: document.getElementById('destino').value,
          	travelMode: 'DRIVING'
        }, function(response, status) {
          	if (status === 'OK') {
            	directionsDisplay.setDirections(response);
          } else {
            	window.alert('Tu busqueda a generado error: ' + status);
          }
        });
      }

}// fin de funcion initMap

      //funcion para mensaje de error
      function error() {
        alert("No es posible encontrar tu ubicacion");
      }
