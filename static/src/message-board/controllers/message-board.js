'use strict';

angular
    .module('thinkster.messageBoard')
    .controller('MessageBoardController', function($scope, Authentication, Posts, Snackbar) {

        $scope.isAuthenticated = Authentication.isAuthenticated();

        $scope.posts = [];

        (function activate() {
            Posts.all().then(function(data) {
                $scope.posts = data.data;
            }, function(data) {
                Snackbar.error(data.error);
            });

            $scope.$on('post.created', function(event, post) {
                $scope.posts.unshift(post);
            });

            $scope.$on('post.created.error', function() {
                $scope.posts.shift();
            });
        })();


    });
