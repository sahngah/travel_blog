var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var session = require('express-session');

var imgPath = './path/img.png';

app.use(express.static(path.join(__dirname + '/client')))
app.use(express.static(path.join(__dirname + '/client/assets')))
app.use(express.static(path.join(__dirname + '/bower_components')))
app.use(bp.json());
app.use(session({
  secret: 'secretsecret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(1111, function(){
  console.log('running on port 1111!');
})
