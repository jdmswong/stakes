angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	.state('menu',{
		url: '/menu',
		abstract: true,
		templateUrl: 'client/sideMenu/sideMenu.ng.html',
		controller: 'MenuCtrl',
		resolve: {
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