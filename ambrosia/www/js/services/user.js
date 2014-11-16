ambrosia.service('userService', function($http, $firebase, foodService, NUTRITION_REF, NUTRITION_KEY, NUTRITION_SECRET, FIREBASE_REF, userSession) {

 //  var firebase = new Firebase(FIREBASE_REF);
 //  this.user = {};
 //  var that = this;
 //  firebase.onAuth(function(authData) {
 //  	if (authData) {
 //    	var user = firebase.child('users').child(authData.uid);
 //    	console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
 //    	var sync = $firebase(user);
 //  		that.user = sync.$asObject();
 //  		console.log(that.user);
 //  	} else {
 //    	// user is logged out
 //  	}
	// });

	var firebase_users = new Firebase(FIREBASE_REF).child('users');



	this.addToPlanner = function(userID, foodItem) {
		var user = firebase_users.child(userID);
		user.child('planner').push(foodItem);
	}

	this.removeFromPlanner = function(userID, foodItem) {
		var user = firebase_users.child(userID);

	}

	this.addToHistory = function(userID, foodItem) {
		var user = firebase_users.child(userID);
		user.child('history').push(foodItem);
	}


});
