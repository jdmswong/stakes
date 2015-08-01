angular.module('stakes.controllers', ['ionic.rating'])

.controller('RoleSelectCtrl', function($scope) {})

.controller('EventCtrl', function($scope, Notifications) {
	
	$scope.notifications = Notifications.all();
	
	
	
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
	$scope.readOnly = true;
	
})

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all();
	
})

.controller('AttendeeDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
})

;

