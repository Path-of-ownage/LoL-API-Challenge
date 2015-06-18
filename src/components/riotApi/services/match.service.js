/*globals angular */
angular.module('lolApi').service('matchService', function ($q, $timeout, riotMatchService, riotUrfService, summonerService, mathUtilService) {
    'use strict';

    var totalMatchIDs;

    function getRandomMatch(matchIDs, region) {
        var deferred = $q.defer(),
            matchId = mathUtilService.getRandomObjectFromArray(matchIDs);

        riotMatchService.getMatchData(matchId, region).then(function (matchData) {
            deferred.resolve(matchData);
        });
        return deferred.promise;
    }

    this.getTimelineData = function (epoch) {
        var deferred = $q.defer();

        if (angular.isDefined(totalMatchIDs)) {
            getRandomMatch(totalMatchIDs).then(function (matchData) {
                deferred.resolve(matchData);
            });
        } else {
            riotUrfService.getUrfMatchesWithEpoch(epoch).then(function (matchIds) {
                totalMatchIDs = matchIds;
                getRandomMatch(totalMatchIDs).then(function (matchData) {
                    deferred.resolve(matchData);
                });
            });
        }

        return deferred.promise;
    };

    this.getTimelineDataFromUser = function (username, region) {
        var deferred = $q.defer();
        summonerService.getMatches(username, region).then(function (matchIds) {
            totalMatchIDs = matchIds;
            getRandomMatch(totalMatchIDs, region).then(function (matchData) {
                deferred.resolve(matchData);
            });
        });
        return deferred.promise;
    };
});