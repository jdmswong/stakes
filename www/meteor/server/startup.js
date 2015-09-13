Meteor.startup(function(){
	
	// Create event if it doesn't exist
	if (Events.find().count() === 0){
		// create default event
		Events.insert({
			name: "Default event"
		});
		console.log("No events present, default event created");
	}

	var adminPassword = "asdf";

	// Create admin if no users
	if (Meteor.users.find().count() === 0) {
		console.log("No users, (admin,"+adminPassword+") created");
		var adminId = Accounts.createUser({
			username: "admin",
			email: "jdmswong@gmail.com",
			password: adminPassword,
			profile: {
				name: "Admin",
				company: "Hype Tech",
				position: "Admin",
				phone: "440-253-9664",
				face: HT_LOGO_PATH
			}
		});
		
		// Add to admin and super-admin roles
		// super-admins are admins whom 
		// can grant admin rights to others
		Roles.addUsersToRoles(adminId, ['admin']);
		Houston._admins.insert({
			user_id: adminId
		})
		
	}
	
	// Add users and houston admins to houston
	Houston.add_collection(Meteor.users);
	Houston.add_collection(Houston._admins);
	
});