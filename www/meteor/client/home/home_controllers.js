angular.module('stakes')

	.controller('HomeCtrl', function ($scope, event) {
		console.log(event);

		$scope.eventName = event.name;
	})
;