var post = require('./../controllers/post_controller.js');
var user = require('./../controllers/user_controller.js');
var comment = require('./../controllers/comment_controller.js')

module.exports = function(app){
  app.post('/post/new', function(req, res){
    post.addpost(req, res);
  })
  app.get('/yay', function(req, res){
    post.loadposts(req, res);
  })
  app.post('/post/delete/:id', function(req, res){
    post.deletepost(req, res);
  })
  app.get('/post/one/:id', function(req, res){
    post.onePost(req, res);
  })
  app.post('/post/edit/:id', function(req, res){
    post.editPost(req, res);
  })
  app.post('/user/new', function(req, res){
    user.createNewUser(req, res);
  })
  app.post('/user/login', function(req, res){
    user.login(req, res);
  })
  app.get('/user/check', function(req, res){
    user.check(req, res);
  })
  app.get('/user/logout', function(req, res){
    user.logout(req, res);
  })
  app.post('/comment/new', function(req, res){
    comment.addComment(req, res);
  })
  app.get('/comment/all', function(req, res){
    comment.loadComments(req, res);
  })
  app.get('/comment/delete', function(req, res){
    comment.deleteall(req, res);
  })
  app.post('/comment/delete/:id', function(req, res){
    comment.deleteone(req, res);
  })
}
