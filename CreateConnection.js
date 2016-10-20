var mysql  = require('mysql');  

function CreateConnection(){
	var self = this;
	this.connection = mysql.createConnection({
		  host     : '127.0.0.1',       
		  user     : 'root',              
		  password : '',       
		  port: '3306',                   
		  database: 'bookdb', 
		}); 	
	
	this.end = function(){
		console.log('准备断开连接');
		self.connection.end(function(err){
		    if(err){        
		        console.log(err)
		    }
		    console.log('已经断开连接');
		});
	}
}


module.exports = CreateConnection;