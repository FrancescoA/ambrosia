ambrosia.controller('SearchResultCtrl', function($scope, foodService) {


  $scope.foods = foodService.queryResult;

  $scope.show_section = {};

	$scope.section_click = function(section, $event) {
      console.log(section);
	    $scope.show_section[section] = !$scope.show_section[section];
	    $scope.$broadcast('scroll.resize');
	};
});