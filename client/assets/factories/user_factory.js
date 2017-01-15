app.factory('user_factory', function($http){
  var factory = {}
  factory.createNewUser = function(user){
    $http.post('/user/new', user)
  }
  return factory;
})
