(function() {
    'use strict';
    
    angular.module('mWeatherApp')
        .controller('ErrorController', ErrorController);

    function ErrorController() {
        var ctrl = this;
        
        ctrl.errorMsg = 'Oops, something went wrong!';
    }
    
})();