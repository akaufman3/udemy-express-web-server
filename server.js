var express = require('express');
// create express app
var app = express();

// create a route
// req = request = all the information sent from the user, url, json, etc.
// res = response = what you want to send back
app.get('/', function(req, res) {
	res.send('Hello express');
});

app.get('/about', function(req, res) {
	res.send('About us');
});

// tell app to listen
app.listen(3000);