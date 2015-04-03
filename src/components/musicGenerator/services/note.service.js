/*globals angular */
angular.module('lolApi').service('noteService', function () {
    'use strict';

    this.getNoteFromXY = function (x, y) {
        var total = x + y;
        return total % 8;
    }
});