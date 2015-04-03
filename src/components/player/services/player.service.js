/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, soundFxIntrumentService) {
    'use strict';

    function addToQueue(event) {
        $timeout(function () {
            soundFxIntrumentService.sound.play();
            console.log('playing ' + event.eventType + ' at: ' + event.timestamp);
        }, event.timestamp);
    }

    this.play = function (events) {
        var i;
        for (i = 0; i < events.length; i += 1) {
            addToQueue(events[i]);
        }
    };
});