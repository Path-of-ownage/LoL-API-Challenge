/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, birdBgInstrumentService, soundFxInstrumentService, harpInstrumentService, chimesInstrumentService, birdInstrumentService, eventCounterService, trafficInstrumentService, leavesInstrumentService, constructionInstrumentService, bellsInstrumentService, bikeInstrumentService, cricketBgInstrumentService, cricketInstrumentService, frogsInstrumentService, thunderInstrumentService, instrumentService, footstepsInstrumentService) {
    'use strict';

    var self = this;
    var playCallback;

    var cityWindVolumeCurve = instrumentService.createVolumeCurveFunction(20, 65);
    var natureWindVolumeCurve = instrumentService.createVolumeCurveFunction(80, 35, 0.5);
    var hubbubVolumeCurve = instrumentService.createVolumeCurveFunction(0, 20, 0.5);
    var riverVolumeCurve = instrumentService.createVolumeCurveFunction(100, 80, 0.4);

    var trafficVolumeCurve = instrumentService.createVolumeCurveFunction(20, 60, 0.7);
    var birdBgVolumeCurve = instrumentService.createVolumeCurveFunction(70, 35);
    var birdVolumeCurve = instrumentService.createVolumeCurveFunction(90, 60, 0.8);
    var constructionVolumeCurve = instrumentService.createVolumeCurveFunction(10, 40, 0.6);
    var bellsVolumeCurve = instrumentService.createVolumeCurveFunction(0, 40, 0.5);
    var bikeVolumeCurve = instrumentService.createVolumeCurveFunction(10, 50, 0.3);
    var frogVolumeCurve = instrumentService.createVolumeCurveFunction(90, 40, 0.8);
    var cricketVolumeCurve = instrumentService.createVolumeCurveFunction(80, 50);
    var cricketBgVolumeCurve = instrumentService.createVolumeCurveFunction(70, 40, 0.8);
    var footstepsVolumeCurve = instrumentService.createVolumeCurveFunction(20, 40, 0.3);

    soundFxInstrumentService.wind.loop = true;
    soundFxInstrumentService.cityWinds.loop = true;
    soundFxInstrumentService.hubbub.loop = true;
    soundFxInstrumentService.river.loop = true;

    function getInstrument(eventName) {
        var instrumentArray = [];
        switch (eventName) {
        case 'ITEM_PURCHASED': //265
            //instrumentArray.push(chimesInstrumentService);
            instrumentArray.push(cricketBgInstrumentService);
            instrumentArray.push(trafficInstrumentService);
            break;
        case 'ITEM_UNDO': //20
            //instrumentArray.push(harpInstrumentService);
            break;
        case 'WARD_PLACED': //72
            instrumentArray.push(bikeInstrumentService);
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
        case 'BUILDING_KILL': //18
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

    this.play = function (events) {
        var i;
        for (i = 0; i < events.length; i += 1) {
            addToQueue(events[i]);
        }
        soundFxInstrumentService.wind.play();
        soundFxInstrumentService.cityWinds.play();
        soundFxInstrumentService.hubbub.play();
        soundFxInstrumentService.river.play();

        //console.log(eventCounterService.getCounts(events));
        self.changeVolume(50);
    };

    this.changeVolume = function (volume) {
        birdBgInstrumentService.changeVolume(birdBgVolumeCurve(volume));
        birdInstrumentService.changeVolume(birdVolumeCurve(volume));
        //chimesInstrumentService.changeVolume(volume);constructionVolumeCurve
        constructionInstrumentService.changeVolume(constructionVolumeCurve(volume));
        trafficInstrumentService.changeVolume(trafficVolumeCurve(volume));
        bellsInstrumentService.changeVolume(bellsVolumeCurve(volume));
        bikeInstrumentService.changeVolume(bikeVolumeCurve(volume));
        frogsInstrumentService.changeVolume(frogVolumeCurve(volume));
        cricketInstrumentService.changeVolume(cricketVolumeCurve(volume));
        cricketBgInstrumentService.changeVolume(cricketBgVolumeCurve(volume));
        footstepsInstrumentService.changeVolume(footstepsVolumeCurve(volume));
        thunderInstrumentService.changeVolume(volume / 100);


        soundFxInstrumentService.wind.volume = natureWindVolumeCurve(volume);
        soundFxInstrumentService.cityWinds.volume = cityWindVolumeCurve(volume);
        soundFxInstrumentService.hubbub.volume = hubbubVolumeCurve(volume);
        soundFxInstrumentService.river.volume = riverVolumeCurve(volume);

        soundFxInstrumentService.wind.play();
        soundFxInstrumentService.cityWinds.play();
        soundFxInstrumentService.hubbub.play();
        soundFxInstrumentService.river.play();
        //console.log("nature:" + soundFxInstrumentService.wind.volume + ", city:" + soundFxInstrumentService.cityWinds.volume);
    };

    this.setPlayCallback = function (callback) {
        playCallback = callback;
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
});