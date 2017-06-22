/*Geolocalizacion*/

function initMap() {
        var map = new google.maps.Map(document.getElementById('mapa'), {
          center: {lat: -33.4569400, lng: -70.6482700}, //muestra ubicacion inicial en stgo
          zoom: 17,
          disableDefaultUI: true
        });

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
}// fin de funcion initMap

      //funcion para mensaje de error
      function error() {
        alert("No es posible encontrar tu ubicacion");
      }
