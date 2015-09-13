angular.module('stakes')

.factory( 'Companies', function(){
	
	var companies = [
		{
			id: 1,
			name: 'Stakes',
			reps: [
				1, 2
			],
			premise: 'Bet on contests, win big!',
			pitch: 'How would you like to bet on contests like you bet on races?  Now you can!  Bet virtual money on real contests, win and boost your bragging rights'
		}, {
			id: 2,
			name: 'Fun tracker!',
			reps: [
				3
			],
			premise: 'Track your activities',
			pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}, {
			id: 3,
			name: 'Workout scheduler',
			reps: [
				4, 2, 5, 3, 1
			],
			premise: 'Schedule your workouts, set goals, track progress!',
			pitch: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	];
	
	return {
		all: function(){
			return companies;
		},
		getCompany: function(companyId) {
			for( var i=0; i < companies.length; i++){
				if( companies[i].id === parseInt(companyId) ){
					return companies[i];
				}
			}
		}
	};
})

;