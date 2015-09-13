Meteor.publish('myFavorites', function(){
	if(!this.userId) return null;
	return Meteor.users.find(this.userId, {fields: {
		favorites: 1
	}});
});