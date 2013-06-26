'use strict';

/* Controllers */
define(['angular', './services'], function (angular) {
	return angular.module('photo-gallery.controllers', ['photo-gallery.services']).
		controller('index', ['$scope', 'Photos', function ($scope, Photos) {
			Photos.get(function(photos){
				$scope.photos = photos;
			});
		}])
		.controller('photo', ['$scope', '$stateParams', 'Photo', function ($scope, $stateParams, Photo) {
			Photo.get({photoName: $stateParams.photoName}, function(photo) {
				$scope.photo = photo[0];
				$scope.photo.exposureCompensation += ' ev';
			});

			// 暂时不实现photo对象传递机制，动态去获取
			$scope.exifItems = [
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
			];
		}]);
});
