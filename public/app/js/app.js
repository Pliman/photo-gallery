'use strict';

require(['jQuery', 'angular', 'bootstrap', 'angularUiRouter', 'js/controllers'], function ($, angular) {
	// Declare app level module which depends on filters, and services
	angular.module('photo-gallery', ['ui.state', 'photo-gallery.controllers']).
		config(['$routeProvider', '$locationProvider', '$stateProvider', function ($routeProvider, $locationProvider, $stateProvider) {
			$stateProvider
				.state('index', {
					url: "/", // root route
					views: {
						"header": {
							templateUrl: "/app/partials/header.html",
							controller: 'header'
						},
						"content": {
							templateUrl: "/app/partials/content.html",
							controller: 'index'
						},
						"footer": {
							templateUrl: "/app/partials/footer.html"
						}
					}
				})
				.state('album', {
					url: "/album/:albumName", // root route
					views: {
						"header": {
							templateUrl: "/app/partials/header.html",
							controller: 'header'
						},
						"content": {
							templateUrl: "/app/partials/content.html",
							controller: 'album'
						},
						"footer": {
							templateUrl: "/app/partials/footer.html"
						}
					}
				})
				.state('photo', {
					url: "/photo/:photoName",
					views: {
						"header": {
							templateUrl: "/app/partials/header.html",
							controller: 'header'
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
				.state('albumPhoto', {
					url: "/photo/:photoName/album",
					views: {
						"header": {
							templateUrl: "/app/partials/header.html",
							controller: 'header'
						},
						"content": {
							templateUrl: "/app/partials/photo.html",
							controller: 'albumPhoto'
						},
						"footer": {
							templateUrl: "/app/partials/footer.html"
						}
					}
				})
				.state('albumPhoto.exif', {
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
