/*globals angular */
angular.module('lolApi').service('birdInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/birds/loud/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/12.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/13.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/14.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/15.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/16.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/17.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/18.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/19.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/20.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/21.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/22.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/23.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/24.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/25.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/26.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/27.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/28.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/29.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/30.wav'));

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