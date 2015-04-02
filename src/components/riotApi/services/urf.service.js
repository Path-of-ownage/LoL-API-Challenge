/*globals angular */
angular.module('lolApi').service('urfService', function ($q, urfResource) {
    'use strict';
    var self = this;

    this.getUrfData = function (date) {
        var deferred = $q.defer();
        urfResource.get({
            beginDate: date
        }, function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
    };

});