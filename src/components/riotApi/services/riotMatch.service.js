/*globals angular */
angular.module('lolApi').service('riotMatchService', function ($q, matchResource) {
    'use strict';

    this.getMatchData = function (matchId) {
        var deferred = $q.defer();
        matchResource.get({
            matchId: matchId
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };
});