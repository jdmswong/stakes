angular.module('monarch')
	
.factory('Attendees', function($meteor){
	
	var attendees = $meteor.collection(Meteor.users).subscribe('attendees');


	return {
		all: attendees,
		getAttendee: function(attendeeId){
			return (Meteor.users.find({_id: attendeeId}).fetch())[0];
		}
	}
});

