angular.module('monarch')

.controller('AttendeesCtrl', function($scope, $meteor, Attendees) {
	
	$scope.attendees = Attendees.all;

	$meteor.autorun($scope, function () {

		var event = $scope.$meteorObject(Events, {}).subscribe('events');

		console.log(event);// TODO: kill this

		if( event.attendeeFavorites != undefined ) {
			$scope.favorites = event.attendeeFavorites[Meteor.userId()];

			console.log("Attendee favorites set for " + Meteor.userId() + " to " + $scope.favorites);  // TODO: kill this

		}


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