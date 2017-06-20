/*
Read/Write Streams | pipes
*/

var fs = require('fs');

var myReadStream = fs.createReadStream('./text.txt','utf8');
var myWriteStream = fs.createWriteStream('./text-copy.txt', 'utf8');

myReadStream.pipe(myWriteStream);// read and write ^^
