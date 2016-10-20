var util = require('util'); 
var Q = require('q');
var CreateConnection = require('./CreateConnection');
var sql = new CreateConnection();
//connection.connect();

function Delete(){
  this.DeleteAuthorByName = function(Name){
    var authorDeleteSql = "DELETE FROM author WHERE Name = '" + Name +"'";
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(authorDeleteSql,function (err, result) {
        if (err) {
          console.log(err);
          reject(false);
        } else {
            //connection.end();
            console.log('删除成功');
            resolve(true);
          }
      });
    })
  }
  this.DeleteBookByTitle = function(Title){
    var bookDeleteSql = "DELETE FROM book WHERE Title = "+Title ;
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(bookDeleteSql,function (err, result) {
        if (err) {
          console.log(err);
          reject(false);
        } else {
            //connection.end();
            console.log('删除成功');
            resolve(true);
          }
      });
    })
  }
}

module.exports = Delete;



