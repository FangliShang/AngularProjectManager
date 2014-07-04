'use strict';

app.controller('UsersCtrl',function($scope, Auth, User,Project){

	$scope.users=User.all;

	$scope.hasProjects=function(username){
		var projects=Project.all;
		$scope.has=[];
		angular.forEach(projects,function(project){
				if(project.owner==username){
					$scope.has.push(project);
				}
		});
		return $scope.has;	
	};

	
	$scope.logout=function(){
		Auth.logout();
	};
});