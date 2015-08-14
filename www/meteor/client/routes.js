// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('monarch')

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

	.state('login',{
		url: '/login',
		templateUrl: 'client/templates/login.ng.html',
		controller: 'LoginCtrl'
	})
	
	.state('menu',{
		url: '/menu',
		abstract: true,
		templateUrl: 'client/templates/sidemenu.ng.html'
	})
	
	.state('menu.notifications', {
		url: '/notifications',
		views: {
			'menu': {
				templateUrl: 'client/templates/notifications.ng.html',
				controller: 'NotificationsCtrl'
			}
		}
	})
	
	.state('menu.chat', {
		url: '/chat',
		views: {
			'menu': {
				templateUrl: 'client/templates/chat.ng.html',
				controller: 'ChatCtrl'
			}
		}
	})
	
	.state('menu.sender-detail', {
		url: '/sender/:attendeeId',
		views: {
			'menu': {
				templateUrl: 'client/templates/attendeeDetail.ng.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	
	// Event tabs
	.state('menu.eTab', {
		url: '/eTab',
		abstract: true,
		views: {
			'menu': {
				templateUrl: 'client/templates/eTab.ng.html'
			}
		}
 	})
	
	
	.state('menu.eTab.event-person-detail', {
		url: '/event/person/:attendeeId',
		views: {
			'event': {
				templateUrl: 'client/templates/attendeeDetail.ng.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	
	// Companies tab
	.state('menu.eTab.companies',{
		url: '/companies',
		views: {
			'companies': {
				templateUrl: 'client/templates/companies.ng.html',
				controller: 'CompaniesCtrl'
			}
		}
	})
	
	.state('menu.eTab.company-detail',{
		url: '/companies/:companyId',
		views: {
			'companies': {
				templateUrl: 'client/templates/companyDetail.ng.html',
				controller: 'CompanyDetailCtrl'
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
	
	// Attendees tab
	.state('menu.eTab.attendees',{
		url: '/attendees',
		views: {
			'attendees': {
				templateUrl: 'client/templates/attendees.ng.html',
				controller: 'AttendeesCtrl'
			}
		}
	})
	
	.state('menu.eTab.attendee-detail',{
		url: '/attendees/:attendeeId',
		views: {
			'attendees': {
				templateUrl: 'client/templates/attendeeDetail.ng.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	
	;
	
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

;