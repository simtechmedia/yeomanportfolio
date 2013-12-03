'use strict';

angular.module('simangApp')
  .controller('ProjectBoxCtrl', function ($scope) {

    $scope.selected = false;

    $scope.boxClick = function(){

        $scope.selected = !$scope.selected;

    }

  });
