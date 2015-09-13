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

	// Add favorites to user.  This must be explicitly published
	// to be used on the client
	user.favorites = {
		users : [],
		groups : []
	};

	return user;
});