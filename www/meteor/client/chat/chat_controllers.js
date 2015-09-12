angular.module('stakes')

.controller('ChatCtrl', function($scope, $ionicScrollDelegate, $state, Chat, Attendees) {
	
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

;