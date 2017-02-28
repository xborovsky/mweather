(function() {
  'use strict';

  angular.module('mWeatherApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/home');

      $stateProvider
        .state('home', {
          url : '/home',
          templateUrl : 'js/templates/home.html',
          controller : 'HomeController as homeCtrl'
        })

    });
})();
