angular.module('stakes.controllers', [])

.controller('RoleSelectCtrl', function($scope) {})

.controller('EventCtrl', function($scope) {
	
	$scope.notifications = [
		{
			type: 'chat', 
			from: 'JD', 
			message: "Hi everybody!!", 
			face: 'https://avatars3.githubusercontent.com/u/782984?v=3&s=460',
			timestamp: 12345
		}, {
			type: 'chat', 
			from: 'Derek', 
			message: "Hi JD!", 
			face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460',
			timestamp: 12360
		}, {
			type: 'notification', 
			message: "New startup: 'Fun tracker!'", 
			timestamp: 12368
		}, {
			type: 'chat', 
			from: 'Charley', 
			message: "Who wants to get food?", 
			face: 'https://avatars3.githubusercontent.com/u/574719?v=3&s=400',
			timestamp: 12379
		}
	];
	
	
	
})

.controller('EntrantsCtrl', function($scope) {})

;

