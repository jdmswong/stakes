angular.module('monarch')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.eTab.company-detail',{
		url: '/companies/:companyId',
		views: {
			'companies': {
				templateUrl: 'client/templates/companyDetail.ng.html',
				controller: 'CompanyDetailCtrl'
			}
		}
	})
	
  ;
})

;