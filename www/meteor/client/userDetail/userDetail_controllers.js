angular.module('monarch')

.controller('UserDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
	
})

;
