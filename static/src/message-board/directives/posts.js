'use strict';

angular
    .module('thinkster.messageBoard')
    .directive('posts', function() {

        var controller = function($scope) {

            $scope.columns = [];

            (function activate() {
                $scope.$watchCollection(function() {
                    return $scope.posts;
                }, render);
                $scope.$watch(function() {
                    return $(window).width();
                }, render);
            })();

            function calculateNumberOfColumns() {
                var width = $(window).width();

                if (width >= 1200) {
                    return 4;
                } else if (width >= 992) {
                    return 3;
                } else if (width >= 768) {
                    return 2;
                } else {
                    return 1;
                }
            }

            function approximateShortestColumn() {
                var scores = $scope.columns.map(columnMapFn);

                return scores.indexOf(Math.min.apply(this, scores));

                function columnMapFn(column) {
                    var lengths = column.map(function(element) {
                        return element.content.length;
                    });

                    return lengths.reduce(sum, 0) * column.length;
                }

                function sum(m, n) {
                    return m + n;
                }
            }

            function render(current, original) {
                if (current !== original) {
                    $scope.columns = [];

                    for (var i = 0; i < calculateNumberOfColumns(); ++i) {
                        $scope.columns.push([]);
                    }

                    for (var j = 0; j < current.length; ++j) {
                        var column = approximateShortestColumn();

                        $scope.columns[column].push(current[j]);
                    }
                }
            }
        };

        return {
            controller: controller,
            restrict: 'E',
            scope: {
                posts: '='
            },
            templateUrl: '/static/src/message-board/directives/posts.html'
        };
    });
