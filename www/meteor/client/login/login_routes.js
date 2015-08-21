angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	.state('login',{
		url: '/login',
		templateUrl: 'client/login/login.ng.html',
		controller: 'LoginCtrl'
	})
	
  ;
})

;