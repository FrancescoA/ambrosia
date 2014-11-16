ambrosia.controller('LoginCtrl', function($scope, $state, newUserService, FIREBASE_REF, userSession) {

	console.log(FIREBASE_REF);

	var firebase = new Firebase(FIREBASE_REF);

    $scope.login = function(provider){
    	console.log(provider);
        firebase.authWithOAuthPopup(provider, function(error, authData) {
        	console.log(authData);
        	firebase.child('users').child(authData.uid).once('value', function(snapshot){
        		console.log(snapshot);
        		var exists = (snapshot.val() !== null);
        		if (exists) {
        			userSession.user = authData;
        		} else {
        			firebase.child('users').child(authData.uid).set(authData);
        			newUserService.generateData(authData.uid);
        			userSession.user = authData;
        		}
        	});
        	$state.go('tab.main');
        });
    }

});