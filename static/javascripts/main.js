'use strict';

angular
    .module('thinkster.authentication')
    .controller('MainController', function($scope, Authentication) {

        $scope.authentication = Authentication;

        $scope.user = Authentication.getAuthenticatedAccount();

    });
