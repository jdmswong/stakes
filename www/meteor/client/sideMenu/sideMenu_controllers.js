angular.module('monarch')

.controller("MenuCtrl", function($scope, $state, $rootScope, $meteor){

	Tracker.autorun(function(){
		var user = (Meteor.users.find({_id: Meteor.userId()}).fetch())[0];
		if( user != null ){
			$scope.me = user;
		}
	});

	$scope.logout = function(){
		$meteor.logout().then(function(){
			$state.go("login");
		}, function(error){
			// On failure
			console.log("Error: "+error);
		});
	};
	
	$scope.amIAdmin = function(){
		return Roles.userIsInRole($scope.me, 'admin');
	}
})

;