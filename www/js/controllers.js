angular.module('stakes.controllers', [])

.controller('RoleSelectCtrl', function($scope) {})

.controller('EventCtrl', function($scope, Notifications) {
	
	$scope.notifications = Notifications.all();
	
	
	
})

.controller('EntrantsCtrl', function($scope) {})

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all();
	
})

.controller('AttendeeDetailCtrl', function($scope, $stateParams) {
	
	$scope.id = $stateParams.attendeeId;
	
})

;

