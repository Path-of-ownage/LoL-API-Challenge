/*globals angular */
angular.module('lolApi').service('constructionInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/construction/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/12.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/13.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/14.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/15.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/16.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/17.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/18.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/19.wav'));
    this.sample.push(ngAudio.load('assets/sounds/construction/20.wav'));

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