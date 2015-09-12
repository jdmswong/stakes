angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.createUser', {
		url: '/createUser',
		views: {
			'menu': {
				templateUrl: 'client/createUser/createUser.ng.html',
				controller: 'CreateUserCtrl'
			}
		}
		
	})
	
  ;
})

;