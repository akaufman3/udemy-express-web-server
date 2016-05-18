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

// tell express to expose an entire folder (public) in our server
app.use(express.static(__dirname + '/public'));

// tell app to listen
app.listen(3000);
