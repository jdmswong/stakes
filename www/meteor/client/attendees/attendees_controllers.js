angular.module('monarch')

.controller('AttendeesCtrl', function($scope, $meteor, Attendees) {
	
	$scope.attendees = Attendees.all;
	
	$scope.$meteorSubscribe('events').then(function(subscriptionHandle){
		var event = $meteor.collection(Events)[0];
		
		$scope.favorites = event.attendeeFavorites[Meteor.userId()];
	});
	
	$scope.toggleFavorite = function(attendeeId){
		if( $scope.favorites.indexOf(attendeeId) === -1 )
			// add them
			$scope.favorites.push(attendeeId);
		else
			// cut them out
			$scope.favorites.splice(
				$scope.favorites.indexOf(attendeeId),
				1
			);
	}
	
	
})

;