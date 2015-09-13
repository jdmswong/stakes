angular.module('monarch')

.controller('FavoritesCtrl', function($scope, $meteor) {
	
	$scope.favoritesIds = [];
	
	$meteor.autorun($scope, function(){

		var event = $scope.$meteorObject(Events,{}).subscribe("events");

		if( event.attendeeFavorites[Meteor.userId()] != undefined ) {

			$scope.favoritesIds = event.attendeeFavorites[Meteor.userId()];

			$scope.favorites = $meteor.collection(
				function(){
					return Meteor.users.find(
						{_id: {$in: $scope.favoritesIds}}
					);
				}
			);

		}

	});
})

;