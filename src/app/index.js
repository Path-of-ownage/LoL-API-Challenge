/*globals angular */
angular.module('lolApi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngAudio', 'pascalprecht.translate']);


angular.module('lolApi').config(function ($stateProvider, $urlRouterProvider) {
    'use strict';

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
    });

    $stateProvider.state('sandbox', {
        url: '/sandbox',
        templateUrl: 'app/sandbox/sandbox.html',
        controller: 'sandboxController'
    });

    $urlRouterProvider.otherwise('/');
});