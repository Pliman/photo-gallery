'use strict';

/* Controllers */
define(['angular', './services'], function (angular) {
	return angular.module('photo-gallery.controllers', ['photo-gallery.services']).
		controller('index', ['$scope', 'version', function ($scope, version) {
			$scope.scopedAppVersion = version;

			$scope.photos = [
				{ "name": "P1130053.jpg", "albumName": "Yinchanggou", "uploadTime": { "$date": 1371516455093 }, "camera": "Panasonic", "model": "DMC-LX5", "exposure": 0.004, "f": 3.2, "ISO": 80, "createTime": "2013:06:08 08:42:47", "exposureCompensation": -0.33, "_id": { "$oid": "51bfae27238f6a2416000001" } },
				{ "name": "P1130105.jpg", "albumName": "Yinchanggou", "uploadTime": { "$date": 1371516455100 }, "camera": "Panasonic", "model": "DMC-LX5", "exposure": 0.0025, "f": 5, "ISO": 80, "createTime": "2013:06:08 09:40:15", "exposureCompensation": -0.33, "_id": { "$oid": "51bfae27238f6a2416000002" } },
				{ "name": "P1130098.jpg", "albumName": "Yinchanggou", "uploadTime": { "$date": 1371516455102 }, "camera": "Panasonic", "model": "DMC-LX5", "exposure": 0.01, "f": 5, "ISO": 80, "createTime": "2013:06:08 09:38:13", "exposureCompensation": -0.33, "_id": { "$oid": "51bfae27238f6a2416000003" } }
			]
		}])
		.controller('photo', ['$scope', '$stateParams', 'Photo', function ($scope, $stateParams, Photo) {
			Photo.get({photoName: $stateParams.photoName}, function(photo) {
				$scope.photo = photo[0];
				$scope.photo.exposureCompensation += ' ev';
			});
//			console.log(Photo.get({photoName: $stateParams.photoName}));
			//$scope.photo = { "name": "P1130053.jpg", "albumName": "Yinchanggou", "uploadTime": { "$date": 1371516455093 }, "camera": "Panasonic", "model": "DMC-LX5", "exposure": 0.004, "f": 3.2, "ISO": 80, "createTime": "2013:06:08 08:42:47", "exposureCompensation": -0.33, "_id": { "$oid": "51bfae27238f6a2416000001" } };
			//$scope.photo = Photo.query();

				// 暂时不实现photo对象传递机制，使用写死的photo对象
			//$scope.photo.name = $stateParams.photoName;
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
