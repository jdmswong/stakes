angular.module('stakes')

	.config(function ($stateProvider) {

		$stateProvider

			.state('menu.createTeam', {
				url: '/createTeam',
				views: {
					'menu': {
						templateUrl: 'client/createTeam/createTeam.ng.html',
						controller: 'CreateTeamCtrl'
					}
				}
			})

		;
	})

;