app.factory('post_factory_one', function($http, $location){
  var factory = {};
  factory.newpost = function(data, cb){
    $http.post('/post/new', data).success(function(output){
      if(output.status == false){
        alert('something went wrong!')
      }
      else{
        cb(output);
      }
    })
  };
  factory.posts = [];
  factory.loadposts = function(cb){
    $http.get('/yay').success(function(output){
      factory.posts = output;
      cb(output);
    })
  };
  factory.delete = function(id, cb){
    $http.get('/post/delete/' + id).success(function(output){
      cb(output);
    })
  };
  factory.onePost = function(id, cb){
    $http.get('/post/one/' + id).success(function(output){
      cb(output);
    })
  }
  factory.editThisPost = function(post, cb){
    $http.post('/post/edit/' + post.postid , post).success(function(output){
      if(output != null){
        cb(output);
      }else{
        alert('something went wrong! unable to edit')
        $location.path('/');
      }
    })
  }
  factory.addComment = function(comment, cb){
    $http.post('/comment/new', comment).success(function(output){
      if(output.status == false){
        alert('something went wrong, unable to post a comment!')
      }else{
        cb(output.comment);
      }
    })
  }
  factory.loadComments = function(cb){
    $http.get('/comment/all').success(function(output){
      if(output.status == false){
        alert('something went wrong, unable to load comments');
      }else{
        cb(output.comments);
      }
    })
  }
  factory.deleteComment = function(id, cb){
    $http.get('/comment/delete/' + id).success(function(output){
      cb(output);
    })
  }
  // factory.deleteComments = function(cb){
  //   $http.get('/comment/delete').success(function(output){
  //     cb(output);
  //   })
  // }
  return factory;
})
