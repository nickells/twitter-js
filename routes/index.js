var express = require('express');
var router = express.Router();

var tweetBank = require ('../tweetBank');


router.get('/',function(req,res){

	var tweets = tweetBank.list();
	res.render('index', {
		title:'Twitter.js',
		tweets: tweets,
		showForm: true });
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  console.log(name);
  var list = tweetBank.find( {name: name} );
  // console.log(list);
  res.render( 'index', { title: 'Twitter.js - Posts by '+ name, tweets: list, name: name, showForm: true } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
	var name = req.params.name;
	var id = +req.params.id;
	var thisTweet = tweetBank.find({id: id});
	res.render( 'index', { title: 'Twitter.js - A Post By '+ name, tweets: thisTweet} );

});

router.post('/submit', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});


module.exports = router;