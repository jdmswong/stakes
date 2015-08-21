angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.eTab', {
		url: '/eTab',
		abstract: true,
		views: {
			'menu': {
				templateUrl: 'client/eTab/eTab.ng.html'
			}
		}
 	})
  ;
})

;