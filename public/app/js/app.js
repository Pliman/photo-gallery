'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ui.state', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
	config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
//		$routeProvider.when('/view1', {templateUrl: 'app/partials/partial1.html', controller: 'MyCtrl1'});
//		$routeProvider.when('/view2', {templateUrl: 'app/partials/partial2.html', controller: 'MyCtrl2'});
//		$routeProvider.otherwise({redirectTo: '/view1'});
		$stateProvider
			.state('index', {
				url: "", // root route
				views: {
					"viewA": {
						templateUrl: "index.viewA.html"
					},
					"viewB": {
						templateUrl: "index.viewB.html"
					}
				}
			})
			.state('view1', {
				url: "/route1",
				views: {
					"viewA": {
						templateUrl: "route1.viewA.html"
					},
					"viewB": {
						templateUrl: "route1.viewB.html"
					}
				}
			})
			.state('view2', {
				url: "/route2",
				views: {
					"viewA": {
						templateUrl: "route2.viewA.html"
					},
					"viewB": {
						templateUrl: "route2.viewB.html"
					}
				}
			})

		// configure html5 to get links working on jsfiddle
		//$locationProvider.html5Mode(true);
	}]);
