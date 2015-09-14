angular.module('stakes')

	.config(function ($stateProvider) {

		$stateProvider

			.state('menu.eTab.home', {
				url: '/home',
				views: {
					"home": {
						templateUrl: 'client/home/home.ng.html',
						controller: 'HomeCtrl'
					}
				}
			})

		;
	})

;