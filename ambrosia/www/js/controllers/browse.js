ambrosia.controller('BrowseCtrl', function($scope, foodService) {
  $scope.search = function(query) {
  	foodService.search();
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