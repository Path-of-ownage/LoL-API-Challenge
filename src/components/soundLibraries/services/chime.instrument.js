/*globals angular */
angular.module('lolApi').service('chimesInstrumentService', function (ngAudio) {
    'use strict';
    var self = this;

    this.sample = [];

    this.sample.push(ngAudio.load('assets/sounds/chimes/1.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/2.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/3.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/4.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/5.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/6.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/7.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/8.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/9.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/10.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/11.wav'));
    this.sample.push(ngAudio.load('assets/sounds/chimes/12.wav'));
    
    this.getRandomSample = function () {
        var index = Math.floor(Math.random() * 11);
        return self.sample[index];
    };

});