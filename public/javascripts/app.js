(function() {
  'use strict';

  angular.module('personalApp', ['ui.materialize', 'ui.router', 'ngSanitize', 'navControllers', 'homeControllers', 'projectsControllers'])
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
      .state('technical-skills', {
        url: '/technical-skills',
        templateUrl: 'views/technical-skills.html'
      })
      .state('soft-skills', {
        url: '/soft-skills',
        templateUrl: 'views/soft-skills.html'
      })
      .state('history', {
        url: '/history',
        templateUrl: 'views/history.html'
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
