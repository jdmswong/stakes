angular.module('monarch')

.controller('CreateUserCtrl', function($scope, $meteor, $state, $ionicSideMenuDelegate){
	// Placeholder pic by default
	var defaultNewUser = { face: PLACEHOLDER_IMG_PATH }
	var resetNewUser = function(){
		$scope.newUser = JSON.parse(JSON.stringify(defaultNewUser));
	}
	resetNewUser();
	
	$scope.takePicture = function(){
		// Define the camera settings
		var options = {
			width: 500,
			height: 500,
			quality: 100
		};
		// Call the camera API
		$meteor.getPicture(options).then(function(data){
			// Save the picture
			$scope.newUser.face = data;
			
		},function(error){
			console.log("Error: "+error);
		});
		
			
	};
	
	// Cropping config
	$scope.cropping = false;
	
	var startCropper = function(){
		$scope.cropping = true;
		$ionicSideMenuDelegate.canDragContent(false);
		// Invoke the cropper tool on the preview image	
		jQuery('#avatar-preview').cropper({
			aspectRatio: 1/1
		});
	};
	var crop = function(){
		$ionicSideMenuDelegate.canDragContent(true);
		// Get image data from crop area
		var dataURL = 
			$('#avatar-preview')
				.cropper("getCroppedCanvas")
				.toDataURL();
		// Destroy the cropper instance
		$('#avatar-preview').cropper('destroy');
		// Replace the image
		$('#avatar-preview').attr('src',dataURL);
		// Replace the meteor data
		$scope.newUser.face = dataURL;
	}
	
	$scope.cropButton = function(){
		if( $scope.cropping ){
			crop();
		}else{
			startCropper();
		}
	}

	// Create the user
	$scope.createUser = function(){
		
		Meteor.call("registerUser",{
			username: $scope.newUser.username,
			email: $scope.newUser.email,
			password: $scope.newUser.password,
			name: $scope.newUser.name,
			company: $scope.newUser.company,
			position: $scope.newUser.position,
			phone: $scope.newUser.phone, 
			face: $scope.newUser.face,
			isAdmin: $scope.newUser.isAdmin
		}, function(error, result){
			if(error){
				console.log("User registration error: "+error);
			}else{
				if(result){
					resetNewUser();
					$state.go('menu.eTab.attendees');
				}else{
					console.log("Error: registerUser didn't return an ID");
				}
			}
		});
		
	}
	
	$scope.amISuperAdmin = function(){
		return Roles.userIsInRole($scope.me, 'super-admin');
	}
	
})

;