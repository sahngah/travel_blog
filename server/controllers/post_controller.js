var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var User = mongoose.model('User');

module.exports = {
  addpost: function(req, res){
    User.findOne({username: "sahngah"}, function(err, admin){
      if(err){
        console.log(err);
      }else{
        req.session.admin = admin;
        if(req.body.userid != req.session.admin._id){
          res.status(401).json({status:false});
        }else{
          delete req.body.userid;
          var post = new Post(req.body);
          post.save(function(err){
            if(err){
              console.log('the error is...', err);
              res.status(500).json({status:false})
            }else{
              Post.find({}, function(err, data){
                res.json(data);
              })
            }
          })
        }
      }
    })
  },
  loadposts: function(req, res){
    Post.find({}, function(err, data){
      res.json(data);
    })
  },
  deletepost: function(req, res){
    Post.remove({_id: req.params.id}, function(err, data){
      Post.find({}, function(err, data){
        res.json(data);
      })
    })
  },
  onePost: function(req, res){
    Post.findOne({_id: req.params.id}, function(err, data){
      res.json(data);
    })
  },
  editPost: function(req, res){
    console.log('request.body', req.body);
    Post.update({_id: req.params.id}, req.body, function(err, data){
      res.json(data);
    })
  }
}
