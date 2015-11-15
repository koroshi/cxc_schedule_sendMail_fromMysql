# cxc_schedule_sendMail_fromMysql
这是一个小工具，来通过某个周期，取数据库里的数据然后发送给某些邮箱
===
## 环境
基于node.js 4.0.0
===
## 使用
===
### 准备
安装node.js 4.0.0
如果有其他版本可以考虑使用[nvm](https://github.com/creationix/nvm)
===
### 安装依赖
进入项目目录 
```
npm install
```
===
### 配置
===
#### 配置文件名

config.js 中
```
var filename = 'file.csv';
```
修改引号内内容就可以
===
#### 配置邮件
===
##### 配置邮件服务
config.js 中
```
var transporterOption = {
    service: '163',
    auth: {
        user: 'xxx@163.com',
        pass: 'password'
    }
};
```
service 代表服务
auth代表发送账号的邮箱和密码
===

##### 配置邮件信息
config.js 中
```
var mailOptions = {
    from: 'xxx@163.com', // sender address
    to: 'xxx@qq.com, xxx@163.com, xx@qq.com', // list of receivers

    attachments: [
        {   // filename and content type is derived from path
            path: filename
        }
    ]
};
```
from代表发件人*如果为163时候不能修改成设置的用户名以外的*
to以逗号分割多个地址
attachments是附件
更多请查看[Nodemailer](https://github.com/andris9/Nodemailer)
===
#### 配置mysql
config.js 中
```
var mysqlConnection = {
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'myMailTest'
};

var sql = "select * from person";
```
mysqlConnection是配置链接
host是服务器
user是用户
pasword是密码
database是数据库名

sql是要执行的sql语句
更多请查看[node-mysql](https://github.com/felixge/node-mysql)
===
#### 配置定时器rule
config.js 中
```
var rule = {
    dayOfWeek:0,
    hour:10,
    minute:56
}
```
更多请查看[node-schedule](https://github.com/node-schedule/node-schedule)
===
#### 配置log
config.js 中
```
var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/logs.log', category: 'logs' }
  ]
});
var logger = log4js.getLogger('logs');
logger.setLevel('INFO');
```
如果要只显示错误修改修改logger.setLevel('ERROR');即可
更多请查看[log4js-node](https://github.com/nomiddlename/log4js-node)
===
### 启动
所有配置结束后使用
```
node schedule.js来启动
```
###附录
如果要使用进程守护
可以使用pm2来启动
更多请查看[pm2](https://github.com/Unitech/pm2)