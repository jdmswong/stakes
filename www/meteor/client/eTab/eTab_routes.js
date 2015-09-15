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
			event: function($meteor, $stateParams){
				/*
					When a promise is returned by a resolve key such as 'event',
					the object *will* be resolved before this or any children
					states are called.
					See: https://github.com/angular-ui/ui-router/wiki/Nested-States-%26-Nested-Views#inherited-resolved-dependencies
				 */
				return $meteor.subscribe('events').then(function(){
					// The $meteor.subscribe promise will return the event meteor object
					return $meteor.object(Events, $stateParams.eventId);
				});
			},
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