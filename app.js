var express = require('express');
var morgan = require('morgan')
var swig = require('swig')
var app = express();

app.use(morgan('dev'));

app.engine('html',swig.renderFile);

app.set('view engine','html')

app.set('views', __dirname + '/views')

swig.setDefaults({ cache: false });


var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.get('/', function (req, res) {
  res.render( 'index', {title: 'Hall of Fame', people: people} );
});

// test

// app.get('/news', function (req,res,next){
// 	console.log("Someone accessed the news");
// 	next();
// })

// app.use('/',function (req, res) {
//   res.send('Today\'s weather is pretty good');
// });

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);


});