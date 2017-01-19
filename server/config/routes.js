var post = require('./../controllers/post_controller.js');
var user = require('./../controllers/user_controller.js');
var comment = require('./../controllers/comment_controller.js')

module.exports = function(app){
  app.post('/post/new', post.addpost)
  .get('/yay', post.loadposts)
  .delete('/post/delete/:id', post.deletepost)
  .get('/post/one/:id', post.onePost)
  .post('/post/edit/:id', post.editPost)
  .post('/user/new', user.createNewUser)
  .post('/user/login', user.login)
  .get('/user/check', user.check)
  .get('/user/logout', user.logout)
  .post('/comment/new', comment.addComment)
  .get('/comment/all', comment.loadComments)
  .get('/comment/delete', comment.deleteall)
  .delete('/comment/delete/:id', comment.deleteone)
}
