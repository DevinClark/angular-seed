'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true).hashPrefix('!');
		$routeProvider
			.when('/', {
				templateUrl: 'views/_partial1.html', 
				controller: 'MyCtrl1'
			})
			.otherwise({redirectTo: '/'});
	}]);
