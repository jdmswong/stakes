Teams = new Mongo.Collection("teams");

if(Meteor.isServer){

	Meteor.publish("teams", function(){
		return Teams.find({});
	});

	Teams.allow({

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