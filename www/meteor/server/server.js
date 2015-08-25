Accounts.onCreateUser(function(options, user){
	if (options.profile){
		
		// if no picture set default
		if( typeof(options.profile.face) === 'undefined' )
			options.profile.face = PLACEHOLDER_IMG_PATH;
		
		// user.email private by default, publish it
		options.profile.publicEmail =  user.emails[0].address;
		
		// set the profile
		user.profile = options.profile;
	}
	
	// Add user favorites record to default meeting
	var set = {};
	set['attendeeFavorites.'+user._id] = [];
	Events.update({},{
		$set: set
	});
	
	return user;
});