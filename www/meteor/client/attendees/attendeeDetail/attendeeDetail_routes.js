angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.eTab.attendee-detail',{
		url: '/attendees/:attendeeId',
		views: {
			'attendees': {
				templateUrl: 'client/attendees/attendeeDetail/attendeeDetail.ng.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	;
	
})

;