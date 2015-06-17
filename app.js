var express = require('express');
var morgan = require('morgan')
var swig = require('swig')
var tweetBank = require ('./tweetBank')
var routes = require('./routes');
var bodyParser = require('body-parser')
var socketio = require('socket.io')

var app = express();

var jsonParser = bodyParser.json();
var urlParser = bodyParser.urlencoded({ extended: false });


app.use(jsonParser);
app.use(urlParser);

app.use('/', routes);
//allow static files from public
app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.engine('html',swig.renderFile);

app.set('view engine','html')

app.set('views', __dirname + '/views')

swig.setDefaults({ cache: false });


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


// app.get('/', function (req, res) {

// // res.send(swig.renderFile('./views/index.html', {title: 'Hall of Fame', people: people}));
//   res.render( 'index.html', {title: 'Hall of Fame', people: people} );
// });

// // test



// app.use('/',function (req, res) {
//   res.send('Today\'s weather is pretty good');
// });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);

});

var io = socketio.listen(server);