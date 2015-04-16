/*globals angular */
angular.module('lolApi').controller('MainCtrl', function ($scope, colourService, matchService, eventSerializerService, playerService) {
    'use strict';

    $scope.enviromentMix = 50;
    $scope.muted = false;
    
    $scope.getColour = function (value) {
        if (!angular.isDefined(value)) {
            return colourService.getColour(0.5);
        }
        var colour = colourService.getColour(value / 100);
        return colour;
    };

    $scope.changeVolume = function () {
        playerService.changeVolume($scope.enviromentMix);
        $scope.muted = false;
    };

    matchService.getTimelineData(1427995800).then(function (data) {
        $scope.events = eventSerializerService.getEvents(data);
        playerService.play($scope.events);
    });

    playerService.setPlayCallback(function (event) {
        //console.log('playing ' + event.eventType + ' at: ' + event.timestamp);
    });

    playerService.setEndPlayCallback(function () {
        matchService.getTimelineData(1427995800).then(function (data) {
            $scope.events = eventSerializerService.getEvents(data);
            playerService.play($scope.events);
        });
    });

    $scope.setMuted = function (muted) {
        $scope.muted = muted;
        if (muted) {
            playerService.mute();
        } else {
            playerService.changeVolume($scope.enviromentMix);
        }
    };
});