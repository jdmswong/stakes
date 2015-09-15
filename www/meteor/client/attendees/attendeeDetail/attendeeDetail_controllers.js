angular.module('stakes')

.controller('AttendeeDetailCtrl', function($scope, $stateParams, $meteor) {
	
	$scope.attendee = $scope.$meteorObject(Meteor.users, $stateParams.attendeeId);
	
	
})

;
