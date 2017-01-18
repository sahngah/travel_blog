var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {
  addComment: function(req, res){
    console.log(req.body);
    User.findOne({_id: req.body.userid}, function(err, user){
      if(err){
        res.json({status:false});
      }else{
      Post.findOne({_id: req.body.postid}, function(err, post){
        if(err){
          res.json({status:false});
        }else{
          delete req.body.userid;
          delete req.body.postid;
          var comment = new Comment(req.body).save(function(err, comment){
            if(err){
              res.json({status:false});
            }else{
              comment.post.push(post);
              comment.save(function(err, comment){
                comment.user.push(user);
                comment.save(function(err, comment){
                  res.json({status:true, comment: comment});
                  })
                })
              }
            })
          }
        })
      }
    })
  },
  loadComments: function(req, res){
    Comment.find({}).populate('user').populate('post').exec(function(err, comments){
      if(err){
        res.json({status:false});
      }else{
        res.json({status: true, comments: comments});
      }
    })
  },
  deleteall: function(req, res){
    Comment.remove({}, function(err, data){
      res.json(data);
    })
  },
  deleteone: function(req, res){
    Comment.remove({_id: req.params.id}, function(err, comment){
      Post.find({}, function(err, data){
        res.json(data);
      })
    })
  }
}
