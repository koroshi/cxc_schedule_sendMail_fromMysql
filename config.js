var config = {};
var moment = require('moment');
var filename = 'file.csv';

//  mailConfig start
var transporterOption = {
    service: '163',
    auth: {
        user: 'xxx@163.com',
        pass: 'xxxxxx'
    }
};

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'xxxx@163.com', // sender address
    to: 'xxxx@qq.com, xxx@163.com, xx@qq.com', // list of receivers

    attachments: [
        {   // filename and content type is derived from path
            path: filename
        }
    ]
};
//  mailConfig end

// mysqlConfig start
var mysqlConnection = {
  host     : 'localhost',
  user     : 'root',
  password : 'xxx',
  database : 'myMailTest'
};

var sql = "select * from person";
// mysqlConfig end

// scheduleConfig start
var rule = {
    dayOfWeek:0,
    hour:10,
    minute:56
}
// scheduleConfig end

var log4js = require('log4js');
log4js.configure({
  appenders: [
    { type: 'console' },
    { type: 'file', filename: 'logs/logs.log', category: 'logs' }
  ]
});
var logger = log4js.getLogger('logs');
logger.setLevel('INFO');
config.transporterOption = transporterOption;
config.mailOptions = mailOptions;
config.mysqlConnection = mysqlConnection;
config.sql = sql;
config.rule = rule;
config.filename = filename;
config.logger = logger;

module.exports = config;