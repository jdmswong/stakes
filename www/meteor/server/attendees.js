Meteor.publish("attendees", function(){
	return Meteor.users.find({}, {
		fields: {
			profile: 1
		}
	});
});
