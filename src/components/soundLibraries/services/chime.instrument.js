/*globals angular */
angular.module('lolApi').service('chimesInstrumentService', function (ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/chimes/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/12.mp3'));

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