(function() {
  'use strict';

  angular.module('mWeatherApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['GeolocationFactory'];
  function HomeController(GeolocationFactory) {
    var ctrl = this;

    ctrl.currentLocation = GeolocationFactory.getCurrentLocation();
  }

})();
