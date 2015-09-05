angular.module('monarch')
	
.factory('Favorites', function($meteor){
	
	var favorites = [];
	Tracker.autorun(function(){

		var event = $scope.$meteorObject(Event,{}).subscribe("events");

		console.log(event);

		//$meteor.subscribe('events').then(function(subscriptionHandle){
		//
		//	favorites = event.attendeeFavorites[Meteor.userId()];
		//});

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

