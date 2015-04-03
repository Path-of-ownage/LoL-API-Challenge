/*globals angular */
angular.module('lolApi').controller('SandboxController', function ($scope, matchService, eventSerializerService) {
    'use strict';

    /*urfService.getUrfMatches(new Date().getHours(), new Date().getMinutes()).then(function (data) {
        $scope.matchesId = data;
    });*/

    matchService.getMatchData(1427995800).then(function (data) {
        //$scope.matchesId = data;
        $scope.matchesId = eventSerializerService.getEvents(data[0]);
    });
});