/*globals angular */
angular.module('lolApi').service('cricketBgInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/crickets/soft/8.mp3'));

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