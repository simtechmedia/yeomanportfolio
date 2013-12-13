'use strict';

angular.module('simangApp')
  .controller('ItemController', function ($scope, $route, $routeParams) {

  	$scope.helloWorld = $routeParams.name;

   
  });
