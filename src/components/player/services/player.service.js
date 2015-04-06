/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, birdBgInstrumentService, soundFxInstrumentService, harpInstrumentService, chimesInstrumentService, birdInstrumentService) {
    'use strict';

    function getInstrument(eventName) {
        switch (eventName) {
        case 'ITEM_PURCHASED':
            return chimesInstrumentService;
        case 'ITEM_UNDO':
            return harpInstrumentService;
        case 'WARD_PLACED':
        case 'WARD_KILL':
        case 'ITEM_DESTROYED':
        case 'SKILL_LEVEL_UP':
            return birdBgInstrumentService;
        case 'BUILDING_KILL':
        case 'ITEM_SOLD':
        case 'ELITE_MONSTER_KILL':
        case 'CHAMPION_KILL':
            return birdInstrumentService;
        default:
            return; // birdBgInstrumentService;
        }
    }

    function addToQueue(event) {
        $timeout(function () {
            var instrument = getInstrument(event.eventType);
            if (angular.isDefined(instrument)) {
                instrument.playRandomSample();
            }
            console.log('playing ' + event.eventType + ' at: ' + event.timestamp);
        }, event.timestamp / 5);
    }

    this.play = function (events) {
        var i;
        for (i = 0; i < events.length; i += 1) {
            addToQueue(events[i]);
        }
        //soundFxInstrumentService.wind.play();
        soundFxInstrumentService.wind.loop = true;
        soundFxInstrumentService.wind.volume = 0.3;
    };
});