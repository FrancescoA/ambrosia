ambrosia.controller('LoginCtrl', function($scope, FIREBASE_REF, $firebaseSimpleLogin, userSession) {
	userSession.auth=$firebaseSimpleLogin(new Firebase(FIREBASE_REF));
	
	console.log(FIREBASE_REF);

	var firebase = new Firebase(FIREBASE_REF);


    $scope.login=function(provider){
    	console.log(provider);
        firebase.authWithOAuthPopup(provider, function(error, authData) {
        	userSession.user = authData;
        });
    }

})