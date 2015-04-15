/*globals angular */
angular.module('lolApi').controller('MainCtrl', function ($scope, colourService, matchService, eventSerializerService, playerService) {
    'use strict';

    $scope.enviromentMix = 50;

    $scope.getColour = function (value) {
        if (!angular.isDefined(value)) {
            return colourService.getColour(0.5);
        }
        var colour = colourService.getColour(value / 100);
        return colour;
    };

    $scope.changeVolume = function () {
        playerService.changeVolume($scope.enviromentMix);
    };

    matchService.getTimelineData(1427995800).then(function (data) {
        $scope.matchesId = eventSerializerService.getEvents(data[0]);
        playerService.play($scope.matchesId);
    });
});