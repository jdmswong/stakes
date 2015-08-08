angular.module('stakes.controllers', ['ionic.rating'])

.controller('LoginCtrl', function($scope, $state, User){
	
	// Login data bound to form
	// Login currently hard coded, not used
	$scope.loginData = {};
	
	// Show the error message
	$scope.assertLoginError = false;
	
	$scope.login = function(){
		// hard coded to specific user, JD
		var userId = 1;
		
		if(User.setUserById(userId)){
			$state.go('menu.notifications');
		}else{
			$scope.assertLoginError = true;
		}
	}
	
})

.controller('ChatCtrl', function($scope, $ionicModal, $ionicScrollDelegate, User, Chat, Attendees) {
	
	// Modal code
	$ionicModal.fromTemplateUrl('templates/registerModal.html', {
		scope: $scope
	}).then(function(modal){
		$scope.modal = modal;
	});
	$scope.register = function(params){
		User.setUser( Attendees.register(params) );
		$scope.modal.hide();
	}
	
	
	$scope.chats = Chat.all();
	
	$scope.submitMsg = function(){
		
		// Close the keyboard - NOT WORKING
		if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.close();
    }
		
		// Push message
		if( User.loggedIn() ){
			Chat.pushMsg( $scope.msgText, User.getUserId() );
			$scope.msgText = '';
		}else{
			$scope.modal.show();
		}
		
		// Scroll to bottom
		$ionicScrollDelegate.scrollBottom();
    
	};
	$scope.onKeyDown = function(event){
		// On enter
		if( event.which === 13 )
			$scope.submitMsg();
	};
	
})

.controller('NotificationsCtrl', function($scope, Notifications){
	$scope.notifications = Notifications.all();
})

.controller('CompaniesCtrl', function($scope, Companies, Attendees) {
	
	$scope.companies = Companies.all();
	$scope.getReps = function(company){
		var result = [];
		for( var i=0; i < company.reps.length; i++){
			result.push( Attendees.getAttendee(company.reps[i]) );
		}
		return result;
	};
	
})

.controller('CompanyDetailCtrl', function($scope, $stateParams, Companies, Attendees){
	
	$scope.company = Companies.getCompany($stateParams.companyId);
	$scope.getReps = function(){
		var result = [];
		for( var i=0; i < $scope.company.reps.length; i++){
			result.push( Attendees.getAttendee($scope.company.reps[i]) );
		}
		return result;
	};
	
	// For ionic star rating
	$scope.rate = 3;
	$scope.max = 5;
	$scope.readOnly = false;
	
})

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all();
	
	
	
})

.controller('AttendeeDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
})

;

