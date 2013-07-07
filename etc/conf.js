module.exports = {
	"web": {
		"port": 1000,
		"access": "/log/photo-gallery/access.log", // file path for access log
		"staticFolders": ["public"],
		"list": {
			"defaultPageSize": 10
		}
	},
	"logging": {
		"log4js": {
			"appenders": [
				{
					"type": "file",
					"filename": "/log/photo-gallery/app.log",
					"maxLogSize": 10000000,
					"backups": 10
				}
			]
		}
	},
	"mongoDB": {
		"host": "192.168.1.108",
		//"host": "10.34.135.159",
		"port": "27017",
		"dbName": "photo-gallery",
		"max_connection": "10",
		// development or production
		"mode": "production"
	}
};
