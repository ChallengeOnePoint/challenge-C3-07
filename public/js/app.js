'use strict';

// Declare app level module which depends on filters, and services

angular.module('myApp', [
  'ngRoute',

  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',

  // 3rd party dependencies
  'btford.socket-io',
  'angularModalService'
]).
config(function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/view1', {
      templateUrl: 'partials/partial1.html',
      controller: 'MyCtrl1'
    }).
    when('/view2', {
      templateUrl: 'partials/partial2',
      controller: 'MyCtrl2'
    }).
    otherwise({
      redirectTo: '/view1'
    });
});
