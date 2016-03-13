'use strict';

angular
    .module('thinkster.authentication')
    .factory('Authentication', function($cookies, $http) {

        function register(account) {
            return $http.post('/api/v1/accounts/', {
                username: account.username,
                password: account.password,
                email: account.email
            });
        }

        var Authentication = {
            register: register
        };

        return Authentication;
    });
