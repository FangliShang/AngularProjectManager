'use strict';

app.controller('NavCtrl',function($scope,$location, Post, Auth,$rootScope){
	$scope.post={url:'http://',title:''};
	$scope.homeActive="active";
	$scope.projectsActive="";
	$scope.postsActive="";

	$rootScope.activer=function(element){
		if(element=="homeActive"){
			$scope.homeActive="active";
			$scope.projectsActive="";
			$scope.postsActive="";
		}else if(element=="postsActive"){
			$scope.postsActive="active";
			$scope.homeActive="";
			$scope.projectsActive="";
		}else{
			$scope.postsActive="";
			$scope.homeActive="";
			$scope.projectsActive="active";
		}	
	};

	$scope.submitPost=function(){
		Post.create($scope.post).then(function(postId){
			$scope.post={url:'http://',title:''};

			$location.path('/posts/'+postId);
			
		});
	};



	$scope.logout=function(){
		Auth.logout();
	};
});