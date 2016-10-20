var util = require('util'); 
var Q = require('q');
var CreateConnection = require('./CreateConnection');
var sql = new CreateConnection();
sql.connection.connect();

function GetAuthor(){
  this.GetAuthor = function(Name){
    var AuthorIDGetSql = 'SELECT * FROM author WHERE Name = "'+Name+'"' ;
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(AuthorIDGetSql,function (err, result) {
        if (err) reject(err);
          else {
            try{
              resolve(result);
            }catch(e){
              console.log(e);
              reject(e);
            }
          }
      });
    })
  }
}

module.exports = GetAuthor;

/*getAuthorID("余华").then(getBook).then(function(result){
  console.log(result);
});*/

