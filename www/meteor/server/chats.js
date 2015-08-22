Chats = new Mongo.Collection("chats");

Meteor.publish("chats", function(){
	return Chats.find({}, {
		fields: {
			// all fields
		}
	});
});
