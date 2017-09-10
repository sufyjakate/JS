'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'myApp.services.restApiService',
  'myApp.services.interControllerCommunication'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'index.html'
        })
        .when('/device', {
            templateUrl: 'views/device.html',
            controller: 'deviceController'
        })
        .when('/help', {
            templateUrl: 'help.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


