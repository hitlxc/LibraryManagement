var util = require('util'); 
var Q = require('q');
var CreateConnection = require('./CreateConnection');
var sql = new CreateConnection();
//connection.connect();

function CreateBook(){
  this.CreateBook = function(sqlList){
    var bookAddSql = "INSERT INTO book VALUES (?,?,?,?,?,?)"
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(bookAddSql,sqlList,function (err, result) {
        if (err){ 
          console.log(err)
          reject(false);
        } else {
            //connection.end();
            //console.log('插入成功');
            resolve(true);
          }
      });
    })
  }
}


module.exports = CreateBook;



