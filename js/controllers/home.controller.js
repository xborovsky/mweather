(function() {
  'use strict';

  angular.module('mWeatherApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['currentLocation', 'ForecastFactory'];
  function HomeController(currentLocation, ForecastFactory) {
    var ctrl = this;
    
    console.log(currentLocation);

    ctrl.currentLocation = currentLocation.address.City + ', '
      + currentLocation.address.Subregion + ', '
      + currentLocation.address.Region;

    ctrl.currentWeather = null;

    ForecastFactory.getCurrentWeather(50.145, 14.213).then(function(result) {
      console.log(result);
    });

  }

})();
