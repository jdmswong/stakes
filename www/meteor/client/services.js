angular.module('monarch')

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
	
	var constructMsg = function(newMsg, senderId){
		
		var sender = Meteor.users.find({_id: senderId}).fetch()[0];
		
		var result = {
			from: {
				attendeeId: senderId,
				name: sender.profile.name,
				face: sender.profile.face
			},
			message: newMsg
		};
		return result;
	};
	
	return {
		all: function(){
			return chatMsgs;
		},
		pushMsg: function(newMsg, senderId){
			if( newMsg === undefined || newMsg.length <= 0 )
				return;
			var result = constructMsg(newMsg, senderId);
			chatMsgs.push(result);
		}
	};
	
})

.factory('Attendees', function($meteor){
	
	
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
	
	return {
		all: $meteor.collection(Meteor.users),
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