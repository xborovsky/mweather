(function() {
  'use strict';

  angular.module('mWeatherApp')
    .constant('GEOCODE_SERVICE', L.esri.Geocoding.geocodeService())
    .factory('GeolocationFactory', GeolocationFactory);

    GeolocationFactory.$inject = ['GEOCODE_SERVICE', '$q'];
    function GeolocationFactory(GEOCODE_SERVICE, $q) {
      return {
        getCurrentLocation : function() {
          var currentLocation = $q.defer();
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                currentLocation.resolve(position);
            }, function(error) {
                throw new GeolocationException(error.message);
            });
          } else {
              throw new GeolocationException('Geolocation not accessible!');
          }

          return currentLocation.promise;
        },
        getCityNameFromCoords : function(lat, lng) {
            console.log('lat: ', lat);
            console.log('lng: ', lng);
            var cityName = $q.defer();
            GEOCODE_SERVICE.reverse().latlng({lat : lat, lng : lng}).run(function(error, result) {
                if (error) {
                    throw new GeolocationException('Geolocation error!');
                }
                cityName.resolve(result.address);
            });

            return cityName.promise;
        }
      };
    }

    function GeolocationException(message) {
        this.name = 'GeolocationException';
        this.message = message;
    }

})();
