/*globals angular */
angular.module('lolApi').service('birdBgInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/birds/soft/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/12.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/13.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/14.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/15.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/16.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/17.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/18.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/19.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/20.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/21.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/22.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/23.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/24.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/25.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/26.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/27.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/28.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/29.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/30.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/31.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/32.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/33.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/34.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/35.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/36.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/37.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/38.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/39.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/40.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/41.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/42.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/43.wav'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/44.wav'));

    this.getRandomSample = function () {
        var index = Math.floor(Math.random() * 43);
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
        instrumentService.changeVolume(self.sample, volume);
    };

});