'use strict';

angular
    .module('thinkster.messageBoard')
    .factory('Posts', function($http) {

        function all() {
            return $http.get('/api/v1/posts/');
        }

        function get(username) {
            return $http.get('/api/v1/accounts/' + username + '/posts/');
        }

        function create(content) {
            return $http.post('/api/v1/posts/', {
                content: content
            });
        }

        var Posts = {
            all: all,
            get: get,
            create: create
        };

        return Posts;
    });
