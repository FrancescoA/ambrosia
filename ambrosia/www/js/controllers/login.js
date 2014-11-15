ambrosia.controller('LoginCtrl', function($scope, FIREBASE_REF, $firebaseSimpleLogin,userSession) {
	userSession.auth=$firebaseSimpleLogin(new Firebase(FIREBASE_REF));

    $scope.login=function(provider){
        userSession.auth.$login(provider);
    }

})