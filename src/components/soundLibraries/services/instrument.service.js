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

    this.getRandomSample = function (samples) {
        var index = Math.floor(Math.random() * (samples.length - 1));
        return samples[index];
    };


    this.createVolumeCurveFunction = function (highestVol, lowestVol, maxVol) {
        var diff, m, c;
        if (!angular.isDefined(maxVol)) {
            maxVol = 1;   
        }
        diff = highestVol - lowestVol;
        m = maxVol / diff;

        c = -m * lowestVol;

        return function (x) {
            var y = m * x + c;
            if (y < 0) {
                y = 0;
            }

            if (y > maxVol) {
                y = maxVol;
            }
            return y;
        };
    };
});