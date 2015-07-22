var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', function(req, res){
	res.send('<form method="post" action="/formsubmit"><input name="email" type="email"><input type="submit"></form>');
});

app.post('/formsubmit', function(req, res){
	res.redirect('success');
});


var server = app.listen(6901, function() {
	console.log('Express server listening on port ' + server.address().port);
});
