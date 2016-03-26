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
                templateUrl:'/static/templates/main.html'

            })
            .state('app.register', {
                url: '/register',
                controller: 'RegisterController',
                templateUrl: '/static/templates/authentication/register.html'
            })
            .state('app.login', {
                url: '/login',
                controller: 'LoginController',
                templateUrl: '/static/templates/authentication/login.html'
            })
            .state('app.home', {
                url: '/home',
            });
    });
