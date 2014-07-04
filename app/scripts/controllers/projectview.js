'use strict';

app.controller('ProjectViewCtrl',function($scope,$routeParams,Project,User){

	$scope.project=Project.find($routeParams.projectId);

	$scope.users=User.all;

	$scope.hidedMember=false;

	$scope.membersOfProject=Project.membersOfProject($routeParams.projectId);

	$scope.hide=function(){
		$scope.hidedMember=true;
	};

	$scope.show=function(){
		$scope.hidedMember=false;
	};

	$scope.alreadyMember=function(name){
		var result=false;
		angular.forEach($scope.membersOfProject,function(member){
			if(name==member){
				result=true;
			}
		});
		return result;
	};
	
	$scope.addMember=function(){
		Project.addMember($routeParams.projectId,$scope.member);
		$scope.member='';
		$scope.add=false;
	};

	$scope.removeMember=function(memberId){
		Project.deleteMember($routeParams.projectId,memberId);
	};

	$scope.submitProject=function(){
		Project.update($routeParams.projectId,$scope.project);
	}
});