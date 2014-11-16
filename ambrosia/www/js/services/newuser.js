ambrosia.service('newUserService', function($http, foodService, FIREBASE_REF, NUTRITION_REF, NUTRITION_KEY, NUTRITION_SECRET, userSession, DEFAULT_RESTAURANTS) {

	this.generateData = function(userId) {
		var firebase = new Firebase(FIREBASE_REF);
		for (var i = 0 ; i < DEFAULT_RESTAURANTS.length ; i++) {
			var restaurant = DEFAULT_RESTAURANTS[i];
			console.log(restaurant);
			foodService.searchBrand(restaurant).then(function(response) {
				var processed = foodService.cleanData(response.data);
				firebase.child('users').child(userId).child('restaurants').push(processed[0]);
			});
		}
	}
});


