ambrosia.controller('PlannerCtrl', function($scope, FIREBASE_REF, userSession) {
  console.log('PlannerCtrl');

  $scope.planner = [];
  var planner = new Firebase(FIREBASE_REF).child('users').child(userSession.user.uid).child('planner');
// Retrieve new posts as they are added to Firebase
  planner.on("child_added", function(snapshot) {
  	console.log(snapshot.value());
  	$scope.planner.push(snapshot.value());
  });


})