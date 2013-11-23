module.exports = {
	"logging": {
		"log4js": {
			"appenders": [
				{
					"type": "file",
					"filename": "app.log",
					"maxLogSize": 10000000,
					"backups": 10
				}
			]
		}
	},
	"mongoDB": {
		//"host": "192.168.1.108",
		"host": "localhost",
		"port": "27017",
		"userName": "photo-gallery",
		"password": "photo-gallery",
		"dbName": "photo-gallery",
		"max_connection": "10",
		// development or production
		"mode": "production"
	}
};
