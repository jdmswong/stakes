angular.module('stakes.services', [])

.factory('Roles', function(){
	var role = undefined;
	return {
		getRole: function(){
			return role;
		},
		setRole: function(newRole){
			if( 
				newRole === 'entrant' ||
				newRole === 'judge' ||
				newRole === 'audience'
			){
				role = newRole;
				return role;
			} else {
				return -1;
			}
		}
	};
})

.factory('Notifications', function(Attendees){
	// Might use a resource here that returns a JSON array

  // Some fake testing data
	var notifications = [
		{
			id: 1,
			type: 'chat', 
			message: "Hi everybody!", 
			from: { 
				attendeeId: 1, 
				face: 'https://avatars3.githubusercontent.com/u/782984?v=3&s=460'
			},
			timestamp: 12345
		}
		, {
			id: 2,
			type: 'chat', 
			from: {
				attendeeId: 4,
				face: 'https://avatars3.githubusercontent.com/u/519526?v=3&s=400'
			}, 
			message: "Hi there!", 
			timestamp: 12360
		}, {
			id: 3,
			type: 'notification', 
			message: "New startup: 'Fun tracker!'", 
			timestamp: 12368
		}, {
			id: 4,
			type: 'chat', 
			from: {
				attendeeId: 3,
				face: 'https://avatars0.githubusercontent.com/u/452425?v=3&s=400'
			}, 
			message: "Who wants to get food?", 
			timestamp: 12379
		}, {
			id: 5,
			type: 'notification', 
			message: "New startup: 'Workout scheduler'", 
			timestamp: 12391
		}
	];
	
	var constructMsg = function(newMsg, userId){
		var newId = notifications[length-1] + 1;
		
		var user = Attendees.getAttendee(userId);
		
		var result = {
			id: newId,
			type: 'chat',
			from: {
				attendeeId: user.id,
				face: user.face
			},
			message: newMsg
		};
		return result;
	};
	
	return {
		all: function(){
			return notifications;
		},
		pushMsg: function(newMsg, userId){
			if( newMsg === undefined || newMsg.length <= 0 )
				return;
			var result = constructMsg(newMsg, userId);
			notifications.push(result);
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
		}/*, {
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
			position: 'The dude',
			email: 'asdlf@gnsd.com',
			phone: '123-456-7890',
			face: 'https://avatars2.githubusercontent.com/u/1720477?v=3&s=400'
		}*/
	];
	
var registerAttendee = function(name, company, position, email, phone){
		
		var newId = attendees[attendees.length-1].id + 1;
		
		// Default to placeholder
		var faceURI = 'img/ProfilePlaceholderSuit.png';
		
		var newAttendee = {
			id: newId,
			name: name,
			company: company,
			position: position,
			email: email,
			phone: phone,
			face: faceURI
		};
		
		attendees.push( newAttendee );
		
	};
	
	
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
		},
		register: registerAttendee
	}
})

.factory( 'Entrants', function(){
	
	var entrants = [
		{
			id: 1,
			name: 'Stakes',
			reps: [
				1, 2
			],
			premise: 'Bet on contests, win big!',
			pitch: 'How would you like to bet on contests like you bet on races?  Now you can!  Bet virtual money on real contests, win and boost your bragging rights'
		}, {
			id: 2,
			name: 'Fun tracker!',
			reps: [
				3
			],
			premise: 'Track your activities',
			pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			id: 3,
			name: 'Workout scheduler',
			reps: [
				4, 2, 5, 3, 1
			],
			premise: 'Schedule your workouts, set goals, track progress!',
			pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	];
	
	return {
		all: function(){
			return entrants;
		},
		getEntrant: function(entrantId) {
			for( var i=0; i < entrants.length; i++){
				if( entrants[i].id === parseInt(entrantId) ){
					return entrants[i];
				}
			}
		}
	};
})

;