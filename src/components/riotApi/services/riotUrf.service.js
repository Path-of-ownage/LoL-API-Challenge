/*globals angular */
angular.module('lolApi').service('riotUrfService', function ($q, urfResource) {
    'use strict';
    var currentDate = new Date();
    
    this.getUrfMatchesWithEpoch = function (epoch) {
        var deferred = $q.defer();
        urfResource.query({
            beginDate: epoch
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

    this.getUrfMatches = function (hour, minute) {
        var roundedDate, roundedMinute, roundedEpoch, deferred = $q.defer();
        roundedMinute = 5 * (Math.round(minute / 5));
        roundedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDay(), hour, roundedMinute, 0, 0);

        roundedEpoch = roundedDate.getTime() / 1000;
        urfResource.query({
            beginDate: roundedEpoch
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

});