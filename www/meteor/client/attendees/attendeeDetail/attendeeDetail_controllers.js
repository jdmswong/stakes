angular.module('monarch')

.controller('AttendeeDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
	
})

;
