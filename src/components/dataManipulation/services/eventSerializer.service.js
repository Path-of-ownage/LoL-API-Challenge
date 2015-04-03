/*globals angular */
angular.module('lolApi').service('eventSerializerService', function () {
    'use strict';

    this.getEvents = function (matchJson) {
        var output = [],
            frames = matchJson.timeline.frames;

        for (var i = 1; i < frames.length; i += 1) {
            output = output.concat(frames[i].events);
        }

        return output;
    };

    this.getPlayerData = function (matchJson) {
        var output = [],
            frames = matchJson.timeline.frames;
        
        for (var i = 0; i < frames.length; i += 1) {
            output.push(frames[i].participantFrames);
        }

        return output;
    }
});