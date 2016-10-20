var util = require('util'); 
var Q = require('q');
var CreateConnection = require('./CreateConnection');
var sql = new CreateConnection();
sql.connection.connect();

function GetBookByName(){
  this.getBook = function(name){
    var  bookGetSql = 'SELECT * FROM book WHERE Title = "' + name +'"';
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(bookGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          //connection.end();
           return;
        }        
        //connection.end();
        //resolve(result);
        resolve(result)
      });
    })
  }
}

module.exports = GetBookByName;
