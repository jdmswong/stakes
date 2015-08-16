Meteor.startup(function(){
	// Create admin if no users
	if (Meteor.users.find().count() === 0) {
		console.log("No users, (admin,hypetechftw) created");
		Accounts.createUser({
			username: "admin",
			email: "jdmswong@gmail.com",
			password: "hypetechftw",
			profile: {
				name: "Admin",
				company: "Monarch",
				position: "Admin",
				phone: "440-253-9664"
			}
		});
	}
	
	// Add users and houston admins to houston
	Houston.add_collection(Meteor.users);
	Houston.add_collection(Houston._admins);
	
});