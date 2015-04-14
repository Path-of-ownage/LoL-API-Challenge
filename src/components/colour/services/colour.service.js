/*globals angular */
angular.module('lolApi').service('colourService', function () {
    'use strict';

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function getValueBetween(value1, value2, range) {
        var diff = value2 - value1,
            offset = diff * range;
        return Math.floor(value1 + offset);
    }

    this.getColour = function (value) {
        var cityR = 38,
            cityG = 39,
            cityB = 60,
            natureR = 70,
            natureG = 63,
            natureB = 9;

        return rgbToHex(getValueBetween(cityR, natureR, value), getValueBetween(cityG, natureG, value), getValueBetween(cityB, natureB, value));
        //return 'rgb(' + getValueBetween(cityR, natureR, value) + ',' + getValueBetween(cityG, natureG, value) + ',' + getValueBetween(cityB, natureB, value) + ')';
    };
});