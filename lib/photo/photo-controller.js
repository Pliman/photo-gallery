var PhotoController = module.exports = {};

var mongo = require('../mongo');

PhotoController.getAllPhotos = function (req, res, next) {
	mongo.find('photos', {}, {}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoByName = function (req, res, next) {
	mongo.findOne('photos', {"name": req.params.photoName}, {}, function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoByPagination = function (req, res, next) {
	mongo.find('photos', {}, parseInt(req.params.skip), parseInt(req.params.limit), function (err, r) {
		res.send(r);
	});
}

PhotoController.getPhotoPre = function (req, res, next) {
	// TODO Pliman 改写为一次性查询
	mongo.findOne('photos', {name: req.params.photoName}, {uploadTime: 1}, function (err, r) {
		mongo.findOne('photos', {$query: {uploadTime: {$lt: r.uploadTime}}, $orderby: {uploadTime: -1}}, {}, function (err, r1) {
			res.send(r1);
		});
	});
}

PhotoController.getPhotoNext = function (req, res, next) {
	// TODO Pliman 改写为一次性查询
	mongo.findOne('photos', {name: req.params.photoName}, {uploadTime: 1}, function (err, r) {
		mongo.findOne('photos', {$query: {uploadTime: {$gt: r.uploadTime}}, $orderby: {uploadTime: 1}}, {}, function (err, r1) {
			res.send(r1);
		});
	});
}

PhotoController.getAlbumPhotoPre = function (req, res, next) {
	// TODO Pliman 改写为一次性查询
	mongo.findOne('photos', {name: req.params.photoName}, {uploadTime: 1, albumName: 1}, function (err, r) {
		mongo.findOne('photos', {$query: {albumName: r.albumName, uploadTime: {$lt: r.uploadTime}}, $orderby: {uploadTime: -1}}, {}, function (err, r1) {
			res.send(r1);
		});
	});
}

PhotoController.getAlbumPhotoNext = function (req, res, next) {
	// TODO Pliman 改写为一次性查询
	mongo.findOne('photos', {name: req.params.photoName}, {uploadTime: 1, albumName: 1}, function (err, r) {
		mongo.findOne('photos', {$query: {albumName: r.albumName, uploadTime: {$gt: r.uploadTime}}, $orderby: {uploadTime: 1}}, {}, function (err, r1) {
			res.send(r1);
		});
	});
}
