/*globals angular */
angular.module('lolApi').service('instrumentService', function () {
    'use strict';

    this.changeVolume = function (samples, volume) {
        if (volume > 1) {
            throw "Invalid volume. Must be between 0 and 1";
        }
        var i;
        for (i = 0; i < samples.length; i += 1) {
            samples[i].volume = volume;
        }
    };
});