'use strict';

define(['jQuery', 'angular', 'bootstrap', 'angularUiRouter', './controllers'], function ($, angular) {
	// Declare app level module which depends on filters, and services
	angular.module('photo-gallery', ['ui.state', 'photo-gallery.controllers']).
		config(['$routeProvider', '$locationProvider', '$stateProvider', function ($routeProvider, $locationProvider, $stateProvider) {
			$stateProvider
				.state('index', {
					url: "/", // root route
					views: {
						"header": {
							templateUrl: "/app/partials/header.html"
						},
						"content": {
							templateUrl: "/app/partials/content.html",
							controller: 'index1'
						},
						"footer": {
							templateUrl: "/app/partials/footer.html"
						}
					}
				})
				.state('photo', {
					url: "/photo",
					views: {
						"header": {
							templateUrl: "/app/partials/header.html"
						},
						"content": {
							templateUrl: "/app/partials/photo.html",
							controller: 'photo'
						},
						"footer": {
							templateUrl: "/app/partials/footer.html"
						}
					}
				})
				.state('photo.exif', {
					url: "/exif",
					views: {
						"exif": {
							templateUrl: "/app/partials/exif.html"
						}
					}
				})
			// configure html5 to get links working on jsfiddle
			$locationProvider.html5Mode(true);
		}]);

	// 由于requirejs不能保证domready时module初始化完成，必须在module存在的情况下手动初始化
	$(document).ready(function () {
		var $html = $('html');
		angular.bootstrap($html, ['photo-gallery']);
		$html.addClass('ng-app');
	});
});
