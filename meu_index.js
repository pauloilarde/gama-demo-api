var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(bodyParser.json());

app.get('/api/user', function (req, res) { 
// quando eu adiciono a rota: '/api/user', para de funcionar
// eu não consegui identificar o porque
  res.send('Hello World! Gama' );
});

app.get("/db", function(req, res){
	MongoClient.connect('mongodb://demoUser:Gama@ds063406.mlab.com:63406/demo', function(err, db) {
		if (err) {
			throw err;
		}
		db.collection('teste').find().toArray(function(err, result) {
		if (err) {
		  throw err;
		}
		res.send(result);
		});
	});
});

app.post('/api/user', function (req, res) {
	try{
		MongoClient.connect('mongodb://demoUser:Gama@ds063406.mlab.com:63406/demo', function(err, db){
			collection.save(res.body)
				.then(function (result))


		});
	}


});
  

  

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});