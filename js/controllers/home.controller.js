(function() {
  'use strict';

  angular.module('mWeatherApp')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['currentLocation', 'ForecastFactory'];
  function HomeController(currentLocation, ForecastFactory) {
    var ctrl = this;

    ctrl.currentLocation = currentLocation.City + ', '
      + currentLocation.Subregion + ', '
      + currentLocation.Region;

    /*ForecastFactory.getCurrentWeather(50.145, 14.213).then(function(result) {
      console.log(result);
    });*/

  }

})();
