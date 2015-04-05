/*globals angular */
angular.module('lolApi').service('noteProcessorService', function () {
    'use strict';

    function calculateNoteCoeff(bpm) {
        var secondsPerBeat = 60 / bpm;
        return 4 / secondsPerBeat;
    }

    this.extractNotes = function (totalNotes, pattern) {
        var barNotes;
        barNotes = totalNotes.splice(0, pattern.length);

        console.log(pattern.length);
        console.log(barNotes.length);
    };

    this.formatNotes = function (notes, pattern, bpm) {
        var i, currentNote, coeff,
            output = [];
        
        coeff = calculateNoteCoeff(bpm);
        for (i = 0; i < notes.length; i += 1) {
            currentNote = {
                note: notes[i],
                length: pattern[i].value * coeff
            };
            output.push(currentNote);
        }
        return output;
    };
});