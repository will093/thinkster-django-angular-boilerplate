angular
    .module('thinkster', [
        'thinkster.authentication',
        'ui.router'
    ]);

angular
    .module('thinkster')
    .run(function($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    });
