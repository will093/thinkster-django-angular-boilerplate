'use strict';

angular
    .module('thinkster.authentication')
    .controller('LoginController', function($scope, Authentication, $state) {

        $scope.user = {
            email: '',
            password: ''
        };

        $scope.login = function() {
            Authentication.login($scope.user);
        };

        // If the user is authenticated, they should not be here.
        (function activate() {
            if (Authentication.isAuthenticated()) {
                $state.go('app.home');
            }
        })();
    });
