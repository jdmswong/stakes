angular.module('stakes.services', [])

.factory('Notifications', function(){
	// Might use a resource here that returns a JSON array

  // Some fake testing data
	var notifications = [
		{
			id: 1,
			type: 'chat', 
			from: 'JD', 
			message: "Hi everybody!!", 
			face: 'https://avatars3.githubusercontent.com/u/782984?v=3&s=460',
			timestamp: 12345
		}, {
			id: 2,
			type: 'chat', 
			from: 'Derek', 
			message: "Hi JD!", 
			face: 'https://avatars3.githubusercontent.com/u/519526?v=3&s=400',
			timestamp: 12360
		}, {
			id: 3,
			type: 'notification', 
			message: "New startup: 'Fun tracker!'", 
			timestamp: 12368
		}, {
			id: 4,
			type: 'chat', 
			from: 'Charley', 
			message: "Who wants to get food?", 
			face: 'https://avatars2.githubusercontent.com/u/1720477?v=3&s=400',
			timestamp: 12379
		}, {
			id: 5,
			type: 'notification', 
			message: "New startup: 'Workout scheduler'", 
			timestamp: 12391
		}
	];
	
	return {
		all: function() {
			return notifications;
		}
	};
	
})

.factory('Attendees', function(){
	
	var attendees = [
		{
			id: 1,
			name: 'JD Wong',
			company: 'Stakes',
			position: 'Founder',
			email: 'jdmswong@gmail.com',
			phone: '123-456-7890',
			face: 'https://avatars3.githubusercontent.com/u/782984?v=3&s=460'
		}, {
			id: 2,
			name: 'Sean Chatman',
			company: 'Stakes',
			position: 'Founder',
			email: 'hypetechio@gmail.com',
			phone: '123-456-7890',
			face: 'https://avatars1.githubusercontent.com/u/1606037?v=3&s=400'
		}, {
			id: 3,
			name: 'Adam Bradley',
			company: 'Ionic',
			position: 'Developer',
			email: 'asfd@safasdf.com',
			phone: '123-456-7890',
			face: 'https://avatars0.githubusercontent.com/u/452425?v=3&s=400'
		}, {
			id: 4,
			name: 'Ben Sperry',
			company: 'Drifty Co',
			position: 'Developer',
			email: 'lsdfj@asldf.com',
			phone: '123-456-7890',
			face: 'https://avatars3.githubusercontent.com/u/519526?v=3&s=400'
		}, {
			id: 5,
			name: 'James Lloyd',
			company: 'The Awesome Company',
			position: 'Awesome dude',
			email: 'asdlf@gnsd.com',
			phone: '123-456-7890',
			face: 'https://avatars2.githubusercontent.com/u/1720477?v=3&s=400'
		}
	];
	
	return {
		all: function(){
			return attendees;
		},
		getAttendee: function(attendeeId){
			for( var i=0; i < attendees.length; i++){
				if( attendees[i].id === parseInt(attendeeId) ){
					return attendees[i];
				}
			}
		}
	}
})

;