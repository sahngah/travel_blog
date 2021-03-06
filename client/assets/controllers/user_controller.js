app.controller('user_controller', ['$scope', 'user_factory', '$location', function($scope, UF, $location){
  UF.check(function(output){
    $scope.curUser = output;
  })
  $scope.createNewUser = function(){
    UF.createNewUser($scope.newUser, function(output){
      $scope.curUser = output;
      $location.path('/');
    });
  }
  $scope.login = function(){
    UF.login($scope.oldUser, function(output){
      $scope.curUser = output;
      $location.path('/');
    })
  }
  }]);
