'use strict';

angular
    .module('thinkster.messageBoard')
    .directive('post', function() {
        return {
            restrict: 'E',
            scope: {
                post: '='
            },
            templateUrl: '/static/src/message-board/directives/post.html'
        };
    });
