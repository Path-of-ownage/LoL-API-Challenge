/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, birdBgInstrumentService, soundFxInstrumentService, harpInstrumentService, chimesInstrumentService, birdInstrumentService, eventCounterService, trafficInstrumentService, leavesInstrumentService, constructionInstrumentService, bellsInstrumentService, bikeInstrumentService, cricketBgInstrumentService, cricketInstrumentService, frogsInstrumentService, thunderInstrumentService, instrumentService, footstepsInstrumentService) {
    'use strict';

    var self = this;
    var playCallback;
    var endPlayCallback;

    var cityWindVolumeCurve = instrumentService.createVolumeCurveFunction(20, 65);
    var natureWindVolumeCurve = instrumentService.createVolumeCurveFunction(80, 35, 0.3);
    var hubbubVolumeCurve = instrumentService.createVolumeCurveFunction(0, 20, 0.5);
    var riverVolumeCurve = instrumentService.createVolumeCurveFunction(100, 80, 0.4);

    var trafficVolumeCurve = instrumentService.createVolumeCurveFunction(20, 60, 0.7);
    var birdBgVolumeCurve = instrumentService.createVolumeCurveFunction(70, 35);
    var birdVolumeCurve = instrumentService.createVolumeCurveFunction(90, 60, 0.8);
    var constructionVolumeCurve = instrumentService.createVolumeCurveFunction(10, 40, 0.6);
    var bellsVolumeCurve = instrumentService.createVolumeCurveFunction(0, 40, 0.5);
    var bikeVolumeCurve = instrumentService.createVolumeCurveFunction(10, 50, 0.1);
    var frogVolumeCurve = instrumentService.createVolumeCurveFunction(90, 40, 0.8);
    var cricketVolumeCurve = instrumentService.createVolumeCurveFunction(80, 50);
    var cricketBgVolumeCurve = instrumentService.createVolumeCurveFunction(70, 40, 0.8);
    var footstepsVolumeCurve = instrumentService.createVolumeCurveFunction(20, 50, 0.5);
    var chimesVolumeCurve = instrumentService.createVolumeCurveFunction(100, 60, 0.3);

    soundFxInstrumentService.wind.loop = true;
    soundFxInstrumentService.cityWinds.loop = true;
    soundFxInstrumentService.hubbub.loop = true;
    soundFxInstrumentService.river.loop = true;
    thunderInstrumentService.changeVolume(0.5);

    function getInstrument(eventName) {
        var instrumentArray = [];
        switch (eventName) {
        case 'ITEM_PURCHASED': //265
            instrumentArray.push(cricketBgInstrumentService);
            instrumentArray.push(trafficInstrumentService);
            break;
        case 'ITEM_UNDO': //20
        case 'BUILDING_KILL': //18
            instrumentArray.push(chimesInstrumentService);
            instrumentArray.push(bikeInstrumentService);
            break;
        case 'WARD_PLACED': //72
            instrumentArray.push(footstepsInstrumentService);
            instrumentArray.push(frogsInstrumentService);
            break;
        case 'WARD_KILL': //2
            instrumentArray.push(thunderInstrumentService);
            break;
        case 'ITEM_DESTROYED': //180
            instrumentArray.push(leavesInstrumentService);
            break;
        case 'SKILL_LEVEL_UP': //180
            instrumentArray.push(birdBgInstrumentService);
            instrumentArray.push(constructionInstrumentService);
            break;
        case 'ITEM_SOLD': //20
            instrumentArray.push(cricketInstrumentService);
            break;
        case 'ELITE_MONSTER_KILL': //12
            instrumentArray.push(bellsInstrumentService);
            break;
        case 'CHAMPION_KILL': //106
            instrumentArray.push(birdInstrumentService);
            instrumentArray.push(trafficInstrumentService);
            break;
        default:
            instrumentArray.push(birdBgInstrumentService);
            break;
        }
        return instrumentArray;
        //instrumentArray.push(harpInstrumentService);
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

            if (angular.isDefined(playCallback)) {
                playCallback(event);
            }
        }, event.timestamp / 5);
    }

    function findNewSong(timestamp) {
        $timeout(function () {
            console.log('Current match ended, finding new match');
            endPlayCallback();
        }, timestamp / 5);
    }

    this.play = function (events, volume) {
        var i;
        for (i = 0; i < events.length; i += 1) {
            addToQueue(events[i]);
        }

        findNewSong(events[i - 1].timestamp);

        self.replayBackground();

        //console.log(eventCounterService.getCounts(events));
        self.changeVolume(volume);
    };

    this.changeVolume = function (volume) {
        birdBgInstrumentService.changeVolume(birdBgVolumeCurve(volume));
        birdInstrumentService.changeVolume(birdVolumeCurve(volume));
        chimesInstrumentService.changeVolume(chimesVolumeCurve(volume));
        constructionInstrumentService.changeVolume(constructionVolumeCurve(volume));
        trafficInstrumentService.changeVolume(trafficVolumeCurve(volume));
        bellsInstrumentService.changeVolume(bellsVolumeCurve(volume));
        bikeInstrumentService.changeVolume(bikeVolumeCurve(volume));
        frogsInstrumentService.changeVolume(frogVolumeCurve(volume));
        cricketInstrumentService.changeVolume(cricketVolumeCurve(volume));
        cricketBgInstrumentService.changeVolume(cricketBgVolumeCurve(volume));
        footstepsInstrumentService.changeVolume(footstepsVolumeCurve(volume));

        soundFxInstrumentService.wind.volume = natureWindVolumeCurve(volume);
        soundFxInstrumentService.cityWinds.volume = cityWindVolumeCurve(volume);
        soundFxInstrumentService.hubbub.volume = hubbubVolumeCurve(volume);
        soundFxInstrumentService.river.volume = riverVolumeCurve(volume);

        self.replayBackground();
        //console.log("nature:" + soundFxInstrumentService.wind.volume + ", city:" + soundFxInstrumentService.cityWinds.volume);
    };

    this.setPlayCallback = function (callback) {
        playCallback = callback;
    };

    this.setEndPlayCallback = function (callback) {
        endPlayCallback = callback;
    };

    this.mute = function () {
        birdBgInstrumentService.changeVolume(0);
        birdInstrumentService.changeVolume(0);
        chimesInstrumentService.changeVolume(0);
        constructionInstrumentService.changeVolume(0);
        trafficInstrumentService.changeVolume(0);
        bellsInstrumentService.changeVolume(0);
        leavesInstrumentService.changeVolume(0);
        bikeInstrumentService.changeVolume(0);
        frogsInstrumentService.changeVolume(0);
        cricketInstrumentService.changeVolume(0);
        cricketBgInstrumentService.changeVolume(0);
        footstepsInstrumentService.changeVolume(0);
        thunderInstrumentService.changeVolume(0);

        soundFxInstrumentService.wind.volume = 0;
        soundFxInstrumentService.cityWinds.volume = 0;
        soundFxInstrumentService.hubbub.volume = 0;
        soundFxInstrumentService.river.volume = 0;
    };
    
    this.replayBackground = function () {
        soundFxInstrumentService.wind.play();
        soundFxInstrumentService.cityWinds.play();
        soundFxInstrumentService.hubbub.play();
        soundFxInstrumentService.river.play();
    };
});