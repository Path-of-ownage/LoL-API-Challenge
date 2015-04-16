/*globals angular */
angular.module('lolApi').service('mathUtilService', function () {
    'use strict';

    this.getRandomObjectFromArray = function (array) {
        var index = Math.floor(Math.random() * (array.length - 1));
        return array[index];
    };
});