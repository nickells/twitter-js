var express = require('express');
var morgan = require('morgan')
var swig = require('swig')
var tweetBank = require ('./tweetBank')
var routes = require('./routes');
var app = express();

app.use(morgan('dev'));

app.engine('html',swig.renderFile);

app.set('view engine','html')

app.set('views', __dirname + '/views')

swig.setDefaults({ cache: false });

app.use('/', routes);

app.use(express.static(__dirname + '/public'));

// var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get('/', function (req, res) {
// // res.send(swig.renderFile('./views/index.html', {title: 'Hall of Fame', people: people}));
//   res.render( 'index.html', {title: 'Hall of Fame', people: people} );
// });


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);


});