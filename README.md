# web_final
代码在master分支

基于第一个项目爬虫爬取的数据（3-5个数据源），完成数据展示网站。
基本要求：
1、用户可注册登录网站，非注册用户不可登录查看数据
2、用户注册、登录、查询等操作记入数据库中的日志
3、实现查询词支持布尔表达式 （比如“新冠 AND 肺炎”或者“新冠 OR 肺炎”）
4、爬虫数据查询结果列表支持分页和排序
5、用Echarts或者D3实现3个以上的数据分析图表展示在网站中
扩展要求（非必须）：
1、实现对爬虫数据中文分词的查询
2、实现查询结果按照主题词打分的排序
3、用Elastic Search+Kibana展示爬虫的数据结果!

在项目文件的终端中输入 npm install 将安装所有依赖的node modules
启动后访问浏览器地址 http://localhost:3000/

conf/mysqlConf.js:建立连接mysql配置文件
public/index.html:登录页、注册页
routes/users.js：登录页、注册页路由
app.js:session信息，引入var logger = require('morgan’)，借助中间件保存的信息，将用户注册、登录、查询等操作记入数据库中的日志
public/search.html:查询页，查询结果展示，爬虫数据查询结果列表支持分页；首先在news.html引入查询页
public/javascripts/news.js:实现查询词支持布尔查询，分页的代码用angular写
routes/news.js:查询页路由
dao/newsDAO.js:search函数
