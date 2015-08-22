angular.module('monarch')

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all;
	
})

;