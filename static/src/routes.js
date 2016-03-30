'use strict';

angular
    .module('thinkster')
    .config(function($stateProvider, $urlRouterProvider) {
        
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/home");
        
        // Now set up the states
        $stateProvider
            .state('app', {
                abstract: true,
                url: '',
                controller: 'MainController',
                templateUrl:'/static/src/main.html'
            })
            .state('app.register', {
                url: '/register',
                controller: 'RegisterController',
                templateUrl: '/static/src/authentication/controllers/register.html'
            })
            .state('app.login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: '/static/src/authentication/controllers/login.html'
            })
            .state('app.home', {
                url: '/home',
                controller: 'MessageBoardController',
                templateUrl: '/static/src/message-board/controllers/message-board.html'
            });
    });
