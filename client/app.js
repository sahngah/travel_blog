var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html'
  })
  .when('/lasvegas', {
    templateUrl: './partials/link1.html'
  })
  .when('/post/new', {
    templateUrl: './partials/new.html'
  })
  .when('/newyork', {
    templateUrl: './partials/newyork.html'
  })
  .when('/losangeles', {
    templateUrl: './partials/link2.html'
  })
  .when('/post/edit/:id', {
    templateUrl: './partials/edit.html'
  })
  .when('/user/login', {
    templateUrl: './partials/login.html'
  })
  .when('/about', {
    templateUrl: './partials/about.html'
  })
  .when('/sanfrancisco', {
    templateUrl: './partials/sanfrancisco.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
