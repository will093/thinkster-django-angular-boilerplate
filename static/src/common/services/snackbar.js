'use strict';

angular
    .module('thinkster.common')
    .factory('Snackbar', function() {

        function _snackbar(content, options) {
            options = _.extend({ timeout: 3000 }, options);
            options.content = content;
            snackbar(options);
        }

        function error(content, options) {
            _snackbar('Error: ' + content, options);
        }

        function show(content, options) {
            _snackbar(content, options);
        }

        var Snackbar = {
            error: error,
            show: show
        };

        return Snackbar;
    });
