ambrosia.controller('SearchCtrl', function($scope) {


	$scope.p_lowerLimit = 0;
	$scope.p_upperLimit = 0;
    $scope.c_lowerLimit = 0;
    $scope.c_upperLimit = 0;
    $scope.f_lowerLimit = 0;
    $scope.f_upperLimit = 0;

    $scope.proteinToCal = 4;
    $scope.carbToCal = 4;
    $scope.fatToCal = 9;
    $scope.total_lowerLimit = 0;
    $scope.total_upperLimit = 0;


  $scope.makeQuery = function() {
  	var query_obj = {
  		protein: {
  			low: $scope.p_lowerLimit;
  			high: $scope.p_upperLimit;
  		},
  		carbs: {
  			low: $scope.c_lowerLimit;
  			high: $scope.c_upperLimit;
  		},
  		fat: {
  			low: $scope.
  		}


  	};
  }

  $('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {

        $(this).parent().find('.item-note').text(leftValue + "  -  " + rightValue + " (g)");
        if ($(this).attr("name") == "protein" ){
        	$scope.p_lowerLimit = leftValue;
            $scope.p_upperLimit = rightValue;
        }
        else if ($(this).attr("name") == "carb" ){
            $scope.c_lowerLimit = leftValue;
            $scope.c_upperLimit = rightValue;            
        }
        else if ($(this).attr("name") == "fat" ){
            $scope.f_lowerLimit = leftValue;
            $scope.f_upperLimit = rightValue;            
        }
        $scope.total_lowerLimit = $scope.p_lowerLimit * $scope.proteinToCal + $scope.c_lowerLimit * $scope.carbToCal + $scope.f_lowerLimit * $scope.fatToCal;
        $scope.total_upperLimit = $scope.p_upperLimit * $scope.proteinToCal + $scope.c_upperLimit * $scope.carbToCal + $scope.f_upperLimit * $scope.fatToCal;
        $('[name="totalCal"]').find('.item-note').text($scope.total_lowerLimit + "  -  " + $scope.total_upperLimit);
        
        
    }
	});

});