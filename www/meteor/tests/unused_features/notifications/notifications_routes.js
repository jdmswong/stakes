angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.notifications', {
		url: '/notifications',
		views: {
			'menu': {
				templateUrl: 'client/templates/notifications.ng.html',
				controller: 'NotificationsCtrl'
			}
		}
	})
	
  ;
})

;