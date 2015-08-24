angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	// Attendees tab
	.state('menu.adminDash',{
		url: '/adminDash',
		views: {
			'menu': {
				templateUrl: 'client/adminDash/adminDash.ng.html',
				controller: 'AdminDashCtrl'
			}
		}
	})
	
	;
	
})

;