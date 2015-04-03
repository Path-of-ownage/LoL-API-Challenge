/*globals angular */
angular.module('lolApi').service('soundFxIntrumentService', function (ngAudio) {
    'use strict';

    this.sound = ngAudio.load("assets/sounds/cello.wav");
});