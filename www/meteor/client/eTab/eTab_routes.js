angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.eTab', {
		url: '/:eventId',
		abstract: true,
		views: {
			'menu': {
				templateUrl: 'client/eTab/eTab.ng.html'
			}
		},
		resolve: {
			attendees: function($meteor, $stateParams){
				// if subscribe is called from within autorun, it automatically stops old
				// subscriptions when it re-runs with new subscription data
				return $meteor.subscribe('attendees', $stateParams.eventId);
			}
		}

		})
  ;
})

;