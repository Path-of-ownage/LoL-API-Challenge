/*globals angular */
angular.module('lolApi').service('frogsInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/frogs/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/frogs/8.mp3'));

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