angular.module('stakes')

.controller('UserDetailCtrl', function($scope, $stateParams) {
	
	$scope.attendee = $scope.$meteorObject(Meteor.users, $stateParams.attendeeId);
	
	
})

;
