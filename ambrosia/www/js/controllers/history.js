ambrosia.controller('HistoryCtrl', function($scope, userService) {
	console.log("HistoryCtrl");

	$scope.history = userService.history;


	$scope.isAnalyze = false;


	var historySum = function(history) {
		var protein = {name: 'protein', value: 0};
		var carbs = {name: 'carbs', value: 0};
		var fat = {name: 'fat', value: 0};


		for(var i = 0 ; i < history.length; i++){
			var item = history[i];
			protein.value += item.nf_protein;
			carbs.value += item.nf_total_carbohydrate;
			fat.value += item.nf_total_fat;
		}
		return [protein,carbs,fat]
	}

	console.log(historySum($scope.history));

})