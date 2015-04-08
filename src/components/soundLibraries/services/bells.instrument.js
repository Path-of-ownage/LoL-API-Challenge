/*globals angular */
angular.module('lolApi').service('bellsInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/bells/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/bells/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/bells/3.wav'));

    this.getRandomSample = function () {
        var index = Math.floor(Math.random() * self.sample.length - 1);
        return self.sample[index];
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