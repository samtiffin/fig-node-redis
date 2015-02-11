var redis   = require('redis');
var express = require('express');

var client = redis.createClient(6379, 'redis_1');
var app = express();

app.get('/', function( req, res ) {
	client.incr('hits');
	client.get('hits', function( err, hits ) {
		res.send('HI THERE, I HAVE BEEN VISITED ' + hits + ' TIMES');
	});
});

var server = app.listen(8008, function() {
	console.log('Listening at http://%s:%s',
		server.address().address,
		server.address().port);
});