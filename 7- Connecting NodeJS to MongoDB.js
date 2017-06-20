/*
Connecting NodeJS to MongoDB - zakaria chahboun | 2017
*/

// Retrieve :: Récupérer
var MongoClient = require('mongodb').MongoClient, format = require('util').format;

// connect :: connecter
MongoClient.connect("mongodb://127.0.0.1:27017/market",function (err,db) {
	
	if(err)
	{
		console.log('Access denied to mongo-database :');
		throw err;
	}
	else
	{
		console.log('Connetion done!');

		var collection = db.collection('testdd');

		// insertion
		
		var book1 = {_id:1,title:"al khawarizmi", pric:150, date:"02-08-1996"};
		var book2 = {_id:2,title:"unix and c", price:350, date:"04-05-1984"};

		collection.insertMany([book1, book2], function (err, result) {
    	if (err) {
        console.error('Insert failed', err);
    	} else {
        console.log('Insert successful', result);
    	}
    	});
		

		// selection
		/*
		collection.find({price:{$lt:200,$gte:20}}).toArray(function (err,result) {// result is json format :)
			if(err) return console.log("cannot find any thing! check the name of collection or db");
			else if(result.length > 0){
				var x ='';
				result.forEach(function (value) {
				console.log(value.title+' : '+value.price+'$ '+' [ '+value._id+' ]');			
				if (value._id == '58fb79d46b49e4c50fa84d77') {// important - if we used forEach
					x = value.locations;
					console.log(x[0]);
					console.log(x[1]);
					console.log(x[2]);
				}
				});
			}
			else console.log("(vide)");
		});*/
		db.close(); // fermer la base
	}
});