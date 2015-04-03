/*globals angular */
angular.module('lolApi').service('soundPlayerService', function (soundFxIntrumentService) {
    'use strict';

    this.playSound = function () {
        soundFxIntrumentService.kick.play();
    }
});