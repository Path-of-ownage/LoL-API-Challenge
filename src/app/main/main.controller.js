/*globals angular */
angular.module('lolApi').controller('MainCtrl', function ($scope, colourService) {
    'use strict';
    
    $scope.enviromentMix = 50;

    $scope.getColour = function (value) {
        if (!angular.isDefined(value)) {
            return colourService.getColour(0.5);
        }
        var colour = colourService.getColour(value / 100);
        return colour;
    };
});