angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	// Attendees tab
	.state('menu.eTab.attendees',{
		url: '/attendees',
		views: {
			'attendees': {
				templateUrl: 'client/attendees/attendees.ng.html',
				controller: 'AttendeesCtrl'
			}
		}
	})
	
	;
	
})

;