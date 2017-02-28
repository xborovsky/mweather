(function() {
  'use strict';

  angular.module('mWeatherApp')
    .factory('GeolocationFactory', GeolocationFactory);

    function GeolocationFactory() {
      return {
        getCurrentLocation : function() {
          if (navigator.geolocation) {
            return navigator.geolocation.getCurrentPosition(function(position) {
              return position;
            });
          }
        }
      };
    }

})();
