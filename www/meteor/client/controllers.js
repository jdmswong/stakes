angular.module('monarch')

.controller("MenuCtrl", function($scope, $state){
	$scope.me = Meteor.user();
	$scope.logout = function(){
		Meteor.logout(function(error){
			if( typeof(error) === "undefined" ){
				// On success
				$state.go("login");
			}else{
				// On failure
				console.log("Error: "+error.reason);
			}
		});
	}
})

.controller('LoginCtrl', function($scope, $state, $ionicModal, User){
	
	$scope.$on('$ionicView.enter', function(e) {
		$scope.error = null;
  });
	
	// Login data bound to form
	$scope.loginData = {};
	
	
	$scope.login = function(){
		
		Meteor.loginWithPassword(
			$scope.loginData.username, 
			$scope.loginData.password, 
			function(error){
				if(typeof error === 'undefined'){
					//login success
					$state.go('menu.eTab.attendees');
				}else{
					//login failure
					$scope.error = error;
				}
			}
		);
		
		
	}
	
	$scope.newUser = {};
	$ionicModal.fromTemplateUrl(
		'client/templates/createUser.ng.html',
		function($ionicModal) 
	{
		$scope.modal = $ionicModal;
	}, {
		scope: $scope,
		animation: 'slide-in-up'
	});  
	
	$scope.createUser = function(){
		Accounts.createUser({
			username: $scope.newUser.username,
			email: $scope.newUser.email,
			password: $scope.newUser.password,
			profile: {
				name: $scope.newUser.name,
				company: $scope.newUser.company,
				position: $scope.newUser.position,
				phone: $scope.newUser.phone
			}
		});		
		$state.go('menu.eTab.attendees');
		$scope.modal.hide();
	}
	
})

.controller('ChatCtrl', function($scope, $ionicScrollDelegate, $state, User, Chat, Attendees) {
	
	// On page load:
	$scope.$on('$ionicView.enter', function(e) {
		$ionicScrollDelegate.scrollBottom();
	});

	$scope.chats = Chat.all();
	
	$scope.submitMsg = function(){
		
		// Close the keyboard - NOT WORKING
		if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.close();
    }
		
		// Push message
		if( Meteor.user() ){
			Chat.pushMsg( $scope.msgText, Meteor.userId() );
			$scope.msgText = '';
		}else{
			$state.go('login');
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
	
	
})

.controller('AttendeesCtrl', function($scope, Attendees) {
	
	$scope.attendees = Attendees.all;
	
	
})

.controller('AttendeeDetailCtrl', function($scope, $stateParams, Attendees) {
	
	$scope.attendee = Attendees.getAttendee( $stateParams.attendeeId );
	
	
})

;
