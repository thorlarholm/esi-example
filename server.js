var express = require('express');
var esi = require('esi');
var cons = require('consolidate');

var app = express();

// Setup ESI hooks
app.use(esi);

// Render a simple page with an ESI include
app.get('/', function index(req, res, next) {
	console.log("Called index route");
	res.render('index');
});

// Define our ESI include, could be external
app.get('/snippet', function snippet(req, res, next) {
	console.log("Called snippet route");
	res.render('snippet');
});

// Port
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));
console.log('Listening on ' + app.get('port'));

// Views
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

module.exports = app;
