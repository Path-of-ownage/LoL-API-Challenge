/*globals angular */
angular.module('lolApi').service('playerService', function ($timeout, birdBgInstrumentService, soundFxInstrumentService, harpInstrumentService, chimesInstrumentService, birdInstrumentService, eventCounterService, trafficInstrumentService, leavesInstrumentService, constructionInstrumentService, bellsInstrumentService, bikeInstrumentService, cricketBgInstrumentService, cricketInstrumentService, frogsInstrumentService, thunderInstrumentService, instrumentService) {
    'use strict';

    var self = this;
    var playCallback;

    var cityWindVolumeCurve = instrumentService.createVolumeCurveFunction(0, 55);
    var natureWindVolumeCurve = instrumentService.createVolumeCurveFunction(100, 45, 0.5);
    var trafficVolumeCurve = instrumentService.createVolumeCurveFunction(0, 50, 0.7);
    var birdBgVolumeCurve = instrumentService.createVolumeCurveFunction(100, 45);
    var birdVolumeCurve = instrumentService.createVolumeCurveFunction(100, 70, 0.8);
    var constructionVolumeCurve = instrumentService.createVolumeCurveFunction(0, 40, 0.6);
    var bellsVolumeCurve = instrumentService.createVolumeCurveFunction(0, 40, 0.5);

    function getInstrument(eventName) {
        var instrumentArray = [];
        switch (eventName) {
        case 'ITEM_PURCHASED': //265
            //instrumentArray.push(chimesInstrumentService);
            instrumentArray.push(trafficInstrumentService);
            break;
        case 'ITEM_UNDO': //20
            instrumentArray.push(harpInstrumentService);
            break;
        case 'WARD_PLACED': //72
        case 'WARD_KILL': //2
        case 'ITEM_DESTROYED': //180
            instrumentArray.push(leavesInstrumentService);
            break;
        case 'SKILL_LEVEL_UP': //180
            instrumentArray.push(birdBgInstrumentService);
            instrumentArray.push(constructionInstrumentService);
            break;
        case 'BUILDING_KILL': //18
        case 'ITEM_SOLD': //20
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
        soundFxInstrumentService.wind.loop = true;
        //soundFxInstrumentService.wind.volume = 0.3;

        soundFxInstrumentService.cityWinds.play();
        soundFxInstrumentService.cityWinds.loop = true;
        console.log(eventCounterService.getCounts(events));
        self.changeVolume(50);
    };

    this.changeVolume = function (volume) {
        birdBgInstrumentService.changeVolume(birdBgVolumeCurve(volume));
        birdInstrumentService.changeVolume(birdVolumeCurve(volume));
        //chimesInstrumentService.changeVolume(volume);constructionVolumeCurve
        constructionInstrumentService.changeVolume(constructionVolumeCurve(volume));
        trafficInstrumentService.changeVolume(trafficVolumeCurve(volume));
        bellsInstrumentService.changeVolume(bellsVolumeCurve(volume));

        soundFxInstrumentService.wind.volume = natureWindVolumeCurve(volume);
        soundFxInstrumentService.cityWinds.volume = cityWindVolumeCurve(volume);
        //console.log("nature:" + soundFxInstrumentService.wind.volume + ", city:" + soundFxInstrumentService.cityWinds.volume);
        soundFxInstrumentService.wind.play();
        soundFxInstrumentService.cityWinds.play();
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

        soundFxInstrumentService.wind.volume = 0;
        soundFxInstrumentService.cityWinds.volume = 0;
    }
});