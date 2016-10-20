var util = require('util'); 
var Q = require('q');
var CreateConnection = require('./CreateConnection');
var sql = new CreateConnection();
//connection.connect();
var AuthorID = new Number();

function Update(){
  this.UpdateBook = function(sqlList){
    var bookUpdateSql = "UPDATE book SET TiTle = ?,AuthorID = ?,Publisher = ?,PublishDate = ?, Price = ? WHERE ISBN = ?";
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(bookUpdateSql,sqlList,function (err, result) {
        if (err) {
          console.log(err);
          reject(false);

        } else {
            //connection.end();
            console.log('更新成功');
            resolve(true)
          }
      });
    })
  }
}


module.exports = Update;



