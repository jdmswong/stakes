angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.eTab.chat', {
		url: '/chat',
		views: {
			'chat': {
				templateUrl: 'client/chat/chat.ng.html',
				controller: 'ChatCtrl'
			}
		}
	})
	
	.state('menu.eTab.sender-detail', {
		url: '/chat/:attendeeId',
		views: {
			'chat': {
				templateUrl: 'client/attendees/attendeeDetail/attendeeDetail.ng.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	
  ;
})

;