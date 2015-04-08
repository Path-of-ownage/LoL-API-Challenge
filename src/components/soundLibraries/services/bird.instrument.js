/*globals angular */
angular.module('lolApi').service('birdInstrumentService', function ($timeout, instrumentService, ngAudio) {
    'use strict';
    var self = this,
        locked = false;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/birds/loud/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/12.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/13.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/14.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/15.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/16.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/17.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/18.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/19.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/20.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/21.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/22.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/23.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/24.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/25.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/26.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/27.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/28.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/29.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/birds/loud/30.mp3'));

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