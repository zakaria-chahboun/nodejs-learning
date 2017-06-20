/*
Read POST data
*/

var http=require('http'); // define HTTP server
var qs=require('querystring');

// HTML data
var htmlForm = '<!DOCTYPE html><html><head><title>Hello NodeJs!</title></head>'
				+'<body>'
				+'<b>Hello From NodeJs server!</b>'
				+'<form action="/" method="post">'
				+'<input type="text" name="name" value="zakaria"/>'
				+'<input type="text" name="job" value="etudient"/>'
				+'<input type="submit" value="Submit!"/>'
				+'</form>'
				+'</body>'
				+'</html>';


var myHttp = http.createServer(function(request,response){
	if(request.method.toLowerCase() == 'post')
	{
		var body ="";
		request.on('data',function(data){
			body += data;// query format "../?name=..&job=..."
		});
		request.on('end',function(){
			var query = qs.parse(body);// query to json
			//console.log('name : '+query.name);
			// console.log('job : '+query.job);
			response.end('name : '+query.name + ", "+'job : '+query.job);
		});
	}else{
		response.end(htmlForm);
	}
});// callback function

myHttp.listen(8888);// port

console.log("we listen to http://127.0.0.1:8888");