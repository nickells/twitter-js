var express = require('express');
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function(request, response){
  var tweets = tweetBank.list();
  response.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list, showForm: true, n: name } );
});

router.get('/users/:name/tweets/:id', function(req, res){
	var name = req.params.name;
	var id = Number(req.params.id);
	var list = tweetBank.find({name: name, id: id});
	res.render('index', { title: 'Twitter.js - Posts by '+name, tweets: list });
});

router.post('/submit', function(req, res){
	console.log(req);
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
});

module.exports = router;

