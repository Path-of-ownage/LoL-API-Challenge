/*globals angular */
angular.module('lolApi').service('eventCounterService', function () {
    'use strict';

    this.getCounts = function (eventArray) {
        var i, output = {};
        for (i = 0; i < eventArray.length; i += 1) {
            if (angular.isDefined(output[eventArray[i].eventType])) {
                output[eventArray[i].eventType] += 1;
            } else {
                output[eventArray[i].eventType] = 1;
            }
        }
        return output;
    };
});