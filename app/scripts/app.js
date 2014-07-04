/*global app:true*/
'use strict';

var app=angular
  .module('angNewsApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase',
    'ngDraggable',
    'ui.bootstrap',
    'dialogs'
  ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl:'views/home.html',
        controller:'HomeCtrl'
      })
      .when('/projects',{
        templateUrl:'views/projects.html',
        controller:'ProjectsCtrl'
      })
      .when('/projects/:projectId',{
        templateUrl:'views/showproject.html',
        controller:'ProjectViewCtrl'
      })
      .when('/users',{
        templateUrl:'views/users.html',
        controller:'UsersCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/posts/:postId',{
        templateUrl:'views/showpost.html',
        controller:'PostViewCtrl'
      })
      .when('/register',{
        templateUrl:'views/register.html',
        controller:'AuthCtrl'
      })
      .when('/login',{
        templateUrl:'views/login.html',
        controller:'AuthCtrl'
      })
      .when('/users/:username',{
        templateUrl:'views/profile.html',
        controller:'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.constant('FIREBASE_URL','https://fiery-fire-7290.firebaseio.com/');
