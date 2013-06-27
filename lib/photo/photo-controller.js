var PhotoController = module.exports = {};

var mongo = require('../mongo');

PhotoController.getAllPhotos = function (req, res, next) {
	mongo.find('photos', {}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoByName = function (req, res, next) {
	mongo.findOne('photos', {"name": req.params.photoName}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoByPagination = function (req, res, next) {
	mongo.find('photos', {}, parseInt(req.params.skip), parseInt(req.params.limit), function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoPre = function (req, res, next) {
	mongo.find('photos', {"name": req.params.photoName}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoNext = function (req, res, next) {
	mongo.find('photos', {"name": req.params.photoName}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getAlbumPhotoPre = function (req, res, next) {
	mongo.find('photos', {"name": req.params.photoName}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getAlbumPhotoNext = function (req, res, next) {
	mongo.find('photos', {"name": req.params.photoName}, function (err, r) {
		res.send(r);
	});
}
