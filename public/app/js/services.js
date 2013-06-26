'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
define(['angular', 'angularResource'], function (angular) {
	angular.module('photo-gallery.services', ['ngResource'])
		.value('version', '0.1')
		.value('photo', '0.1')
		.factory('Photos', function ($resource) {
			return $resource('/photos', {}, {
				get: {method: 'GET', isArray: true}
			});
		})
		.factory('Photo', function ($resource) {
			return $resource('/photo-data/:photoName', {}, {
				query: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: true},
				get: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: true}
			});
		});
});
