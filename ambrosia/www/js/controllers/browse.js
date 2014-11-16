ambrosia.controller('BrowseCtrl', function($scope, foodService) {
  $scope.search = function(query) {
  	foodService.search();
  }
});