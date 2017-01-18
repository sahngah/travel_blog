app.controller('post_controller_one', ['$scope', 'post_factory_one', '$routeParams', '$location', 'user_factory', function($scope, PF, $routeParams, $location, UF){
  UF.check(function(output){
    $scope.curUser = output;
  })
  PF.loadposts(function(data){
    $scope.posts = data;
  });
  PF.onePost($routeParams.id, function(data){
    $scope.onePost = data;
  })
  PF.loadComments(function(data){
    $scope.comments = data;
  })
  // PF.deleteComments(function(data){
  //   $scope.comments = data;
  // })
  $scope.newnew = function(userid){
    $scope.newPost.userid = userid;
    PF.newpost($scope.newPost, function(data){
    $scope.posts = data;
    });
    $location.path('/' + $scope.newPost.category);
  }
  $scope.delete = function(id){
    PF.delete(id, function(data){
      $scope.posts = data;
    });
  }
  $scope.editThisPost = function(postid, userid){
    $scope.editPost.postid = postid;
    $scope.editPost.userid = userid;
    PF.editThisPost($scope.editPost, function(data){
      $scope.onePost = data;
    });
    $location.path('/post/edit/' + $scope.onePost._id + '/');
  }
  $scope.addComment = function(userid, postid, postcategory){
    $scope.newComment.userid = userid;
    $scope.newComment.postid = postid;
    PF.addComment($scope.newComment, function(data){
      $scope.comment = data;
    })
    $location.path('/' + postcategory + '/');
  }
  $scope.deleteComment = function(id, postcategory){
    PF.deleteComment(id, function(data){
      $scope.comments = data;
    })
    $location.path('/' + postcategory + '/');
  }
}]);
