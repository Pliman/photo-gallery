var AlbumController = module.exports = {};

var mongo = require('../mongo');

AlbumController.getAllAlbums = function (req, res, next) {
	mongo.find('albums', {}, {}, function (err, r) {
		res.send(r);
	});
}

AlbumController.getPhotosByAlbum = function (req, res, next) {
	console.log(req.params.albumName);
	mongo.find('photos', {"albumName":req.params.albumName}, {}, function (err, r) {
		res.send(r);
	});
}
