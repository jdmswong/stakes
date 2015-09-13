angular.module('stakes')

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

;