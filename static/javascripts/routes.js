(function () {
  'use strict';

  angular
    .module('thinkster')
    .config(config);

  config.$inject = ['$routeProvider'];

  /**
  * @name config
  * @desc Define valid application routes
  */
  function config($routeProvider) {
    $routeProvider.when('/register', {
      controller: 'RegisterController',
      templateUrl: '/static/templates/authentication/register.html'
    }).otherwise('/');
  }
})();
