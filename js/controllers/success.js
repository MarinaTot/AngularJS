myApp.controller('SuccessController', ['$scope', function($scope) {
  $scope.message = "HI" + $scope.user.firstname;
}]);