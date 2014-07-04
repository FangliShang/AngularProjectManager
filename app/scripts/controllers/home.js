'use strict';

app.controller('HomeCtrl',function($scope,Post, Auth){
	$scope.post={url:'http://',title:''};

	$scope.logout=function(){
		Auth.logout();
	};
});