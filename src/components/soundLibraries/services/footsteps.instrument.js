/*globals angular */
angular.module('lolApi').service('footstepsInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/footsteps/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/7.mp3'));

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