angular
    .module('thinkster', [
        'thinkster.authentication',
        'ngRoute'
    ]);

angular
    .module('thinkster')
    .run(function($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrfToken';
    });
