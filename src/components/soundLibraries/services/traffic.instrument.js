/*globals angular */
angular.module('lolApi').service('trafficInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/traffic/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/12.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/13.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/14.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/15.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/16.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/17.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/18.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/19.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/20.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/21.mp3'));

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