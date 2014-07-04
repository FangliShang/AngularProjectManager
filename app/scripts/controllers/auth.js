'use strict';

app.controller('AuthCtrl',
	function($scope, $location, Auth, User,$rootScope){
		if (User.signedIn()){
			$location.path('/');
		}

		$scope.$on('$firebaseSimpleLogin:Login',function(){
			$location.path('/');
		});

		$scope.login=function(){
			Auth.login($scope.user).then(function(){
				$location.path('/');
				$rootScope.activer('homeActive');
			},function(error){
				$scope.error=error.toString();
			});
		};

		$scope.register=function(){
			Auth.register($scope.user).then(function(authUser){
				User.create(authUser,$scope.user.username);
				Auth.login(authUser);
				$location.path('/');
			},function(error){
				$scope.error=error.toString();
			});
		};
	});