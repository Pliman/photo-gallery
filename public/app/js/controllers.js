'use strict';

/* Controllers */
define(['jQuery', 'angular', 'angularUiRouter', './services'], function ($, angular) {
	return angular.module('photo-gallery.controllers', ['photo-gallery.services'])
		.controller('index', ['$scope', '$state', 'Photos', function ($scope, $state, Photos) {
			Photos.get(function (photos) {
				$scope.photos = photos;
			});

			$scope.navPhoto = function (photoName) {
				$state.transitionTo('photo', {photoName: photoName});
			};
		}])
		.controller('album', ['$scope', '$state', '$stateParams', 'AlbumPhotos', 'menu', function ($scope, $state, $stateParams, AlbumPhotos, menu) {
			menu.changeMenu($stateParams.albumName);

			AlbumPhotos.get({albumName: $stateParams.albumName}, function (photos) {
				$scope.photos = photos;
			});

			$scope.navPhoto = function (photoName) {
				$state.transitionTo('albumPhoto', {photoName: photoName});
			};
		}])
		.controller('header', ['$rootScope', '$scope', '$state', 'Albums', function ($rootScope, $scope, $state, Albums) {
			$scope.navAlbum = function (albumName) {
				$state.transitionTo('album', {albumName: albumName});
			};

			$('.albums').removeClass('active');

			$scope.$on('albumChanged', function (event, albumName) {
				// 解决方法 1.加载了album就不动了，直接改变样式 2.提前设定值，加载时如果发现和自己相同，就设置为active
				$scope.currentAlbum = albumName;
				//$('.albums').removeClass('active');
				//$('#' + albumName).addClass('active');
			});

			if (!!$rootScope.albums) {
				return;
			}

			Albums.get(function (albums) {
				$scope.albums = albums;

				$rootScope.albums = albums;
			});
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
