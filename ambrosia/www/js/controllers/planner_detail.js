ambrosia.controller('PlannerDetailCtrl', function($scope, $stateParams, Friends) {
  console.log("PlannerDetailCtrl");
  $scope.friend = Friends.get($stateParams.friendId);
})