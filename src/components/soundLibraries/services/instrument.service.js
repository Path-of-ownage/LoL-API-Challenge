/*globals angular */
angular.module('lolApi').service('instrumentService', function () {
    'use strict';

    this.changeVolume = function (samples, volume) {
        var i;
        for (i = 0; i < samples.length; i += 1) {
            samples[i].volume = volume;
        }
    };
});