ambrosia.controller('PlannerCtrl', function($scope, Friends) {
  console.log('PlannerCtrl');
  $scope.friends = Friends.all();
})