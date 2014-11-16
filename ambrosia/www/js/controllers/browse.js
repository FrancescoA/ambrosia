ambrosia.controller('BrowseCtrl', function($scope, $ionicPopup, foodService, userService, userSession) {


  $scope.searchText = "";

  $scope.foods = foodService.foods;

  $scope.filtered = [];
  $scope.search = function(query) {
  	foodService.search(query).then(function(response){
      $scope.foods = foodService.cleanData(response.data);
      console.log($scope.foods);
    });
  }
 
  // A confirm dialog
 $scope.showConfirm = function(item) {
  console.log(item);
   var confirmPopup = $ionicPopup.confirm({
     title: 'Add to planner',
     template: 'Are you sure you want add this to your planner?'
   });
   confirmPopup.then(function(res) {
      userService.addToPlanner(userSession.user.uid, item);
   });
 }



  $scope.show_section = {};

	$scope.section_click = function(section, $event) {
      console.log(section);
	    $scope.show_section[section] = !$scope.show_section[section];
	    $scope.$broadcast('scroll.resize');
	};
});