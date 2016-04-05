'use strict';

angular
    .module('thinkster.authentication')
    .factory('Authentication', function($cookies, $http, $state, $log) {

        function register(account) {
            return $http.post('/api/v1/accounts/', {
                username: account.username,
                password: account.password,
                email: account.email
            }).then(function(data) {
                $log.info('Account registration succeeded!');
                Authentication.login(account);
            }, function(error) {
                $log.error(error);
            });
        }

        function login(user) {
            return $http.post('/api/v1/auth/login/', {
                email: user.email,
                password: user.password
            }).then(function(data) {
                $log.info('Login succeeded!');
                Authentication.setAuthenticatedAccount(data.data);
                $state.go('app.home', {}, { reload: true });
            }, function(error) {
                $log.error(error);
            });
        }

        function logout() {
            return $http.post('/api/v1/auth/logout/').then(function() {
                Authentication.unauthenticate();
                $state.go('app.home', { reload: true });
            }, function(error) {
                $log.error(error);
            });
        }

        function getAuthenticatedAccount() {
            return $cookies.getObject('authenticatedAccount');
        }

        function setAuthenticatedAccount(account) {
            $cookies.putObject('authenticatedAccount', account);
        }

        function isAuthenticated() {
            return !!getAuthenticatedAccount();
        }

        function unauthenticate() {
            $cookies.remove('authenticatedAccount');
        }

        var Authentication = {
            login: login,
            logout: logout,
            register: register,
            getAuthenticatedAccount: getAuthenticatedAccount,
            isAuthenticated: isAuthenticated,
            unauthenticate: unauthenticate,
            setAuthenticatedAccount: setAuthenticatedAccount
        };

        return Authentication;
    });
