'use strict';

define(['jQuery', 'bootstrap', 'angular', 'angularUiRouter'], function () {
	// Declare app level module which depends on filters, and services
	return angular.module('photo-gallery', ['ui.state']).
		config(['$routeProvider', '$locationProvider', '$stateProvider', function ($routeProvider, $locationProvider, $stateProvider) {
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
			$locationProvider.html5Mode(true);
		}]);
});
