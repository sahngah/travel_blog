var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');

var imgPath = './path/img.png';

app.use(express.static(path.join(__dirname + '/client')))
app.use(express.static(path.join(__dirname + '/client/assets')))
app.use(express.static(path.join(__dirname + '/bower_components')))
app.use(bp.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(1111, function(){
  console.log('running on port 1111!');
})
