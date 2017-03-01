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
            currentLocationCoords : ['GeolocationFactory',  function(GeolocationFactory) {
              return GeolocationFactory.getCurrentLocation();
            }],
            currentLocation : ['GeolocationFactory', 'currentLocationCoords', function(GeolocationFactory, currentLocationCoords) {
              return GeolocationFactory.getCityNameFromCoords(
                  currentLocationCoords.coords.latitude, currentLocationCoords.coords.longitude
              );
            }]
          }
        })

    });
})();
