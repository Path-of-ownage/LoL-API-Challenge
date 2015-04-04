/*globals angular */
angular.module('lolApi').service('noteService', function () {
    'use strict';

    this.notes = [
        {
            "pattern": [
                {
                    "value": 0.5,
                    "type": "rest"
          },
                {
                    "value": 0.5,
                    "type": "note"
          }
        ]
      },
        {
            "pattern": [
                {
                    "value": 0.25,
                    "type": "note"
          }
        ]
      }
    ];

    this.getNoteFromXY = function (x, y) {
        var total = x + y;
        return total % 8;
    }
});