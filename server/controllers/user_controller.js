var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  createNewUser: function(req, res){
    console.log(req.body);
  }
}
