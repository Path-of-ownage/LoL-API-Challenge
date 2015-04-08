/*globals angular */
angular.module('lolApi').service('footstepsInstrumentService', function ($timeout, ngAudio, instrumentService) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/footsteps/1.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/2.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/3.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/4.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/5.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/6.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/7.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/8.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/9.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/10.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/11.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/12.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/13.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/14.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/15.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/16.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/17.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/18.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/19.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/20.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/21.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/22.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/23.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/24.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/25.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/26.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/27.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/28.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/29.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/30.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/31.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/32.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/33.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/34.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/35.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/36.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/37.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/38.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/39.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/40.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/41.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/42.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/43.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/44.mp3'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/45.mp3'));

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