/*globals angular */
angular.module('lolApi').service('eventSerializerService', function (jsonUtilService, noteService) {
    'use strict';

    this.getEvents = function (matchJson) {
        var i,
            output = [],
            frames = matchJson.timeline.frames;

        for (i = 1; i < frames.length; i += 1) {
            output = output.concat(frames[i].events);
        }

        return output;
    };

    this.getPlayerData = function (matchJson) {
        var i,
            output = [],
            frames = matchJson.timeline.frames;

        for (i = 0; i < frames.length; i += 1) {
            output.push(frames[i].participantFrames);
        }

        return output;
    };

    this.getPlayerDataArray = function (matchJson) {
        var i, j, oneFrameplayerData,
            output = [],
            frames = matchJson.timeline.frames;

        for (i = 0; i < frames.length; i += 1) {
            oneFrameplayerData = jsonUtilService.convertToArray(frames[i].participantFrames);
            for (j = 0; j < oneFrameplayerData.length; j += 1) {
                output.push(oneFrameplayerData[j]);
            }
        }

        return output;
    };

    this.getNotesFromPlayerDataArray = function (playerDataArray) {
        var i, currentPosition, currentNote,
            output = [];
        for (i = 0; i < playerDataArray.length; i += 1) {
            currentPosition = playerDataArray[i].position;
            if (!angular.isDefined(currentPosition)) {
                continue;   
            }
            currentNote = noteService.getNoteFromXY(currentPosition.x, currentPosition.y);
            output.push(currentNote);
        }
        return output;
    };
});