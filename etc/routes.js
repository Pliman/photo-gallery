// 列表和保存均支持xhr和普通请求，使用m=data/page 指定xhr和普通请求
// delete只支持xhr方式

// 分页开始使用s(比如s=40)，分页条数使用sz(比如sz=20)

// 只有get后面接?类型参数，post后不接?参数

/**
 * route配置示例：
 * <pre>
 * {
 * "url" : ["/crawler", "/crawler/del"], // 监听地址，可以是数组，将数组中的url都绑定到controller进行处理，主要是为了pushstate直接访问方便
 * "path" : "./src/crawler/crawler.js", // 处理模块
 * "objName" : "listCrawler", // 处理方法
 * "method" : "get", // 监听请求类型
 * "models" : ["menu","crawler"], // 组装模型
 * "menu" : [ "management", "management_project" ] // 对应菜单(可以生成导航)
 * }
 * </pre>
 */

module.exports = [
	// index
	{
		"url": ["/", "/navigator", "/navigator/exif"],
		"path": "./lib/index/index.js",
		"objName": "index",
		"method": "get"
	},
	// album
	// 1. get/get-xhr /albums get all album
	// 2. get/get-xhr /album/:name/photos get all photos in album
	{
		"url": "/albums",
		"path": "./lib/album/album-controller.js",
		"objName": "getAllAlbums",
		"method": "get"
	},
	{
		"url": "/album/:albumName/photos",
		"path": "./lib/album/album-controller.js",
		"objName": "getPhotosByAlbum",
		"method": "get"
	},
	// photo
	// 1. get/get-xhr /photos get all photos
	// 2. get/get-xhr /photo/:photoName get photo by name
	// 2. get/get-xhr /photos/:skip/:limit get photo by pagination
	{
		"url": ["/photos", "/photos/a"],
		"path": "./lib/photo/photo-controller.js",
		"objName": "getAllPhotos",
		"method": "get"
	},
	{
		"url": "/photos/:skip/:limit",
		"path": "./lib/photo/photo-controller.js",
		"objName": "getPhotoByPagination",
		"method": "get"
	}
];
