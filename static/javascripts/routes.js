angular
    .module('thinkster')
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/register");
        //
        // Now set up the states
        $stateProvider
            .state('register', {
                url: "/register",
                controller: 'RegisterController',
                templateUrl: '/static/templates/authentication/register.html'
            })
            .state('login', {
                url: "/login",
            });
    });
