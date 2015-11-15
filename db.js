var mysql      = require('mysql');
var fs = require('fs');
var config = require('./config');
var Promise = require('bluebird');
var logger = config.logger;



var sqlQuery = function(){
  return new Promise(function(resolve, reject){
    logger.debug(config.mysqlConnection)
    var connection = mysql.createConnection(config.mysqlConnection);
    logger.debug('db connect1');
    connection.connect();
    logger.debug('db connect2');
    connection.query(config.sql, function(err, rows, fields) {
      if (err) {
        logger.error(err.message);
        return reject(err);
      }
      var resultRow = '';
      var mapRow = rows.map(function(one){
        var oneRow = []
        for(var i in  one) {
          oneRow.push(one[i]);
        }
        return oneRow.join(',');
      });
      resultRow = mapRow.join('\n');
      // var mapRow = rows.map(function(row){
        // var one = {};
        // for(var i in  rows[0]) {
        //   one[i] = row[i];
        // }
      //   return one;
      // });
      // var resultRow = JSON.stringify(mapRow);
      
      fs.writeFile(config.filename, resultRow, function (err) {
        if (err) {
          logger.error(err.message);
          return reject(err);
        }
        logger.info('db no error');
        logger.debug('db end1')
        connection.end();
        logger.debug('db end2')
        return resolve();
        console.log('It\'s saved!');
      });
    });
  });
};

module.exports = sqlQuery;







