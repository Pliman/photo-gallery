'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['ui.state', 'myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
	config(['$routeProvider', '$stateProvider', function ($routeProvider, $stateProvider) {
		$stateProvider
			.state('index', {
				url: "", // root route
				views: {
					"header": {
						templateUrl: "app/partials/header.html"
					},
					"content": {
						templateUrl: "app/partials/content.html"
					},
					"footer": {
						templateUrl: "app/partials/footer.html"
					}
				}
			})
			.state('nagvigator', {
				url: "/navigator",
				views: {
					"header": {
						templateUrl: "app/partials/header.html"
					},
					"content": {
						templateUrl: "app/partials/navigator.html"
					},
					"footer": {
						templateUrl: "app/partials/footer.html"
					}
				}
			})
			.state('nagvigator.exif', {
				url: "/exif",
				views: {
					"exif": {
						templateUrl: "app/partials/exif.html"
					}
				}
			})
		// configure html5 to get links working on jsfiddle
		//$locationProvider.html5Mode(true);
	}]);
