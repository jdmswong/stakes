Events = new Mongo.Collection("events");


if(Meteor.isServer){
	
	
	Meteor.publish('events', function(){
		var projection = {
			name: 1
		};
		projection["attendeeFavorites."+this.userId] = 1;
		return Events.find({},{fields: projection});
	});

	Events.allow({

		insert: function(userId, doc){
			return true;
		},

		update: function(useId, doc, fieldNames, modifier){
			return true;
		},

		remove: function(userId, doc){
			return true;
		}

	});

}