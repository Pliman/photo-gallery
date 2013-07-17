'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
define(['angular', 'angularResource'], function (angular) {
	angular.module('photo-gallery.services', ['ngResource'])
		.value('version', '0.1')
		.value('photo', '0.1')
		.factory('menu', ['$rootScope', function ($rootScope) {
			return {
				changeMenu: function (album) {
					$rootScope.$broadcast('albumChanged', album);
				}
			}
		}])
		.factory('Albums', ['$resource', '$rootScope', function ($resource, $rootScope) {
			$rootScope.albums = null;

			return $resource('/albums', {}, {
				get: {method: 'GET', isArray: true}
			});
		}])
		.factory('AlbumPhotos', ['$resource', function ($resource) {
			return $resource('/album/:albumName/photos', {}, {
				get: {method: 'GET', params: {albumName: ''}, isArray: true}
			});
		}])
		.factory('Photos', ['$resource', function ($resource) {
			return $resource('/photos', {}, {
				get: {method: 'GET', isArray: true}
			});
		}])
		.factory('Photo', ['$resource', function ($resource) {
			return $resource('/photo-data/:photoName', {}, {
				get: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: false} // 实际使用时可以替代默认值
			});
		}])
		.factory('PhotoNavPre',['$resource', function ($resource) {
			return $resource('/photo/:photoName/pre', {}, {
				get: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: true}
			});
		}])
		.factory('PhotoNavNext', ['$resource', function ($resource) {
			return $resource('/photo/:photoName/next', {}, {
				get: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: true}
			});
		}])
		.factory('AlbumPhotoNavPre',['$resource', function ($resource) {
			return $resource('/photo/:photoName/album/pre', {}, {
				get: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: true}
			});
		}])
		.factory('AlbumPhotoNavNext',['$resource', function ($resource) {
			return $resource('/photo/:photoName/album/next', {}, {
				get: {method: 'GET', params: {photoName: 'P1130053.jpg'}, isArray: true}
			});
		}]).value('exifItems', [
			{
				display: 'Album Name',
				property: 'albumName'
			},
			{
				display: 'Camera',
				property: 'camera'
			},
			{
				display: 'Model',
				property: 'model'
			},
			{
				display: 'Exposure',
				property: 'exposure'
			},
			{
				display: 'F',
				property: 'f'
			},
			{
				display: 'ISO',
				property: 'ISO'
			},
			{
				display: 'Exposure Compensation',
				property: 'exposureCompensation'
			},
			{
				display: 'Create Time',
				property: 'createTime'
			}
		]);
});
