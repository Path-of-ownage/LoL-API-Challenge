/*globals angular */
angular.module('lolApi').service('harpInstrumentService', function (ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/harp/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/harp/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/harp/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/harp/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/harp/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/harp/6.wav'));

    this.getRandomSample = function () {
        return instrumentService.getRandomSample(self.sample);
    };

    this.playRandomSample = function (cap) {
        var sample;
        sample = self.getRandomSample();
        sample.play();
    };

    this.changeVolume = function (volume) {
        instrumentService.changeVolume(self.sample, volume);
    };
});