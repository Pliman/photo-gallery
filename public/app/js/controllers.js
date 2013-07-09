'use strict';

/* Controllers */
define(['jQuery', 'angular', 'popMsger', 'angularUiRouter', './services'], function ($, angular, popMsger) {
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

			$rootScope.currentAlbum = 'all';
			$scope.$on('albumChanged', function (event, albumName) {
				$rootScope.currentAlbum = albumName;
			});

			if (!!$rootScope.albums) {
				return;
			}

			Albums.get(function (albums) {
				$rootScope.albums = albums;
			});
		}])
		.controller('photo', ['$scope', '$state', '$stateParams', 'Photo', 'PhotoNavPre', 'PhotoNavNext', 'exifItems',
			function ($scope, $state, $stateParams, Photo, PhotoNavPre, PhotoNavNext, exifItems) {
				Photo.get({photoName: $stateParams.photoName}, function (photo) {
					$scope.photo = photo;
					$scope.photo.exposureCompensation && ($scope.photo.exposureCompensation += ' ev');

					$scope.pre = true;
					$scope.next = true;

					PhotoNavPre.get({photoName: $stateParams.photoName}, function (photo) {
						if (photo.length === 0) {
							$scope.pre = false;

							$('#pre').removeClass('pre');
							$('#pre').addClass('no-pre');
						} else {
							$('#pre').removeClass('no-pre');
							$('#pre').addClass('pre');
						}
					});

					PhotoNavNext.get({photoName: $stateParams.photoName}, function (photo) {
						if (photo.length === 0) {
							$scope.next = false;

							$('#next').removeClass('next');
							$('#next').addClass('no-next');
						} else {
							$('#next').removeClass('no-next');
							$('#next').addClass('next');
						}
					});
				});

				$scope.photoPre = function () {
					if (!$scope.photo) {
						return;
					}

					if (!$scope.pre) {
						popMsger.setupPopMsger(new popMsger("已经是第一张了", "success", 5000), $('#msger'),
							"photoNavFirst");

						return;
					}

					PhotoNavPre.get({photoName: $stateParams.photoName}, function (photo) {
						$scope.pre = true;
						$scope.next = true;

						if (photo.length === 1) {
							$scope.pre = false;

							$('#pre').removeClass('pre');
							$('#pre').addClass('no-pre');
						}

						if (photo.length === 2) {
							$('#pre').removeClass('no-pre');
							$('#pre').addClass('pre');
						}

						$scope.photo = photo[0];
						$scope.photo.exposureCompensation && ($scope.photo.exposureCompensation += ' ev');
						$state.transitionTo('photo', {photoName: $scope.photo.name});
					});
				};

				$scope.photoNext = function () {
					if (!$scope.photo) {
						return;
					}

					if (!$scope.next) {
						popMsger.setupPopMsger(new popMsger("已经是最后一张了", "success", 5000), $('#msger'),
							"photoNavLast");

						return;
					}

					PhotoNavNext.get({photoName: $stateParams.photoName}, function (photo) {
						$scope.pre = true;
						$scope.next = true;

						if (photo.length === 1) {
							$scope.next = false;

							$('#next').removeClass('next');
							$('#next').addClass('no-next');
						}

						if (photo.length === 2) {
							$('#next').removeClass('no-next');
							$('#next').addClass('next');
						}

						$scope.photo = photo[0];
						$scope.photo.exposureCompensation && ($scope.photo.exposureCompensation += ' ev');
						$state.transitionTo('photo', {photoName: $scope.photo.name});
					});
				};

				$scope.exifItems = exifItems;
			}])
		.controller('albumPhoto', ['$scope', '$state', '$stateParams', 'Photo', 'AlbumPhotoNavPre', 'AlbumPhotoNavNext', 'menu', 'exifItems',
			function ($scope, $state, $stateParams, Photo, AlbumPhotoNavPre, AlbumPhotoNavNext, menu, exifItems) {
				Photo.get({photoName: $stateParams.photoName}, function (photo) {
					$scope.photo = photo;
					$scope.photo.exposureCompensation && ($scope.photo.exposureCompensation += ' ev');

					$scope.pre = true;
					$scope.next = true;

					AlbumPhotoNavPre.get({photoName: $stateParams.photoName}, function (photo) {
						if (photo.length === 0) {
							$scope.pre = false;

							$('#pre').removeClass('pre');
							$('#pre').addClass('no-pre');
						} else {
							$('#pre').removeClass('no-pre');
							$('#pre').addClass('pre');
						}
					});

					AlbumPhotoNavNext.get({photoName: $stateParams.photoName}, function (photo) {
						if (photo.length === 0) {
							$scope.next = false;

							$('#next').removeClass('next');
							$('#next').addClass('no-next');
						} else {
							$('#next').removeClass('no-next');
							$('#next').addClass('next');
						}
					});

					menu.changeMenu($scope.photo.albumName);
				});

				$scope.photoPre = function () {
					if (!$scope.photo) {
						return;
					}

					if (!$scope.pre) {
						popMsger.setupPopMsger(new popMsger("已经是第一张了", "success", 5000), $('#msger'),
							"albumPhotoNavFirst");

						return;
					}

					AlbumPhotoNavPre.get({photoName: $stateParams.photoName}, function (photo) {
						$scope.pre = true;
						$scope.next = true;

						if (photo.length === 1) {
							$scope.pre = false;

							$('#pre').removeClass('pre');
							$('#pre').addClass('no-pre');
						}

						if (photo.length === 2) {
							$('#pre').removeClass('no-pre');
							$('#pre').addClass('pre');
						}

						$scope.photo = photo[0];
						$scope.photo.exposureCompensation && ($scope.photo.exposureCompensation += ' ev');
						$state.transitionTo('albumPhoto', {photoName: $scope.photo.name});
					});
				};

				$scope.photoNext = function () {
					if (!$scope.photo) {
						return;
					}

					if (!$scope.next) {
						popMsger.setupPopMsger(new popMsger("已经是最后一张了", "success", 5000), $('#msger'),
							"albumPhotoNavLast");

						return;
					}

					AlbumPhotoNavNext.get({photoName: $stateParams.photoName}, function (photo) {
						$scope.pre = true;
						$scope.next = true;

						if (photo.length === 1) {
							$scope.next = false;

							$('#next').removeClass('next');
							$('#next').addClass('no-next');
						}

						if (photo.length === 2) {
							$('#next').removeClass('no-next');
							$('#next').addClass('next');
						}

						$scope.photo = photo[0];
						$scope.photo.exposureCompensation && ($scope.photo.exposureCompensation += ' ev');
						$state.transitionTo('albumPhoto', {photoName: $scope.photo.name});
					});
				};

				$scope.exifItems = exifItems;
			}]);
});
