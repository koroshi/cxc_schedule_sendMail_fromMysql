var schedule = require('node-schedule');
var config = require('./config');
var sqlQuery = require('./db');
var sendMail = require('./mail');
var logger = config.logger;

var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = config.rule.dayOfWeek;
rule.hour = config.rule.hour;
rule.minute = config.rule.minute;
var j = schedule.scheduleJob(rule, function(){
    sqlQuery()
    .then(sendMail)
    .then(function(){
        logger.info('allsuccess');
        console.log('allsuccess');
    })
    
    console.log('The answer to life, the universe, and everything!');
});
