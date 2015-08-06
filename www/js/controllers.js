angular.module('stakes.controllers', ['ionic.rating'])

.controller('ChatCtrl', function($scope, $ionicModal, User, Chat, Attendees) {
	
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
		if( User.loggedIn() ){
			Chat.pushMsg( $scope.msgText, User.getUserId() );
			$scope.msgText = '';
		}else{
			$scope.modal.show();
		}
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

.controller('EntrantsCtrl', function($scope, Entrants, Attendees) {
	
	$scope.entrants = Entrants.all();
	$scope.getReps = function(entrant){
		var result = [];
		for( var i=0; i < entrant.reps.length; i++){
			result.push( Attendees.getAttendee(entrant.reps[i]) );
		}
		return result;
	};
	
})

.controller('EntrantDetailCtrl', function($scope, $stateParams, Entrants, Attendees){
	
	$scope.entrant = Entrants.getEntrant($stateParams.entrantId);
	$scope.getReps = function(){
		var result = [];
		for( var i=0; i < $scope.entrant.reps.length; i++){
			result.push( Attendees.getAttendee($scope.entrant.reps[i]) );
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

