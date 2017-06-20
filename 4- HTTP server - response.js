/*create a HTTP server with html, JSON response*/

var http=require('http'); // define HTTP server

// HTML data
var htmlPage = '<!DOCTYPE html><html><head><title>Hello NodeJs!</title></head>'
				+'<body><b>Hello From NodeJs server!</b></body>'
				+'</html>';
// JSON data				
var jsonData = {
	"name":"zaki",
	"age":21
	}

var myHttp = http.createServer(function(request,response){
	response.writeHead(200);// header/type of content
	response.write("Hello from nodejs server!");
	//response.write(JSON.stringify(jsonData));
	//response.write(htmlPage);// data to sending
	response.end();// close
});// callback function

myHttp.listen(8888);// port

console.log("we listen to http://127.0.0.1:8888");