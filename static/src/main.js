'use strict';

angular
    .module('thinkster')
    .controller('MainController', function($scope, Authentication) {

        $scope.authentication = Authentication;

        $scope.user = Authentication.getAuthenticatedAccount();

    });
