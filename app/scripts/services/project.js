'use strict';

app.factory('Project', function  ($firebase,FIREBASE_URL, User) {
	var ref = new Firebase(FIREBASE_URL+'projects');

	var projects=$firebase(ref);

	var Project={
		all:projects,
		create:function(project){
			if (User.signedIn()){
				var user=User.getCurrent();
				project.owner=user.username;
				project.state="todo";
				return projects.$add(project).then(function(ref){
					var projectId=ref.name();
					projects.$child(projectId).$child('members').$add(user.username);
					return projectId;
				});
			}
		},
		update:function(projectId,project){
			if(User.signedIn()){
				 projects.$child(projectId).$set(project);			
			}
		},
		changeState:function(projectId,state){
			if (User.signedIn()) {
				projects.$child(projectId).$child('state').$set(state);
			}
		},
		membersOfProject:function(projectId){
			return projects.$child(projectId).$child('members');
		},
		find:function(projectId){
			return projects.$child(projectId);
		},
		delete:function(projectId){
			if(User.signedIn()){
				var project=Project.find(projectId);

				project.$on('loaded',function(){
					if(User.getCurrent().username===project.owner){
						projects.$remove(projectId);
					}
				});

			}
		},
		addMember:function(projectId,member){
			if(User.signedIn()){
				var user=User.getCurrent();
				var project=Project.find(projectId);
				project.$on('loaded',function(){
					if(user.username===project.owner){
							projects.$child(projectId).$child('members').$add(member);											
					}
				});
			}
		},
		deleteMember:function(projectId,memberId){
			if (User.signedIn()) {
				var user=User.getCurrent();			
				var project=Project.find(projectId);
				project.$on('loaded',function(){
					if(user.username===project.owner){
						projects.$child(projectId).$child('members').$remove(memberId);
					}
				});
			}
		}

	};

	return Project;
});