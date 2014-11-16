ambrosia.controller('SearchResultCtrl', function($scope, foodService, $ionicPopup, userService) {


  $scope.foods = foodService.queryResult;

  $scope.show_section = {};


  $scope.showConfirm = function(item) {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Add to planner',
     template: 'Are you sure you want add this to your planner?'
   });
   confirmPopup.then(function(res) {
      userService.addToPlanner(userSession.user.uid, item);
   });
 }


	$scope.section_click = function(section, $event) {
      console.log(section);
	    $scope.show_section[section] = !$scope.show_section[section];
	    $scope.$broadcast('scroll.resize');
	};
});