'use strict';

/**
 * @ngdoc overview
 * @name nasInFinderApp
 * @description
 * # nasInFinderApp
 *
 * Main module of the application.
 */

var nasInFinderApp = angular.module('nasInFinderApp', ['ui.router']);
nasInFinderApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/dir");
  //
  // Now set up the states
  $stateProvider
    .state('dir', {
      url: "/dir",
      templateUrl: "/views/list.html",
      controller: 'ListCtrl'
    });


/*
var nasInFinderApp = angular.module('nasInFinderApp', ['ngRoute']);
nasInFinderApp.config(function($routeProvider) {
    //Define a route that has a route parameter in it (:customerID)
    $routeProvider
        .when('/dir',
            {
            	controller: 'ListCtrl',
                templateUrl: '/views/list.html'
            })
        .otherwise({ redirectTo: '/dir' });
*/
});