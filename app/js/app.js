'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
		$routeProvider
			.when('/view1', {
				templateUrl: 'views/_partial1.html', 
				controller: 'MyCtrl1'
			})
			.when('/view2', {
				templateUrl: 'views/_partial2.html', 
				controller: 'MyCtrl2'
			})
			.otherwise({redirectTo: '/view1'});
	}]);
