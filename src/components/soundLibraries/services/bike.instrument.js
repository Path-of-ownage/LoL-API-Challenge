/*globals angular */
angular.module('lolApi').service('bikeInstrumentService', function (ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/bike/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/bike/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/bike/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/bike/4.mp3'));

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