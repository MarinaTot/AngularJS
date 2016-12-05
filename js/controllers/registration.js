myApp.controller('RegistrationController',
['$scope','authservice', '$routeParams', 
  function($scope,authservice,$routeParams) {

  $scope.login = function() {
  		authservice.login($scope.user,$scope.users);     
  };
  $scope.logout = function(){
    authservice.logout();
    $cookieStore.remove($scope.user.id);
  }
  $scope.register = function() {
    authservice.registration($scope.user, $scope.users);
	}
  $scope.getAll = function(){
    authservice.getAll();
  };
  $scope.getUserById = function(){
   authservice.getUserById($routeParams.user_id);
  };
  $scope.button = function(){
    if($routeParams.user_id){
      return true;
    }
      return false;
  };

}]);