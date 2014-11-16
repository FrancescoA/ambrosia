ambrosia.controller('HistoryCtrl', function($scope, userService) {
	console.log("HistoryCtrl");

	$scope.history = userService.history;


	$scope.isAnalyze = false;
	
})