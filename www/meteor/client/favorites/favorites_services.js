angular.module('monarch')
	
.factory('Favorites', function($meteor){
	
	var favorites = [];
	$meteor.subscribe('events').then(function(subscriptionHandle){
		var event = $meteor.collection(Events)[0];
		
		favorites = event.attendeeFavorites[Meteor.userId()];
	});
	

	return {
		
		toggle: function(attendeeId){
			if( favorites.indexOf(attendeeId) === -1 )
				// add them
				favorites.push(attendeeId);
			else
				// cut them out
				favorites.splice(
					favorites.indexOf(attendeeId),
					1
				);
			console.log(favorites);
		}
	}
});

