/*globals angular */
angular.module('lolApi').controller('SandboxController', function ($scope, matchService) {
    'use strict';
    
    /*urfService.getUrfMatches(new Date().getHours(), new Date().getMinutes()).then(function (data) {
        $scope.matchesId = data;
    });*/

    riotUrfService.getUrfMatchesWithEpoch(1427995800).then(function (data) {
        $scope.matchesId = data;
    });
});