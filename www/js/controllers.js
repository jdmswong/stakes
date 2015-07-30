angular.module('stakes.controllers', [])

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

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all();
	
})

.controller('AttendeeDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
})

;

