app.factory('user_factory', function($http, $location){
  var factory = {}
  factory.check = function(cb){
    $http.get('/user/check').success(function(output){
      if(output == null){
        cb(null);
      }else{
        cb(output);
      }
    })
  }
  factory.createNewUser = function(user, cb){
    $http.post('/user/new', user).success(function(output){
      if(output != null){
        alert('Successfully Registered!');
        cb(output)
      }else{
        alert('something went wrong! please try again.');
      }
    })
  }
  factory.login = function(user, cb){
    $http.post('/user/login', user).success(function(output){
      if(output.status == true){
        alert('Successfully Logged In!');
        cb(output.user);
      }else{
        alert('something went wrong! Check your information and try again!');
      }
    })
  }
  return factory;
})
