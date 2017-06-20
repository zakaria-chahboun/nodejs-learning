/*
Read: from file (Stream)
Write: on response
with: pipes
*/

var fs = require('fs');
var http = require('http');

var server = http.createServer(function (req,res) {
	res.writeHead(200,{'Content-Type':'text/plain'});
	var myReadStream = fs.createReadStream('./text.txt','utf8');
	myReadStream.pipe(res);// response is writable Streams

}).listen(3000);

console.log('we listen to 127.0.0.1:3000');