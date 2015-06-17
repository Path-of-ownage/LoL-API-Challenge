/*globals angular */
angular.module('lolApi').service('summonerService', function ($q, summonerResource, matchHistoryResource) {
    'use strict';

    function getMatchIds(data) {
        var output = [],
            i;

        for (i = 0; i < data.matches.length; i += 1) {
            output.push(data.matches[i].matchId);
        }
        
        return output;
    }

    this.getMatches = function (username) {
        var deferred = $q.defer();
        summonerResource.get({
            username: username,
            region: 'euw'
        }, function (data) {
            matchHistoryResource.get({
                id: data[username].id
            }, function (data) {
                deferred.resolve(getMatchIds(data));
            });
        });
        return deferred.promise;
    };
});