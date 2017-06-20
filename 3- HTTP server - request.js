/*create a HTTP server*/

var http=require('http'); // define HTTP server

var url=require('url');

var myHttp = http.createServer(function(request,response){
	var query = url.parse(request.url,true).query; // all
	console.log(query.name);// data format "../?name=blabla" as a query
});// callback function

myHttp.listen(8888);// port

console.log("we listen to http://127.0.0.1:8888");