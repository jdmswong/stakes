angular.module('monarch')
	
.factory('Attendees', function($meteor){
	
	
	return {
		all: $meteor.collection(Meteor.users),
		getAttendee: function(attendeeId){
			return (Meteor.users.find({_id: attendeeId}).fetch())[0];
		}
	}
});

