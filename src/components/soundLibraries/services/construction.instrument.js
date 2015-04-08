/*globals angular */
angular.module('lolApi').service('constructionInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/construction/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/12.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/13.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/14.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/15.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/16.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/17.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/18.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/19.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/construction/20.mp3'));

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