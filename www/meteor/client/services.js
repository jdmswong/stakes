angular.module('monarch')

.factory('User', function(Attendees){
	var user = {};
	
	var setUser = function(userObj){
		user = userObj;
	};
	
	var setUserById = function(attendeeId){
		user = Attendees.getAttendee(attendeeId);
		if(user){
			return true;
		}else{
			return false;
		}
	};
	
	var loggedIn = function(){
		return typeof(user.id) != "undefined";
	};
	
	return {
		setUser: setUser,
		setUserById: setUserById,
		getUser: function(){
			return user;
		},
		getUserId: function(){
			if( loggedIn() ){
				return user.id;
			}else{
				return undefined;
			}
		},
		loggedIn: loggedIn
	};
})

.factory('Notifications', function(){
	
  // Some fake testing data
	var notifications = [
		{
			id: 1,
			message: "New startup: 'Fun tracker!'", 
			timestamp: 12368
		}, {
			id: 2,
			type: 'notification', 
			message: "New startup: 'Workout scheduler'", 
			timestamp: 12391
		}
	];
	
	return {
		all: function(){
			return notifications;
		}
	};
})

.factory('Chat', function(Attendees, $meteor){
	
	// Assign meteor collection
	var chatMsgs = $meteor.collection(Chats);
	
	var constructMsg = function(newMsg, userId){
		var newId = chatMsgs[length-1] + 1;
		
		var user = Attendees.getAttendee(userId);
		
		var result = {
			id: newId,
			type: 'chat',
			from: {
				attendeeId: user.id,
				name: user.name,
				face: user.face
			},
			message: newMsg
		};
		return result;
	};
	
	return {
		all: function(){
			return chatMsgs;
		},
		pushMsg: function(newMsg, userId){
			if( newMsg === undefined || newMsg.length <= 0 )
				return;
			var result = constructMsg(newMsg, userId);
			chatMsgs.push(result);
		}
	};
	
})

.factory('Attendees', function(){
	
	
//	[
//		{
//			id: 1,
//			name: 'JD Wong',
//			company: 'Stakes',
//			position: 'Founder',
//			email: 'jdmswong@gmail.com',
//			phone: '123-456-7890',
//			face: 'https://avatars3.githubusercontent.com/u/782984?v=3&s=460'
//		}, {
//			id: 2,
//			name: 'Sean Chatman',
//			company: 'Stakes',
//			position: 'Founder',
//			email: 'hypetechio@gmail.com',
//			phone: '123-456-7890',
//			face: 'https://avatars1.githubusercontent.com/u/1606037?v=3&s=400'
//		}, {
//			id: 3,
//			name: 'Adam Bradley',
//			company: 'Ionic',
//			position: 'Developer',
//			email: 'asfd@safasdf.com',
//			phone: '123-456-7890',
//			face: 'https://avatars0.githubusercontent.com/u/452425?v=3&s=400'
//		}, {
//			id: 4,
//			name: 'Ben Sperry',
//			company: 'Drifty Co',
//			position: 'Developer',
//			email: 'lsdfj@asldf.com',
//			phone: '123-456-7890',
//			face: 'https://avatars3.githubusercontent.com/u/519526?v=3&s=400'
//		}, {
//			id: 5,
//			name: 'James Lloyd',
//			company: 'The Awesome Company',
//			position: 'The dude',
//			email: 'asdlf@gnsd.com',
//			phone: '123-456-7890',
//			face: 'https://avatars2.githubusercontent.com/u/1720477?v=3&s=400'
//		}
//	];
	
	// Adds new attendee to list of attendees, returns new attendee object
	// params = { name, company, position, email, phone }
	
	return {
		all: Meteor.users.find({}).fetch(),
		getAttendee: function(attendeeId){
			return (Meteor.users.find({_id: attendeeId}).fetch())[0];
		}
	}
})

.factory( 'Companies', function(){
	
	var companies = [
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
			return companies;
		},
		getCompany: function(companyId) {
			for( var i=0; i < companies.length; i++){
				if( companies[i].id === parseInt(companyId) ){
					return companies[i];
				}
			}
		}
	};
})

;