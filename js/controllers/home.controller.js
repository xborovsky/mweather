(function() {
  'use strict';

  angular.module('mWeatherApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['GeolocationFactory'];
  function HomeController(GeolocationFactory) {
    var ctrl = this,
        currentLocation = GeolocationFactory.getCurrentLocation();

    ctrl.currentLocation = GeolocationFactory.getCurrentLocation().then(function(currentLocation) {
        GeolocationFactory.getCityNameFromCoords(
            currentLocation.coords.latitude, currentLocation.coords.longitude
        );
    });
  }

})();
