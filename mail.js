var nodemailer = require('nodemailer');
var config = require('./config');
var Promise = require('bluebird');
var moment = require('moment');
var logger = config.logger;

var transporter = nodemailer.createTransport(config.transporterOption);

var sendMail = function() {
    return new Promise(function(resolve, reject){
        var mailOptions = config.mailOptions;
        mailOptions.subject = moment().format('YYYY-MM-DD HH:mm')+'的数据';
        mailOptions.html = '<b>'+moment().format('YYYY-MM-DD HH:mm')+'的数据'+'</b>';
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                logger.error(error.message);
                reject(error);
                return console.log(error);
            }
            logger.info('mail no error' );
            logger.info('Message sent: ' + info.response);
            console.log('Message sent: ' + info.response);
            resolve('Message sent: ' + info.response);
        });
        
    });
}

module.exports = sendMail;