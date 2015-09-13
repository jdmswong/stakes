angular.module('stakes')

.controller('FavoritesCtrl', function($scope, $meteor) {
	
	$scope.favorites = [];
	
	$meteor.autorun($scope, function(){

		if(Meteor.user()) {

			if (Meteor.user().favorites) {

				$scope.favorites = $meteor.collection(
					function () {
						return Meteor.users.find(
							{_id: {$in: Meteor.user().favorites.users}}
						);
					}
				);

			}
		}
	});
})

;