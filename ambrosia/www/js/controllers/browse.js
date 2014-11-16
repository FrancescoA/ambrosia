ambrosia.controller('BrowseCtrl', function($scope, foodService) {


  $scope.foods = {};
  $scope.search = function(query) {
  	foodService.search(query).then(function(response){
      $scope.foods = foodService.cleanData(response.data);
      console.log($scope.foods);
    });
  }

  $scope.show_section = {};
  $scope.patient = {
    allergies: [{label: 'bread'}, {label: 'butter'},{label: 'bread2'},{label: 'bread2'},{label: 'bread2'}]
  
  };
  
	$scope.section_click = function(section, $event) {
	    $scope.show_section[section] = !$scope.show_section[section];
	    $scope.$broadcast('scroll.resize');
	};
});