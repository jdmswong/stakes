angular.module('stakes')

.controller('LoginCtrl', function($scope, $state, $meteor){
	
	$scope.loginData = {};
	
	$scope.$on('$ionicView.leave', function(e) {
		$scope.error = null;
		$scope.loginData = {};
  });
	
	$scope.login = function(){
		
		$meteor.loginWithPassword(
			$scope.loginData.username, 
			$scope.loginData.password).then(function()
		{
			// login success
			$state.go('menu.eTab.attendees');
		},function(error){
			// login failure
			$scope.error = error;
		});
		
	}
	
	$scope.onKeyDown = function(event){
		// On enter
		if( event.which === 13 )
			$scope.login();
	};	
})

;