/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, birdBgIntrumentService, soundFxIntrumentService) {
    'use strict';

    function addToQueue(event) {
        $timeout(function () {
            /*if (soundFxIntrumentService.kick.remaining > 0) {
                console.log(soundFxIntrumentService.kick.remaining);
                soundFxIntrumentService.kick.progress = 0;
                soundFxIntrumentService.kick.play();
            } else {
                soundFxIntrumentService.kick.play();
            }
            //soundFxIntrumentService.kick.stop();*/
            var index = Math.floor(Math.random() * 43) + 1;
            birdBgIntrumentService.songs[index].play();
            console.log('playing ' + event.eventType + ' at: ' + event.timestamp);
        }, event.timestamp / 5);
    }

    this.play = function (events) {
        var i;
        for (i = 0; i < events.length; i += 1) {
            addToQueue(events[i]);
        }
        soundFxIntrumentService.wind.play();
        soundFxIntrumentService.wind.loop = true;
        soundFxIntrumentService.wind.volume = 0.3;
    };
});