angular.module('monarch')

.factory('Chat', function(Attendees, $meteor){
	
	// Assign meteor collection
	var chatMsgs = $meteor.collection(Chats).subscribe("chats");
	
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

;