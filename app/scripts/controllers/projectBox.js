'use strict';

angular.module('simangApp')
  .controller('ProjectBoxCtrl', function ($scope,$rootScope) {

    $scope.selected = false;

    $scope.boxClick = function(){

        $rootScope.$emit("PROJECT_BOX_CLICK")

        $scope.selected = !$scope.selected;

    }

    $rootScope.$on("PROJECT_BOX_CLICK", function(){
        console.log("on project box click")

        if($scope.selected == true ) { $scope.selected = false }
    })

  });
