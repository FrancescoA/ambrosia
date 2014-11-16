ambrosia.controller('BrowseCtrl', function($scope, $ionicPopup, foodService, userService) {


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
 $scope.showConfirm = function() {
  console.log("WORK");
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

  $scope.show_section = {};

	$scope.section_click = function(section, $event) {
      console.log(section);
	    $scope.show_section[section] = !$scope.show_section[section];
	    $scope.$broadcast('scroll.resize');
	};
});