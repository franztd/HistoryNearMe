app.controller('NewLocationController', ['$scope', '$http', '$location', function($scope, $http, $location) {
  $scope.saveAddress  = function() {
      address = $scope.userAddress;
      $location.url('/');
  };
}]);