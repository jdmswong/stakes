angular.module('stakes')

	.controller('CreateTeamCtrl', function ($scope, $meteor) {

		$scope.newTeam = {};

		$scope.users = $meteor.collection(Meteor.users);

		$scope.createTeam = function(){

			Teams.insert({
				name: 		$scope.newTeam.name,
				premise: 	$scope.newTeam.premise,
				desc: 		$scope.newTeam.desc,
				members: 	$scope.newTeam.members
			});

		};



	})
;