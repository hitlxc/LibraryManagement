var util = require('util'); 
var Q = require('q');
var CreateConnection = require('./CreateConnection');
var sql = new CreateConnection();
sql.connection.connect();
var AuthorID = new Number();

function GetBookByAuthorName(){
  this.getAuthorID = function(Name){
    var AuthorIDGetSql = 'SELECT AuthorID FROM author WHERE Name = "'+Name+'"' ;
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(AuthorIDGetSql,function (err, result) {
        if (err) reject(err);
          else {
            try{
              AuthorID = result[0].AuthorID;
              resolve(AuthorID);
            }catch(e){
              console.log(e);
              reject(e);
            }
          }
      });
    })
  }

  this.getBook = function(AuthorID){
    var  bookGetSql = 'SELECT * FROM book,author WHERE book.AuthorID = ' + AuthorID + ' AND book.AuthorID = author.AuthorID';
    return Q.promise(function(resolve,reject,notify){
      sql.connection.query(bookGetSql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
           return;
        }        
        resolve(result);
      });
    })
  }
}

module.exports = GetBookByAuthorName;

/*getAuthorID("余华").then(getBook).then(function(result){
  console.log(result);
});*/

