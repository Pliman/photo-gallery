var ALBUM = {
	"name": "Yinchanggou",
	"cover": "",
	"modifyTime": new Date().getTime()
};

//----------------------------------------------------------------

var mongo = require('../../../lib/mongo');

// 1. get/get-xhr /album get all album
mongo.save('albums', ALBUM, function (err, r) {
	if (err) {
		console.log('Error saving album: ' + JSON.stringify(ALBUM) + '\n, because of ' + err);
	} else {
		console.log('album: ' + JSON.stringify(ALBUM) + ' saved successfully.');
	}
});
