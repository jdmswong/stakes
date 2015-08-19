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