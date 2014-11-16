ambrosia.controller('SearchResultCtrl', function($scope, foodService) {


  $scope.foods = {};
  $scope.search = function(query) {
  	foodService.search(query).then(function(response){
      $scope.foods = foodService.cleanData(response.data);
      console.log($scope.foods);
    });
  }

  $scope.show_section = {};

	$scope.section_click = function(section, $event) {
      console.log(section);
	    $scope.show_section[section] = !$scope.show_section[section];
	    $scope.$broadcast('scroll.resize');
	};
});