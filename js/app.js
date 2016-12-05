
var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

myApp.config(['$routeProvider',  function($routeProvider) {

  $routeProvider.
    when('/login', {
      templateUrl: 'views/login.html',
      controller: 'RegistrationController'
    }).
    when('/users/:user_id', {
      templateUrl: 'views/users.html',
      controller: 'RegistrationController'
    }).
    when('/register', {
      templateUrl: 'views/register.html',
      controller: 'RegistrationController'
    }).
    when('/success', {
      templateUrl: 'views/success.html',
      controller: 'SuccessController'
    }).
    otherwise({
      redirectTo: '/login'
    });
}]);