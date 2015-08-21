Meteor.methods({
	grantAdmin: function(userId){
		
		var loggedInUser = Meteor.user();
		
    if( !loggedInUser ){
      throw new Meteor.Error("must be logged in");
    }
		if( !Roles.userIsInRole(
			loggedInUser,
			['super-admin']
		)){
			throw new Meteor.Error(403, "Access denied");
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
		if( 
			params.isAdmin
			&&
			!Roles.userIsInRole(
				loggedInUser, ['super-admin']
		)){
			throw new Meteor.Error(403, "Must be super-admin to create admins");
	  }
		if( 
			!params.username || 
			!params.password ||
			!params.email 
		){
			if(!params.username)
				throw new Meteor.Error("no username", "username not set");
			if(!params.password)
				throw new Meteor.Error("no password", "password not set");
			if(!params.email)
				throw new Meteor.Error("no email", "email not set");
		}
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
		
	}
	
});