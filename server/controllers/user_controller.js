var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
  createNewUser: function(req, res){
    var user = new User(req.body);
    user.save(function(err, newUser){
      if(err){
        console.log('error registering new user', err);
      } else {
        req.session.user = newUser;
        req.session.save();
        res.json(newUser);
      }
    })
  },
  login: function(req, res){
    User.findOne({username: req.body.username}, function(err, user){
      if(err) {
        console.log('error loging in user', err);
      } else if (!user) {
        console.log('no user');
        res.json({status: false});
      } else {
        if(user.validatePassword(req.body.password)){
          req.session.user = user;
          req.session.save();
          res.json({status: true, user: user});
        }else{
          console.log(err);
          res.json({status: false});
        }
      }
    })
  },
  check: function(req, res){
    if(!req.session.user){
      res.send(null);
    }
    else{
      res.json(req.session.user);
    }
  },
  logout: function(req, res){
    req.session.destroy();
    res.redirect('/');
  }
}
