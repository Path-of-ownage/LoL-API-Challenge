/*globals angular */
angular.module('lolApi').service('cricketInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/crickets/loud/1.mp3'));

    this.getRandomSample = function () {
        return instrumentService.getRandomSample(self.sample);
    };

    this.playRandomSample = function (cap) {
        var sample;
        if (self.locked === true) {
            return;
        }

        sample = self.getRandomSample();
        sample.play();
        self.locked = true;

        $timeout(function () {
            self.locked = false;
        }, sample.remaining);
    };

    this.changeVolume = function (volume) {
        instrumentService.changeVolume(self.sample, volume);
    };

});