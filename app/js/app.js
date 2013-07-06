'use strict';

/**
 * # myApp
 * 
 * Declare app level module which depends on filters, and services
 */

var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$locationProvider.html5Mode(true).hashPrefix('!');
	$routeProvider
		.when('/', {
			templateUrl: 'views/_partial1.html', 
			controller: 'MyCtrl1'
		})
		.otherwise({redirectTo: '/'});
}]);
