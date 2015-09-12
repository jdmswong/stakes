angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	// Attendees tab
	.state('menu.adminDash',{
		url: '/adminDash',
		views: {
			'menu': {
				templateUrl: 'client/adminDash/adminDash.ng.html',
				controller: 'AdminDashCtrl',
				resolve: {
					// resolve a promise before changing states
					"adminUser": function($meteor){
						// returns a promise for the user, throws error
						// if callback doesn't return true.  This error is 
						// caught by $rootScope.$on("$stateChangeError"
						return $meteor.requireValidUser(function(user){
							return Roles.userIsInRole(user, 'admin') ? 
								true : 'NEED_ADMIN';
						});
					}
				}
			}
		}
	})
	
	;
	
})

;