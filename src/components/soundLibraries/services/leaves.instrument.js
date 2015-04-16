/*globals angular */
angular.module('lolApi').service('leavesInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/leaves/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/12.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/13.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/14.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/15.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/16.mp3'));

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