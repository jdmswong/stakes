angular.module('monarch')

.controller('FavoritesCtrl', function($scope, $meteor) {
	
	$scope.favoritesIds = [];
	
	$scope.$on('$ionicView.enter', function(e) {
	
		$scope.$meteorSubscribe('events').then(
			function(subscriptionHandle){
				var event = $meteor.collection(Events)[0];

				$scope.favoritesIds = event.attendeeFavorites[Meteor.userId()];
	
			}
		);

		$scope.favorites = $meteor.collection(
			function(){
				return Meteor.users.find(
	//				{_id: {$in: [ "Adyo8NaaZfvx4LWAs" ] }}
					{_id: {$in: $scope.getReactively('favoritesIds') }}
				);
			}

		);

	});
})

;