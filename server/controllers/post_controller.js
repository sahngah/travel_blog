var mongoose = require('mongoose');
var Post = mongoose.model('Post')

module.exports = {
  addpost: function(req, res){
    console.log('in my post controller1', req.body);
    var post = new Post(req.body);
    post.save(function(err){
      if(err){
        console.log('the error is...', err);
        res.json({status:false})
      }else{
        Post.find({}, function(err, data){
          res.json(data);
        })
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
