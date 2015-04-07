/*globals angular */
angular.module('lolApi').service('footstepsInstrumentService', function ($timeout, ngAudio) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/footsteps/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/12.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/13.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/14.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/15.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/16.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/17.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/18.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/19.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/20.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/21.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/22.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/23.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/24.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/25.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/26.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/27.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/28.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/29.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/30.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/31.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/32.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/33.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/34.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/35.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/36.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/37.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/38.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/39.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/40.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/41.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/42.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/43.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/44.wav'));
    this.sample.push(ngAudio.load('assets/sounds/footsteps/45.wav'));

    this.getRandomSample = function () {
        var index = Math.floor(Math.random() * 44);
        return self.sample[index];
    };

    this.playRandomSample = function (cap) {
        var sample;
        sample = self.getRandomSample();
        sample.play();
    };

});