/*globals angular */
angular.module('lolApi').service('harpInstrumentService', function (ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/harp/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/harp/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/harp/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/harp/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/harp/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/harp/6.mp3'));

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