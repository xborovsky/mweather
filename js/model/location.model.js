(function() {
    'use strict';

    angular.module('mWeather.Models')
        .factory('Location', Location);

    function Location(coordinates, address) {
        this.coordinates = coordinates;
        this.address = address;
    }

    Location.build = function(data) {
        return new Location(
            data.coordinates,
            data.address
        );
    };

    return Location;

})();