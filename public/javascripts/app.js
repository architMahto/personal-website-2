(function() {
  'use strict';

  angular.module('personalApp', ['ui.materialize', 'ui.router', 'ngSanitize', 'angular-timeline', 'navControllers', 'homeControllers', 'projectsControllers', 'skillsControllers', 'historyControllers'])
    .config(routerConfig)

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'homeController as homeCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html',
        controller: 'projectsController as projectsCtrl'
      })
      .state('skills', {
        url: '/skills',
        templateUrl: 'views/skills.html',
        controller: 'skillsController as skillsCtrl'
      })
      .state('history', {
        url: '/history',
        templateUrl: 'views/history.html',
        controller: 'historyController as historyCtrl'
      })
      .state('education', {
        url: '/education',
        templateUrl: 'views/education.html'
      })
      .state('achievements', {
        url: '/achievements',
        templateUrl: 'views/achievements.html'
      })
      $urlRouterProvider.otherwise('/');
  }

}());
