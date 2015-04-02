/*globals angular */
angular.module('lolApi').service('matchService', function ($q, $timeout, riotMatchService, riotUrfService) {
    'use strict';

    this.getMatchData = function (epoch) {
        var index,
            totalMatches = [],
            promises = [],
            deferred = $q.defer();

        var count = 0;

        riotUrfService.getUrfMatchesWithEpoch(epoch).then(function (matches) {
            for (index = 0; index < matches.length; index += 1) {
                promises.push(riotMatchService.getMatchData(matches[index]).then(function (matchData) {
                    totalMatches.push(matchData);
                    console.log(++count);
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
});