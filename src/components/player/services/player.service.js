/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, birdBgInstrumentService, soundFxInstrumentService, harpInstrumentService, chimesInstrumentService, birdInstrumentService, eventCounterService, trafficInstrumentService, leavesInstrumentService) {
    'use strict';

    function getInstrument(eventName) {
        var instrumentArray = [];
        switch (eventName) {
        case 'ITEM_PURCHASED':
            //instrumentArray.push(chimesInstrumentService);
            instrumentArray.push(trafficInstrumentService);
            break;
        case 'ITEM_UNDO':
            instrumentArray.push(harpInstrumentService);
            break;
        case 'WARD_PLACED':
        case 'WARD_KILL':
        case 'ITEM_DESTROYED':
            instrumentArray.push(leavesInstrumentService);
            break;
        case 'SKILL_LEVEL_UP':
            instrumentArray.push(birdBgInstrumentService);
            instrumentArray.push(trafficInstrumentService);
            break;
        case 'BUILDING_KILL':
        case 'ITEM_SOLD':
        case 'ELITE_MONSTER_KILL':
        case 'CHAMPION_KILL':
            instrumentArray.push(birdInstrumentService);
            break;
        default:
            instrumentArray.push(birdBgInstrumentService);
            break;
        }
        return instrumentArray;
    }

    function playInstruments(instruments) {
        var i;
        for (i = 0; i < instruments.length; i += 1) {
            instruments[i].playRandomSample();
        }
    }

    function addToQueue(event) {
        $timeout(function () {
            var instruments = getInstrument(event.eventType);
            playInstruments(instruments);

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
        console.log(eventCounterService.getCounts(events));
    };

    this.changeVolume = function (volume) {
        birdBgInstrumentService.changeVolume(volume);
        birdInstrumentService.changeVolume(volume);
        chimesInstrumentService.changeVolume(volume);
        
        trafficInstrumentService.changeVolume(1 - volume);
    };
});