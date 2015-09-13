angular.module('stakes')

.config(function($stateProvider) {

  $stateProvider

	.state('menu.eTab.companies',{
		url: '/companies',
		views: {
			'companies': {
				templateUrl: 'client/templates/companies.ng.html',
				controller: 'CompaniesCtrl'
			}
		}
	})
	
	.state('menu.eTab.rep-detail',{
		url: '/companies/rep/:attendeeId',
		views: {
			'companies': {
				templateUrl: 'client/templates/attendeeDetail.ng.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	
  ;
})

;