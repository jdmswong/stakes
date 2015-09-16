angular.module('stakes')

.controller('ChatCtrl', function($scope, $ionicScrollDelegate, $meteor, event) {
	
	// On page load:
	$scope.$on('$ionicView.enter', function(e) {
		$ionicScrollDelegate.scrollBottom();
	});

	$scope.event = event;

	$meteor.autorun($scope, function(){
		$scope.chats = $scope.getReactively('event.chats.messages');

		var rawParticipants = $scope.$meteorCollection(function () {
			return Meteor.users.find({
				_id: {$in: event.chats.participants}
			});
		});

		$scope.participants = {};
		for(var i=0; i<rawParticipants.length; i++){
			$scope.participants[rawParticipants[i]._id] = rawParticipants[i].profile;
		}

	});


	$scope.submitMsg = function(){
		
		// Close the keyboard - NOT WORKING
		if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.close();
    }

		// Push message
		$meteor.call('submitChat', event._id, $scope.msgText).then(
			function(recordsUpdated){
				// Handle success
				$scope.msgText = '';

				// Scroll to bottom
				$ionicScrollDelegate.scrollBottom();

			},
			function(err){
				// Handle error
				console.log('failed', err);
			}
		);

	};
	$scope.onKeyDown = function(event){
		// On enter
		if( event.which === 13 )
			$scope.submitMsg();
	};
	
})

;