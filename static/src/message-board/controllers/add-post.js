'use strict';

angular
    .module('thinkster.messageBoard')
    .controller('AddPostController', function($scope, $rootScope, $uibModalInstance, Posts, Authentication) {

        $scope.post = {
            content: ''
        };

        $scope.addPost = function() {
            Posts.create($scope.post.content).then(
                function() {
                    $rootScope.$broadcast('post.created', {
                        content: $scope.post.content,
                        author: {
                            username: Authentication.getAuthenticatedAccount().username
                        }
                    });
                    $uibModalInstance.close();
                });
        };

        $scope.cancel = function() {
            $uibModalInstance.dismiss();
        };

    });
