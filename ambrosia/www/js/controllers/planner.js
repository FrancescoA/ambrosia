ambrosia.controller('PlannerCtrl', function($scope, FIREBASE_REF, userSession, userService) {
  console.log('PlannerCtrl');

  $scope.planner = userService.planner;



  $scope.removeItem = function(item){
  	userService.planner.$remove(item);
  }

  $scope.addItemToHistory = function(item){
  	userService.history.$add(item);
  	$scope.removeItem(item);
  }


})