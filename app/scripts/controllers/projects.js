'use strict';

app.controller('ProjectsCtrl',function($scope,$location, Auth,Project,$dialogs, $anchorScroll,$rootScope){
	
	$scope.hidedToDo=false;
	$scope.hidedInProgress=false;
	$scope.hidedDone=false;

	$scope.hide=function(e){
		if(e=="hidedToDo"){
			$scope.hidedToDo=true;
		}else if(e=="hidedInProgress"){
			$scope.hidedInProgress=true;
		}else{
			$scope.hidedDone=true;
		}
	};

	$scope.show=function(e){
		if(e=="hidedToDo"){
			$scope.hidedToDo=false;
		}else if(e=="hidedInProgress"){
			$scope.hidedInProgress=false;
		}else{
			$scope.hidedDone=false;
		}
	};
	$scope.create=false;
	$scope.submitProject=function(){
		Project.create($scope.project).then(function(projectId){
			$scope.project={};	
			$scope.create=false;		
		});
	};

	$scope.projects=Project.all;

	$scope.goto = function (e){
		// set the location.hash to the id of
		// the element you wish to scroll to.
		$location.hash(e);

		// call $anchorScroll()
		$anchorScroll();
	};

	$scope.confirmation=function(projectId){
		var dlg = $dialogs.confirm('Please Confirm','Do you really want to delete this project?');
        dlg.result.then(function(btn){
          $scope.removeProject(projectId);
        },function(btn){
          
        });
	};

	$scope.removeProject=function(projectId){
		Project.delete(projectId);
	};

	$scope.onDropComplete1=function(data,evt,state){
            Project.changeState(data,state);
     };


     $scope.onDragSuccess1=function(data,evt){
           
    };

	$scope.logout=function(){
		Auth.logout();
	};

	$('[data-toggle=offcanvas]').click(function() {
	  	$(this).toggleClass('visible-xs visible-sm text-center');
	    $(this).find('i').toggleClass('glyphicon-chevron-right glyphicon-chevron-left');
	    $('.row-offcanvas').toggleClass('active');
	    $('#lg-menu').toggleClass('hidden-xs hidden-sm').toggleClass('visible-xs visible-sm');
	    $('#xs-menu').toggleClass('visible-xs visible-sm').toggleClass('hidden-xs hidden-sm');
	    $('#btnShow').toggle();
	});


	


	
});