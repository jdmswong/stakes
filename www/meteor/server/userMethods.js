Meteor.methods({
	grantAdmin: function(userId){
		
		var loggedInUser = Meteor.user();
		
    if( !loggedInUser ){
      throw new Meteor.Error("must be logged in");
    }
		if( loggedInUser.username != 'admin' ){
			throw new Meteor.Error(403, "Must be root admin to create admins");
	  }
		
		Roles.setUserRoles(userId, 'admin');
	},
	
	registerUser: function(params){
		
		var loggedInUser = Meteor.user();
    if( !loggedInUser ){
      throw new Meteor.Error("must be logged in");
    }
		if( !Roles.userIsInRole(
			loggedInUser,
			['admin']
		)){
			throw new Meteor.Error(403, "Access denied");
	  }
		
		if(!params.username)
			throw new Meteor.Error("no username", "username not set");
		if(!params.password)
			throw new Meteor.Error("no password", "password not set");
		if(!params.email)
			throw new Meteor.Error("no email", "email not set");

		var newUserId = Accounts.createUser({
			username: params.username,
			email: params.email,
			password: params.password,
			profile: {
				name: params.name,
				company: params.company,
				position: params.position,
				phone: params.phone, 
				face: params.face
			}
		});
		
		if(params.isAdmin){
			Meteor.call("grantAdmin", newUserId);
		}
		
		return newUserId;
		
	},
	
	addFavorite: function(attendeeId){
		
		// check it user is logged in
		var loggedInUser = Meteor.user();
    if( !loggedInUser ){
      throw new Meteor.Error("must be logged in");
    }

		// get user.favorites
		var favorites = Meteor.users.find({_id: loggedInUser._id}).fetch()[0].favorites;
		
		// add new ID to favorites
		favorites.push(attendeeId);
		
		// update the value in mongo
		Meteor.users.update(loggedInUser._id, {$set: {favorites: favorites}});
		
	},
	
	getFavorites: function(){
		// check it user is logged in
		var loggedInUser = Meteor.user();
    if( !loggedInUser ){
      throw new Meteor.Error("must be logged in");
    }

		// get user.favorites
		var favorites = Meteor.users.find({_id: loggedInUser._id}).fetch()[0].favorites;
		
		return favorites;
	}
	
	
});