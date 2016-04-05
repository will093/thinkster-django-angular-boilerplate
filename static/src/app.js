angular
    .module('thinkster', [
        'thinkster.authentication',
        'thinkster.messageBoard',
        'thinkster.common',
        'ui.router',
        'ui.bootstrap',
        'ngMessages'
    ]);

angular
    .module('thinkster')
    .run(function($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    });
