(function() {
    'use strict';

    angular.module('mWeatherApp')
        .factory('ExceptionHandler', ExceptionHandler);

    ExceptionHandler.$inject = ['$log', '$state'];
    function ExceptionHandler($log, $state) {
        return function(exception, cause) {
            var msg = 'Error: ' + exception.message;
            if (cause) {
                msg += ' (cause: ' + cause + ')';
            }
            
            $log.error(msg);
            $state.go('error');
        };
    }
    
})();