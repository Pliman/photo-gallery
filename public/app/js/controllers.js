'use strict';

/* Controllers */
define(['jQuery', 'angular', 'angularUiRouter', './services'], function ($, angular) {
	return angular.module('photo-gallery.controllers', ['photo-gallery.services'])
		.controller('index', ['$scope', '$state', 'Photos', function ($scope, $state, Photos) {
			Photos.get(function (photos) {
				$scope.photos = photos;
			});

			$scope.navPhoto = function(photoName){
				$state.transitionTo('photo', {photoName: photoName});
			};
		}])
		.controller('album', ['$scope', '$state', '$stateParams', 'AlbumPhotos', 'menu', function ($scope, $state, $stateParams, AlbumPhotos, menu) {
			menu.changeMenu($stateParams.albumName);

			AlbumPhotos.get({albumName: $stateParams.albumName}, function (photos) {
				$scope.photos = photos;
			});

			$scope.navPhoto = function(photoName){
				$state.transitionTo('albumPhoto', {photoName: photoName});
			};
		}])
		.controller('header', ['$scope', '$state', 'Albums', function ($scope, $state, Albums) {
			if(!!$scope.albums){
				return;
			}

			Albums.get(function (albums) {
				$scope.albums = albums;

				console.log(111);
				$scope.$on('albumChanged', function(event, albumName){
					$('.albums').removeClass('active');
					$('#' + albumName).addClass('active');
				});
			});

			$scope.navAlbum = function(albumName){
				$state.transitionTo('album', {albumName: albumName});
			};
		}])
		.controller('photo', ['$scope', '$state', '$stateParams', 'Photo', 'PhotoNavPre', 'PhotoNavNext',
			function ($scope, $state, $stateParams, Photo, PhotoNavPre, PhotoNavNext) {
				Photo.get({photoName: $stateParams.photoName}, function (photo) {
					$scope.photo = photo;
					$scope.photo.exposureCompensation += ' ev';
				});

				$scope.photoPre = function () {
					if (!$scope.photo) {
						return;
					}

					PhotoNavPre.get({photoName: $stateParams.photoName}, function (photo) {
						if (!photo.name) {
							alert("已经是第一张了");
							return;
						}

						$scope.photo = photo;
						$scope.photo.exposureCompensation += ' ev';
						$state.transitionTo('photo', {photoName: photo.name});
					});
				};

				$scope.photoNext = function () {
					if (!$scope.photo) {
						return;
					}

					PhotoNavNext.get({photoName: $stateParams.photoName}, function (photo) {
						if (!photo.name) {
							alert("已经是最后一张了");
							return;
						}

						$scope.photo = photo;
						$scope.photo.exposureCompensation += ' ev';
						$state.transitionTo('photo', {photoName: photo.name});
					});
				};

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
			}])
		.controller('albumPhoto', ['$scope', '$state', '$stateParams', 'Photo', 'AlbumPhotoNavPre', 'AlbumPhotoNavNext',
			function ($scope, $state, $stateParams, Photo, AlbumPhotoNavPre, AlbumPhotoNavNext) {
				Photo.get({photoName: $stateParams.photoName}, function (photo) {
					$scope.photo = photo;
					$scope.photo.exposureCompensation += ' ev';
				});

				$scope.photoPre = function () {
					if (!$scope.photo) {
						return;
					}

					AlbumPhotoNavPre.get({photoName: $stateParams.photoName}, function (photo) {
						if (!photo.name) {
							alert("已经是第一张了");
							return;
						}

						$scope.photo = photo;
						$scope.photo.exposureCompensation += ' ev';
						$state.transitionTo('albumPhoto', {photoName: photo.name});
					});
				};

				$scope.photoNext = function () {
					if (!$scope.photo) {
						return;
					}

					AlbumPhotoNavNext.get({photoName: $stateParams.photoName}, function (photo) {
						if (!photo.name) {
							alert("已经是最后一张了");
							return;
						}

						$scope.photo = photo;
						$scope.photo.exposureCompensation += ' ev';
						$state.transitionTo('albumPhoto', {photoName: photo.name});
					});
				};

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
