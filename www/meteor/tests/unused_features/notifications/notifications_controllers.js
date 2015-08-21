angular.module('monarch')

.controller('NotificationsCtrl', function($scope, Notifications){
	$scope.notifications = Notifications.all();
})

;

