var app = require("./1- module and require - second");

app.sayHello("zaki");
console.log(app.info);

// LOOP TEST
var mytab = ["zakaria","afaf","noor","sarra"];
var i = 0;
mytab.forEach(function(val){
	console.log(i+"| "+val);
	i++;
});

