var IMPORT_DIR = 'D:/nelo2/photo-gallery/public/uploads/';
//----------------------------------------------------------------

var fs = require("fs");
var ExifImage = require('exif').ExifImage;

var mongo = require('../../../lib/mongo');

var importedImage = [];

var importAlbum = function (album) {
	mongo.findOne('albums', {name: album}, {}, function (err, r) {
		if(err){
			console.log('Error occured while importing album: %s', album);

			return;
		}

		if (r) {
			console.log('Album ' + album + ' already exists, trying to import new images.');

			importImageUnderAlbum(album);
		} else {
			mongo.save('albums', {
				name: album,
				modifyTime: new Date().getTime()
			}, function (err, r) {
				if (err) {
					console.log('Error importing album: ' + album + ' error: ' + err);
				} else {
					console.log('Album ' + album + ' saved successfully, trying to import images.');

					importImageUnderAlbum(album);
				}
			});
		}
	});
};

var importImageUnderAlbum = function (album) {
	fs.readdir(IMPORT_DIR + album, function (err, files) {
		if (err) {
			console.log('Error importing photos under album: ' + album + ' error: ' + err);
		} else {
			files.forEach(function (file) {
				importImage(album, file);
			});
		}
	});
};

var importImage = function (album, file) {
	mongo.findOne('photos', {name: file, albumName: album}, {}, function (err, r) {
		if(err){
			console.log('Error occured while importing photo. album: %s, photo: %s', album, file);

			return;
		}

		if (r) {
			console.log("Photo: " + file + "already exists, skip this file");
		} else {
			new ExifImage({ image: (IMPORT_DIR + album + '/' + file) }, function (error, exifData) { // 如果有多次错误，此回调可能执行多次
				var obj = {};

				if (error) {
					if(importedImage[file] === album){
						return;
					}

					importedImage[file] = album;

					console.log('Error importing file exif: ' + file + ':' + error.message);

					obj.name = file;
					obj.albumName = album;
					obj.uploadTime = new Date().getTime();
				} else {
					obj.name = file;
					obj.albumName = album;
					obj.uploadTime = new Date().getTime();

					obj.camera = exifData.image.Make;
					obj.model = exifData.image.Model;
					obj.exposure = exifData.exif.ExposureTime;
					obj.f = exifData.exif.FNumber;
					obj.ISO = exifData.exif.ISO;
					obj.createTime = exifData.exif.CreateDate;
					obj.exposureCompensation = exifData.exif.ExposureCompensation;

					console.log('Importing file: ' + file + ' with exif');
				}

				mongo.save('photos', obj, function (err, r) {
					if (err) {
						console.log('Error saving photo, album: ' + album + ' file: ' + file + ' error: ' + err);
					} else {
						console.log('Photo ' + file + ' saved successfully.');
					}
				});
			});
		}
	});
};

fs.readdir(IMPORT_DIR, function (err, files) {
	files.forEach(function (file) {
		importAlbum(file);
	});
});
