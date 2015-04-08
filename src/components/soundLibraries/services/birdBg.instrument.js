/*globals angular */
angular.module('lolApi').service('birdBgInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/birds/soft/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/12.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/13.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/14.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/15.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/16.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/17.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/18.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/19.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/20.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/21.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/22.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/23.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/24.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/25.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/26.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/27.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/28.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/29.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/30.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/31.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/32.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/33.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/34.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/35.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/36.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/37.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/38.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/39.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/40.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/41.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/42.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/43.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/soft/44.mp3'));

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