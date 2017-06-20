/*
encription use "Crypto"
*/

var alr = require('crypto');

// var algorithm = alr.getHashes();// show all Hash type
// console.log(algorithm);

var algorithm = alr.createHash('sha1');// create a hash code of type sha1 : "secure hash algorithm 1"

algorithm.update("This is my text");// hashing data

console.log('data 1 : '+algorithm.digest('hex'));// convert to Hex code

//************************
// ::: hashing a file :::
//************************

var fs = require('fs'); // load file system
var hash = alr.createHash('sha1');

var file = fs.ReadStream('text.txt'); // text.txt file 
file.on('data',function (data) {
	hash.update(data);
});

file.on('end',function () {
	console.log('data 2 : '+hash.digest('hex'));
});
