0.0.4
==>1. 相册过多怎么排列 默认显示最近更新的5个相册，点击可查看所有相册

==>2. 鼠标移开3秒后，箭头消失？

==>3. 修改所有排列方式，装在容器中，放置空隙发生

==>4. 在列表页面点详情，应该不用重新获取数据 - 需要将主页中每个图片作为一个view

==>5. $Resource的URL能否变动 -- 不然会写太多service...

==>6. 将mongodb获取上一张，下一张照片的查询改为一次性查得

0.0.3 2013-07-09
1. 菜单navigation随着相册变

2. 改善第一张和最后一张提示方式，箭头变成灰色(需要预载)，直接进来的时候，进行预载，判断前后是否有照片，使用内部状态来保存上一张和下一张信息，减少查询请求。

3. 默认显示exif信息

4. 美化网站色调，字体等

5. 目录导入

0.0.2 2013-07-04
1. 数据服务
	a. 获取所有相册 b. 获取相册所有相片
	c. 获取所有相片 d. 获取单张相片 e. 获取下一张相片(按照当前页数和size获取相片)

2. 使用服务器改造模板

3. 支持pushstate语法的route改造(url可以配置数组)

4. 使用requirejs改造客户端程序

5. 动态化 a. 使用controller示例数据动态化 b. 尝试从后端获取数据 c. 将数据替代为后台获取

6. 使用相片加载中状态...

7. 实现浏览切换 a. 查看flickr，应该是使用照片条目反向查找顺序 b. count_id小于当前_id的记录数？:
使用uploadTime 如果uploadTime一致，则按文件名自然排序(最好是能按照插入顺序): ！！！当前默认同一时刻只上传1张照片
c. 切换图片的时候，使用状态转移: 状态转移可以参数(state, parameter,
isRefreshURL)，第二个参数可以给状态指定参数 ??向后就一步到底了??:
service
获取相片排序有无，导致获取到了后面的相片
d. 第一张pre和最后一张next，一直loading，因为没有获取到图片:

8. 按Album过滤及浏览

9. 获取所有album，首页过滤album照片，点击header album可以改变相册

10. 使用$scope.on() 和 transitions 来转换view

0.0.1 2013-06-18
1. 添加mongo，日志记录，路由等基础服务

2. 添加angularjs框架
