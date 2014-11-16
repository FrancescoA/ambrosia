ambrosia.controller('HistoryCtrl', function($scope, userService) {
	console.log("HistoryCtrl");

	$scope.searchText = "";
	$scope.history = userService.history;


	
})