// Only show users attending that event
Meteor.publish("attendees", function(eventId){

	var eventAttendeeIds = Events.findOne(eventId).attendees;

	return Meteor.users.find(
		{
			_id: { $in: eventAttendeeIds }
		},
		{
			fields: {
				profile: 1
		}
	});
});
