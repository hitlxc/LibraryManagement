var httpserver = require("http");
var path = require('path');
var qs = require("querystring");
var url = require("url");
var fs = require("fs");
var util = require('util'); 
var express = require('express');
var app = express();

app.use(express.static(path.join('public')));

var GetBookByAuthorName = require('./GetBookByAuthorName');
var getbookbyauthor = new GetBookByAuthorName();

var GetBookByName = require('./GetBookByName');
var getbookbyname = new GetBookByName();

var CreateBook = require('./CreateBook');
var createbook = new CreateBook();

var CreateAuthor = require('./CreateAuthor');
var createauthor = new CreateAuthor();

var Delete = require('./Delete');
var Delete = new Delete();

var Update = require('./Update');
var update = new Update();

var GetAuthor = require('./GetAuthor');
var getauthor = new GetAuthor();

app.get('/', function (request, response) {
    fs.readFile("index.html","utf-8",function(e,data){
		response.send(data);
    });
})

app.get('/GetBookByAuthor', function (request, response) {
	try{
	   	var a = url.parse(request.url).query;
	   	var name = qs.parse(a).author;
		getbookbyauthor.getAuthorID(name).then(getbookbyauthor.getBook).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/GetBookByName',function (request, response) {
	try{
		var a = url.parse(request.url).query;
	   	var book = qs.parse(a).book;
		getbookbyname.getBook(book).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/CreateBook',function (request, response) {
	try{
		var a = url.parse(request.url).query;
		var ISBN = qs.parse(a).ISBN;
	   	var Title = qs.parse(a).Title;
		var AuthorID = qs.parse(a).author;
		var Publisher = qs.parse(a).publisher;
		var PublishDate = qs.parse(a).publishdate;
		var Price = qs.parse(a).price; 
		var sqlList = [ISBN,Title,AuthorID,Publisher,PublishDate,Price];
		createbook.CreateBook(sqlList).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/CreateAuthor',function (request, response) {
	try{
		var a = url.parse(request.url).query;
		var AuthorID = qs.parse(a).AuthorID;
	   	var Name = qs.parse(a).Name;
		var Age = qs.parse(a).Age;
		var Country = qs.parse(a).Country;
		var sqlList = [AuthorID,Name,Age,Country];
		createauthor.CreateAuthor(sqlList).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/DeleteBook',function (request, response) {
	try{
		var a = url.parse(request.url).query;
		var Title = qs.parse(a).Title;
		Delete.DeleteBookByTitle(Title).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/DeleteAuthor',function (request, response) {
	try{
		var a = url.parse(request.url).query;
		var Name= qs.parse(a).Name;
		Delete.DeleteAuthorByName(Name).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/UpdateBook',function (request, response) {
	try{

		var a = url.parse(request.url).query;
		var Title= qs.parse(a).Title;
		var AuthorID= qs.parse(a).author;
		var Publisher= qs.parse(a).publisher;
		var PublishDate= qs.parse(a).publishdate;
		var Price= qs.parse(a).price;
		var ISBN= qs.parse(a).ISBN;
		var sqlList = [Title,AuthorID,Publisher,PublishDate,Price,ISBN];
		update.UpdateBook(sqlList).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

app.get('/SearchAuthor',function (request, response) {
	try{
		var a = url.parse(request.url).query;
		var Name= qs.parse(a).Name;
		getauthor.GetAuthor(Name).then(function(data){
			response.send(data);
		}).catch(function(err){
			response.send(false);
		});
	} catch(e){
		response.send(false);
	}
})

var server = app.listen(8081, function () {
	var host = server.address().address;
 	var port = server.address().port;
})
