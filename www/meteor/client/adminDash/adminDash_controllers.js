angular.module('monarch')

.controller('AdminDashCtrl', function($scope, $meteor) {
	
	
	$scope.emailFollowUp = function(){
		
		$meteor.call("emailFollowUp").then(
			function(result){
				
			},function(error){

			}
		);
			
	};
	
})

;