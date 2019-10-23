var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res) {
  res.render('onlineSB');
});

app.post('/', urlencodedParser, function(req, res) {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body)
  res.render('SendData', {data: req.body});
});

app.get('/onlineSBotherCity', function(req, res) {
  res.render('onlineSBotherCity');
});

app.get('/transition', function(req, res) {
  res.render('transition');
});

app.get('/SendData', function(req, res) {
  res.render('SendData');
});

app.listen(3000);