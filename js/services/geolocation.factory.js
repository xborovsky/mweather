(function() {
  'use strict';

  angular.module('mWeatherApp')
    .constant('GEOCODE_SERVICE', L.esri.Geocoding.geocodeService())
    .factory('GeolocationFactory', GeolocationFactory);

    GeolocationFactory.$inject = ['GEOCODE_SERVICE'];
    function GeolocationFactory(GEOCODE_SERVICE) {
      return {
        getCurrentLocation : function() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position);
                return position;
            }, function(error) {
                throw new GeolocationException(error.message);
            });
          } else {
              throw new GeolocationException('Geolocation not accessible!');
          }
        },
        getCityNameFromCoords : function(lat, lng) {
            console.log('lat: ', lat);
            console.log('lng: ', lng);
            return GEOCODE_SERVICE.reverse().latlng({lat : lat, lng : lng}).run(function(error, result) {
                if (error) {
                    throw new GeolocationException('Geolocation error!');
                }
                return result.address;
            });
        }
      };
    }
    
    function GeolocationException(message) {
        this.name = 'GeolocationException';
        this.message = message;
    }

})();
