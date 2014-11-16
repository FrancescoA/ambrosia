ambrosia.service('userService', function($http, $firebase, foodService, NUTRITION_REF, NUTRITION_KEY, NUTRITION_SECRET, FIREBASE_REF, userSession) {

  var firebase = new Firebase(FIREBASE_REF);
  this.planner = [];
  this.history = [];
  var that = this;
  firebase.onAuth(function(authData) {
  	if (authData) {
    	var user = firebase.child('users').child(authData.uid);
    	
    	var planner_sync = $firebase(user.child('planner'));
    	var history_sync = $firebase(user.child('history'));

    	that.planner = planner_sync.$asArray();
    	that.history = history_sync.$asArray();
    	
  	} else {
    	// user is logged out
  	}
	});

	var firebase_users = new Firebase(FIREBASE_REF).child('users');




	this.addToPlanner = function(userID, foodItem) {
		var user = firebase_users.child(userID);
		console.log(userID);
		console.log(foodItem);
		delete foodItem.$$hashKey;
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
