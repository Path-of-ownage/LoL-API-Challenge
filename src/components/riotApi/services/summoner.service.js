/*globals angular */
angular.module('lolApi').service('summonerService', function ($q, summonerResource, matchHistoryResource) {
    'use strict';

    function getMatchIds(data) {
        var output = [],
            i;

        if (angular.isUndefined(data.matches)) {
            return undefined;
        }
        
        for (i = 0; i < data.matches.length; i += 1) {
            output.push(data.matches[i].matchId);
        }

        return output;
    }

    this.getMatches = function (username, region) {
        var deferred = $q.defer();
        summonerResource.get({
            username: username,
            region: region
        }, function (data) {
            matchHistoryResource.get({
                id: data[username].id,
                region: region
            }, function (data) {
                deferred.resolve(getMatchIds(data));
            });
        });
        return deferred.promise;
    };
});