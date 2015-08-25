angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	// Attendees tab
	.state('menu.eTab.favorites',{
		url: '/favorites',
		views: {
			'favorites': {
				templateUrl: 'client/favorites/favorites.ng.html',
				controller: 'FavoritesCtrl'
			}
		}
	})
	
	;
	
})

;