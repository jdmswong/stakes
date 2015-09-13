angular.module('stakes')

.controller('AttendeesCtrl', function($scope, $meteor, Attendees) {
	
	$scope.attendees = Attendees.all;

	$meteor.autorun($scope, function () {

		if(Meteor.user()) {

			/*
			 Reactively bind $scope.favorites to the current user's favorites.
			 */
			if (Meteor.user().favorites)
				$scope.favorites = Meteor.user().favorites.users;

		}

	});

	$scope.toggleFavorite = function(attendeeId){
		$meteor.call('toggleFavorite', 'users', attendeeId).then(
			function(data){
				// nothing returned
			},
			function(err){
				console.log(err.error)
			}
		);
	}
	
	
})

;