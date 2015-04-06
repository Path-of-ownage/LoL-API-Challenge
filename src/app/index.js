'use strict';

angular.module('lolApi', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'ngAudio', 'pascalprecht.translate'])
    .config(function ($stateProvider, $urlRouterProvider) {
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