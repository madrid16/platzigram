var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('Hola mundo!')
})

app.listen(3000, function(err){
	if(err){
		return console.log("Existió un error"), process.exit(1);
	}
	console.log("Platzigram escuchando en el puerto 3000");
})