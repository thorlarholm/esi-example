var express = require('express');
var esi = require('esi');

// Main application
var app = express();
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

// Setup ESI hooks
app.use(esi);

// Render a simple page with an ESI include
function index(res, res, next) {
	var snippetURL = 'http://localhost:' + app.get('port') + '/snippet';

	var html = '<!DOCTYPE html><html><body><p>Index</p><esi:include src="' + snippetURL + '"></esi:include></body></html>'

	res.send(html);

}
app.get('/', index);

// Define our ESI include, could be external
function snippet(res, res, next) {
	res.send('<p>Hello from snippet included via ESI</p>');
}
app.get('/snippet', snippet);

module.exports = app;
