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
  $scope.newnew = function(userid){
    if(userid != $scope.curUser._id){
      $location.path('/');
    }else{
      $scope.newPost.userid = userid;
      PF.newpost($scope.newPost, function(data){
      $scope.posts = data;
    });
    $location.path('/' + $scope.newPost.category);
    }
  }
  $scope.delete = function(id){
    PF.delete(id, function(data){
      $scope.posts = data;
    });
  }
  $scope.editThisPost = function(id){
    PF.editThisPost(id, $scope.editPost, function(data){
      $scope.onePost = data;
    });
    $location.path('/post/edit/' + $scope.onePost._id + '/');
  }
}]);
