/*globals angular */
angular.module('lolApi').service('leavesInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/leaves/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/12.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/13.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/14.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/15.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/16.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/17.wav'));
    this.sample.push(ngAudio.load('assets/sounds/leaves/18.wav'));

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