Accounts.onCreateUser(function(options, user){
	if (options.profile){
		// hard code default picture
		options.profile.face = 'ProfilePlaceholderSuit.png';
		user.profile = options.profile;
	}
	return user;
});