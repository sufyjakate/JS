'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngAnimate',
  'ngMaterial',
  'myApp.views',
  'myApp.version',
  'myApp.services.restApiService',
  'myApp.services.interControllerCommunication'

]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

    $routeProvider
        .when('/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        .when('/device', {
            templateUrl: 'views/device.html',
            controller: 'deviceController'
        })
        .when('/help', {
            templateUrl: 'help.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);


