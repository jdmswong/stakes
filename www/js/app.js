// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('stakes', ['ionic', 'stakes.controllers'])

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

	// Role selection
	.state('roleSelect',{
		url: '/roleselect',
		templateUrl: 'templates/roleSelect.html',
		controller: 'RoleSelectCtrl'
	})
	
	.state('tab', {
		url: '/tab',
		abstract: true,
		templateUrl: 'templates/tab.html'
 	})
	
	.state('tab.event',{
		url: '/event',
		views: {
			'event' : {
				templateUrl: 'templates/eventDash.html',
				controller: 'EventCtrl'
			}
		}
	})
	
	.state('tab.entrants',{
		url: '/entrants',
		views: {
			'entrants' : {
				templateUrl: 'templates/entrants.html',
				controller: 'EntrantsCtrl'
			}
		}
	})
	
	.state('tab.attendees',{
		url: '/attendees',
		views: {
			'attendees' : {
				templateUrl: 'templates/attendees.html',
				controller: 'AttendeesCtrl'
			}
		}
	})
	
	.state('tab.attendee-detail',{
		url: '/attendees/:attendeeId',
		views: {
			'attendees' : {
				templateUrl: 'templates/attendeeDetail.html',
				controller: 'AttendeeDetailCtrl'
			}
		}
	})
	
	;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/roleselect');

})

;