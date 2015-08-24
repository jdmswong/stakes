// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('monarch')

.run(function($ionicPlatform, $rootScope, $state) {
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
	
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise from 
    // config is rejected and redirect the user back to the login page
    switch(error) {
      case "AUTH_REQUIRED":
        $state.go('logIn');
        break;
			case "NEED_ADMIN":
				console.log("you need to be an admin for that");
				break;
      case "FORBIDDEN":
        console.log("that is forbidden")
        break;
      case "UNAUTHORIZED":
        console.log("unauthorized access")
        break;
      default:
        console.log("internal client-side error")
    }
  });
	
})

.config(function($urlRouterProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

;