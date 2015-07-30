angular.module('stakes.controllers', [])

.controller('RoleSelectCtrl', function($scope) {})

.controller('EventCtrl', function($scope) {
	
	$scope.notifications = [
		{type: 'chat', from: 'Bob', message: "Hi everybody!!", timestamp: 12345},
		{type: 'chat', from: 'Derek', message: "Hi Bob!", timestamp: 12360},
		{type: 'notification', message: "Bob has created the startup: 'Fun tracker!'", timestamp: 12368},
		{type: 'chat', from: 'Stacy', message: "Who wants to get food?", timestamp: 12379}
	];
	
	
	
})

.controller('EntrantsCtrl', function($scope) {})

;

