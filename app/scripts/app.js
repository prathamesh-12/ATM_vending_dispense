'use strict';

/**
 * @ngdoc overview
 * @name atmDispenseApp
 * @description
 * # atmDispenseApp
 *
 * Main module of the application.
 */
angular
  .module('atmDispenseApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/unlimited_coins', {
        templateUrl: 'unlimited/views/UnlimitedCoins.html',
        controller: 'UnlimitedCoinsCtrl',
        controllerAs: 'main',
        activetab: 'unlimited_coins'
      })
      .when('/limited_coins', {
        templateUrl: 'limited/views/LimitedCoins.html',
        controller: 'LimitedCoinsCtrl',
        controllerAs: 'about',
        activetab: 'limited_coins'
      })
      .otherwise({
        redirectTo: '/unlimited_coins'
      });
  })
  .controller("appCtrl", ["$scope", "$route", function($scope, $route) {  // to highlight current active tab in navigation
    $scope.$route = $route;
  }]);
