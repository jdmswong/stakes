angular.module('stakes.controllers', ['ionic.rating'])

.controller('RoleSelectCtrl', function($scope, Roles) {
	
	$scope.setRole = Roles.setRole;
	
})

.controller('EventCtrl', function($scope, Notifications) {
	
	// USER ID HARD CODED
	userId = 1; // 1 = JD
	
	$scope.notifications = Notifications.all();
	
	$scope.submitMsg = function(){
		Notifications.pushMsg($scope.msgText, userId);
		$scope.msgText = '';
	};
	$scope.onKeyDown = function(event){
		// On enter
		if( event.which === 13 )
			$scope.submitMsg();
	};
	
})

.controller('EntrantsCtrl', function($scope, Entrants, Attendees) {
	
	$scope.entrants = Entrants.all();
	$scope.getReps = function(entrant){
		var result = [];
		for( var i=0; i < entrant.reps.length; i++){
			result.push( Attendees.getAttendee(entrant.reps[i]) );
		}
		return result;
	};
	
})

.controller('EntrantDetailCtrl', function($scope, $stateParams, Entrants, Attendees){
	
	$scope.entrant = Entrants.getEntrant($stateParams.entrantId);
	$scope.getReps = function(){
		var result = [];
		for( var i=0; i < $scope.entrant.reps.length; i++){
			result.push( Attendees.getAttendee($scope.entrant.reps[i]) );
		}
		return result;
	};
	
	// For ionic star rating
	$scope.rate = 3;
	$scope.max = 5;
	$scope.readOnly = false;
	
})

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all();
	
	Attendees.register( 'TESTMAN', 'TEST COMPANY', 'KING OF THE LAND', 'lol@asdf.com', '123-456-7890' );
	
	
})

.controller('AttendeeDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
})

;

