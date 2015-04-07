/*globals angular */
angular.module('lolApi').service('trafficInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/traffic/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/12.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/13.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/14.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/15.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/16.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/17.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/18.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/19.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/20.wav'));
    this.sample.push(ngAudio.load('assets/sounds/traffic/21.wav'));

    this.getRandomSample = function () {
        var index = Math.floor(Math.random() * 20);
        return self.sample[index];
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
        instrumentService.changeVolume(volume);
    };
});