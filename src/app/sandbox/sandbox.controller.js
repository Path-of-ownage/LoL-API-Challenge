/*globals angular */
angular.module('lolApi').controller('sandboxController', function ($scope, matchService, eventSerializerService, playerService) {
    'use strict';

    /*urfService.getUrfMatches(new Date().getHours(), new Date().getMinutes()).then(function (data) {
        $scope.matchesId = data;
    });*/

    $scope.changeVolume = function () {
        playerService.changeVolume($scope.enviromentMix);
    };

    matchService.getTimelineData(1427995800).then(function (data) {
        $scope.matchesId = eventSerializerService.getEvents(data[0]);
        //var matchPlayerData = eventSerializerService.getPlayerDataArray(data[0]);
        //$scope.matchesId = eventSerializerService.getNotesFromPlayerDataArray(matchPlayerData);
        playerService.play($scope.matchesId);

    });

});