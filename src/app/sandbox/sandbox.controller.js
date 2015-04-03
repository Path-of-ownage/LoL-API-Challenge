/*globals angular */
angular.module('lolApi').controller('sandboxController', function ($scope, matchService, eventSerializerService, soundPlayerService) {
    'use strict';

    /*urfService.getUrfMatches(new Date().getHours(), new Date().getMinutes()).then(function (data) {
        $scope.matchesId = data;
    });*/

    matchService.getMatchData(1427995800).then(function (data) {
        //$scope.matchesId = data;
        //$scope.matchesId = eventSerializerService.getEvents(data[0]);
        $scope.matchesId = eventSerializerService.getPlayerData(data[0]);

    });
    
    soundPlayerService.playSound();
});