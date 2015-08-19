Accounts.onCreateUser(function(options, user){
	if (options.profile){
		// if no picture set default
		if( typeof(options.profile.face) === 'undefined' )
			options.profile.face = PLACEHOLDER_IMG_PATH;
		user.profile = options.profile;
	}
	return user;
});