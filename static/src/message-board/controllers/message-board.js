'use strict';

angular
    .module('thinkster.messageBoard')
    .controller('MessageBoardController', function($scope, Authentication, Posts, Snackbar, $uibModal) {

        $scope.user = {
            isAuthenticated: Authentication.isAuthenticated()
        };

        $scope.posts = [];

        $scope.openAddPostModal = function() {
            var modalInstance = $uibModal.open({
                templateUrl: 'static/src/message-board/controllers/add-post.html',
                controller: 'AddPostController',
                size: 'lg'
            });
        };

        (function activate() {
            Posts.all().then(function(data) {
                $scope.posts = data.data;
            }, function(data) {
                Snackbar.error(data.error);
            });

            // Avoid having to contact server to get data when user creates a post.
            $scope.$on('post.created', function(event, post) {
                $scope.posts.unshift(post);
            });
        })();


    });
