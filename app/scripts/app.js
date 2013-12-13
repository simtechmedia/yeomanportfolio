'use strict';

angular.module('simangApp', ['ngRoute' , 'ngAnimate' ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs : 'app'
      })
      .when('/:name',{
        templateUrl:'views/item.html',
        controller: 'ItemController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
