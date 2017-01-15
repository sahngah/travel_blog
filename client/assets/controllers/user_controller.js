app.controller('user_controller', ['$scope', 'user_factory', function($scope, UF){
  $scope.createNewUser = function(){
    UF.createNewUser($scope.newUser);
  }
  $scope.login = function(){
    console.log($scope.oldUser);
  }
  }]);
