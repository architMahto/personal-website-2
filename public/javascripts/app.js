(function() {
  'use strict';

  angular.module('personalApp', ['ui.materialize', 'ui.router', 'navControllers'])
    .config(routerConfig)

  routerConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

  function routerConfig($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'views/projects.html'
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
