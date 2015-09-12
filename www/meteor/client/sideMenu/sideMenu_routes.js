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
			}
		}
	})
	
  ;
})

;