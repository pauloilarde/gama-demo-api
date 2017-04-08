var express = require('express');
var bodyParser = require('body-parser')
var MongoClient = require('mongodb').MongoClient


var app = express()

app.use(bodyParser.json())


app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port 3000!');
});

MongoClient.connect('mongodb://demoUser:gama@ds155490.mlab.com:55490/demo', function (err, db) {
    if (err) {
        throw err;
    }

    require('./routes/user.routes')(app, db)

    console.log('banco de dados conectado')
});