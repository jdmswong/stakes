angular.module('monarch')

.controller('AdminDashCtrl', function($scope, $meteor) {
	
	
	$scope.emailFollowUp = function(){
		
		$meteor.call("emailFollowUp",[ "9oQYRh3MSDfeD28vT", "7R5aG7ETPS9ZbHJZP"]).then(
			function(result){
				
			},function(error){

			}
		);
			
	};
	
})

;