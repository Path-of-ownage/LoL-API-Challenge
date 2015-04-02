/*globals angular */
angular.module('lolApi').service('matchService', function ($q, matchResource) {
    'use strict';
    var self = this;

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