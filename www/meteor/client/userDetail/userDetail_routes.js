angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.user-detail', {
		url: '/user/:attendeeId',
		views: {
			'menu': {
				templateUrl: 'client/userDetail/userDetail.ng.html',
				controller: 'UserDetailCtrl'
			}
		}
	})
	;
	
})

;