angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	.state('menu',{
		url: '/menu/:eventId',
		abstract: true,
		templateUrl: 'client/sideMenu/sideMenu.ng.html',
		controller: 'MenuCtrl',
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
			"currentUser": function($meteor){
				return $meteor.requireUser();
			},
			"subscriptions": function($meteor){
				/*
					Subscriptions placed here to ensure they're
					available on refresh in every state
				*/
				Meteor.autorun(function () {
					$meteor.subscribe('myFavorites');
				});

				return true;
			}
		}
	})
	
  ;
})

;