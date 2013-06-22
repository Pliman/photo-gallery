// 列表和保存均支持xhr和普通请求，使用m=data/page 指定xhr和普通请求
// delete只支持xhr方式

// 分页开始使用s(比如s=40)，分页条数使用sz(比如sz=20)

// 只有get后面接?类型参数，post后不接?参数

/**
 * route配置示例：
 * <pre>
 * {
 * "url" : "/crawler", // 监听地址
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
		"url": "/",
		"path": "./lib/index/index.js",
		"objName": "index",
		"method": "get"
	}
];
