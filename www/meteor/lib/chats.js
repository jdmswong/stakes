Chats = new Mongo.Collection("chats");

if(Meteor.isServer) {

	Meteor.publish("chats", function () {
		return Chats.find({}, {
			fields: {
				// all fields
			}
		});
	});

	Chats.allow({

		insert: function (userId, doc) {
			return true;
		},

		update: function (useId, doc, fieldNames, modifier) {
			return true;
		},

		remove: function (userId, doc) {
			return true;
		}

	});

}