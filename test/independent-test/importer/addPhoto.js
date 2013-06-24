var PHOTOS = [
	{
		"name": "",
		"albumName": "",
		"uploadTime": "",

		"camera": "",
		"model": "",
		"exposure": "",
		"f": "",
		"ISO": "",
		"createTime": "",
		"exposureCompensation": ""
	}
];

//----------------------------------------------------------------

var mongo = require('../../../lib/mongo');

// 1. get/get-xhr /album get all album
mongo.save('photos', PHOTOS, function (err, r) {
	if (err) {
		console.log('Error saving photos: ' + JSON.stringify(PHOTOS) + '\n, because of ' + err);
	} else {
		console.log('photos: ' + JSON.stringify(PHOTOS) + ' saved successfully.');
	}
});
