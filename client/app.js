var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html'
  })
  .when('/lasvegas', {
    templateUrl: './partials/lasvegas.html'
  })
  .when('/post/new', {
    templateUrl: './partials/new.html'
  })
  .when('/newyork', {
    templateUrl: './partials/newyork.html'
  })
  .when('/losangeles', {
    templateUrl: './partials/losangeles.html'
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
  .when('/miami', {
    templateUrl: './partials/miami.html'
  })
  .when('/boston', {
    templateUrl: './partials/boston.html'
  })
  .when('/seattle', {
    templateUrl: './partials/seattle.html'
  })
  .when('/singapore', {
    templateUrl: './partials/singapore.html'
  })
  .when('/cancun', {
    templateUrl: './partials/cancun.html'
  })
  .when('/portland', {
    templateUrl: './partials/portland.html'
  })
  .otherwise({
    redirectTo: '/'
  })
})
