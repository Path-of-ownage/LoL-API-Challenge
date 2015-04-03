/*globals angular */
angular.module('lolApi').service('matchService', function ($q, $timeout, riotMatchService, riotUrfService) {
    'use strict';

    this.getMatchData = function (epoch) {
        var index,
            totalMatches = [],
            promises = [],
            deferred = $q.defer();

        riotUrfService.getUrfMatchesWithEpoch(epoch).then(function (matches) {
            for (index = 0; index < matches.length; index += 1) {
                promises.push(riotMatchService.getMatchData(matches[index]).then(function (matchData) {
                    totalMatches.push(matchData);
                }));
            }
            $q.all(promises, $timeout(function () {
                deferred.resolve(totalMatches);
            }, 2000)).then(function () {
                deferred.resolve(totalMatches);
            });

        });
        return deferred.promise;
    };

    this.getTimelineData = function (epoch) {
        var timelineData = [],
            matchIndex,
            deferred = $q.defer();
        this.getMatchData(epoch).then(function (data) {
            for (matchIndex = 0; matchIndex < data.length; matchIndex += 1) {
                timelineData.push(data[matchIndex]);
            }
            deferred.resolve(timelineData);
        });
        return deferred.promise;
    };
});