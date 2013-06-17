var IMPORT_DIR = 'D:/photo-gallery/uploads/';
var ALBUM_NAME = '银厂沟';

//----------------------------------------------------------------

var fs = require("fs");
var ExifImage = require('exif').ExifImage;

var mongo = require('../../../lib/mongo');

var dir = fs.openSync(IMPORT_DIR, 'r');

fs.readdir(IMPORT_DIR, function (err, files) {
	files.forEach(function (file) {
		new ExifImage({ image: IMPORT_DIR + file }, function (error, exifData) {
			if (error) {
				console.log('Error importing file: ' + file + ':' + error.message);
			}
			else {
				var obj = {};
				obj.name = file;
				obj.albumName = ALBUM_NAME;
				obj.uploadTime = new Date();

				obj.camera = exifData.image.Make;
				obj.model = exifData.image.Model;
				obj.exposure = exifData.exif.ExposureTime;
				obj.f = exifData.exif.FNumber;
				obj.ISO = exifData.exif.ISO;
				obj.createTime = exifData.exif.CreateDate;
				obj.exposureCompensation = exifData.exif.ExposureCompensation;

				mongo.save('photos', obj, function(err, r){
					if(err){
						console.log('Error saving photo ' + file + ': ' + err);
					}else{
						console.log('Photo ' + file + ' saved successfully.');
					}
				});
			}
		});
	});
});
