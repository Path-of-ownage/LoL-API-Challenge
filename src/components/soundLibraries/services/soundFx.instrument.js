/*globals angular */
angular.module('lolApi').service('soundFxInstrumentService', function (ngAudio, instrumentService) {
    'use strict';

    this.wind = ngAudio.load('assets/sounds/fx/wind.mp3');
    this.cityWinds = ngAudio.load('assets/sounds/fx/citywinds.mp3');
    this.river = ngAudio.load('assets/sounds/fx/river.mp3');
    this.hubbub = ngAudio.load('assets/sounds/fx/hubbub.mp3');

    this.changeVolume = function (volume) {
        //instrumentService.changeVolume(self.sample, volume);
    };
});