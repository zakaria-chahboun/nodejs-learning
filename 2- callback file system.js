
var fs = require('fs'); // load - fs : file system

//data = fs.readFileSync('text.txt');// this operation called : "blocking"
//console.log(data.toString());

// this operation called : "callback" (non-blocking)
// .readFile(path,function(err,data))
fs.readFile("text.txt",function(err,mydata){
	if(err)
	return console.log("You have some error! Try again");
	console.log('::::::::: [1] ::::::::');	
	console.log(mydata.toString());	
});
