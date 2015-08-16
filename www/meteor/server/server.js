Accounts.onCreateUser(function(options, user){
	// hard code default picture
	user.face = 'ProfilePlaceholderSuit.png';
	if (options.profile){
		user.profile = options.profile;
	}
	return user;
});