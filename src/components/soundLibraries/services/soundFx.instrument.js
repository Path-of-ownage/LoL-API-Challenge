/*globals angular */
angular.module('lolApi').service('soundFxIntrumentService', function (ngAudio) {
    'use strict';

    this.kick = ngAudio.load("assets/sounds/cajon.wav");
});