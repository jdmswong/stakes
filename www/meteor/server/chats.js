Meteor.publish("chats", function(){
	return Chats.find({}, {
		fields: {
			// all fields
		}
	});
});
