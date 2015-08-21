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

;