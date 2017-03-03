(function() {
  'use strict';

  angular.module('mWeatherApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url : '/home',
          templateUrl : 'js/templates/home.html',
          controller : 'HomeController as homeCtrl',
          resolve : {
            currentLocationCoords : ['GeolocationFactory', '$state',  function(GeolocationFactory, $state) {
              return GeolocationFactory.getCurrentLocation();
            }],
            currentLocation : ['GeolocationFactory', 'currentLocationCoords', 'Location', function(GeolocationFactory, currentLocationCoords, Location) {
                var address = GeolocationFactory.getCityNameFromCoords(
                    currentLocationCoords.coords.latitude, currentLocationCoords.coords.longitude
                );
        
                return Location.build(currentLocationCoords, address);
            }]
          }
        })
        .state('error', {
            url : '/error',
            template : 'js/templates/error.html',
            controller : 'ErrorController as errCtrl'
        });
    });
})();
