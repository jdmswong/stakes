Meteor.users.allow({
	
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

