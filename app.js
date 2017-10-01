var express = require('express')
var app = express ()
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('home')
})

app.post('/addfriend', function (req, res) {
  console.log(req.body);
  res.send('You Have Reached The Post Route')
})

app.get('/friends', function (req, res) {
  var friends = ['Molly', 'Moo', 'Christian', 'Joey', 'Dante']
  res.render('friends', {friends: friends})
})

app.listen(3000, function () {
  console.log('You started the server');
})
