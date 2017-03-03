(function() {
  'use strict';

  angular.module('mWeatherApp')
    .constant('BASE_URL', 'http://api.openweathermap.org/data/2.5/weather')
    .constant('OPEN_WEATHER_API_KEY', 'ae5ca1977106477c7f5d2a6ffe44efeb')
    .factory('ForecastFactory', ForecastFactory);

  ForecastFactory.$inject = ['BASE_URL', '$http', 'OPEN_WEATHER_API_KEY'];
  function ForecastFactory(BASE_URL, $http, OPEN_WEATHER_API_KEY) {
    var baseUrl = BASE_URL + '?APPID=' + OPEN_WEATHER_API_KEY;
    return {
      getCurrentWeather : function(lat, lon) {
        return $http.get(baseUrl + '&lat=' + lat + '&lon=' + lon);
      }
    };
  }

})();
