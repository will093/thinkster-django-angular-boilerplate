'use strict';

angular
    .module('thinkster.authentication')
    .controller('RegisterController', function($scope, $location, Authentication) {

        $scope.account = {
            email : '',
            username : '',
            password : ''
        };

        $scope.register = function() {
            Authentication.register($scope.account);
        };
    });
