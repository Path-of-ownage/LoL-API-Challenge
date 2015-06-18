/*globals angular */
angular.module('lolApi').service('riotMatchService', function ($q, matchResource) {
    'use strict';

    this.getMatchData = function (matchId, region) {
        var deferred = $q.defer();
        matchResource.get({
            matchId: matchId,
            region: region
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
});