/*globals angular */
angular.module('lolApi').service('soundFxIntrumentService', function (ngAudio) {
    'use strict';

    this.kick = ngAudio.load("assets/sounds/cajon.wav");
    this.wind = ngAudio.load("assets/sounds/fx/wind.wav");

});