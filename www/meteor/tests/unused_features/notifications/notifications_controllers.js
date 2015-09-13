angular.module('stakes')

.controller('NotificationsCtrl', function($scope, Notifications){
	$scope.notifications = Notifications.all();
})

;

