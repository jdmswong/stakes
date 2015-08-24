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
	
	// Sends meeting follow up email to users in userIds
	// sends to all in 'getsFollowUp' role if nothing 
	// passed in.  Follow up email has info of all other 
	// attendees at event.
	emailFollowUp: function(userIds){
		var addresses = [];
		if( userIds && userIds.length > 0 ){
			check( userIds, [String]); 
			addresses = Meteor.users.find({_id: {$in: userIds}},{emails:1})
				.fetch().map(function(ele){return ele.emails[0].address;});
		}else{
			addresses = Meteor.users.find({},{emails:1})
				.fetch().map(function(ele){return ele.emails[0].address;});
		}
		
		console.log(addresses);
		
		
	}
	
});