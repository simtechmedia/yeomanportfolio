'use strict';

angular.module('simangApp')
  .controller('ProjectBoxCtrl', function ($scope,$rootScope, $location) {

    $scope.selected = false;

    $scope.boxClick = function(){

         console.log($scope.selected)
        
        if( $scope.selected == true ) {
            // console.log($scope.$parent.item)
            console.log("changing location")
            $location.path("/"+$scope.$parent.item.slug);
        }

        $rootScope.$emit("PROJECT_BOX_CLICK")

        $scope.selected = !$scope.selected;

        console.log($scope.selected)

    }

    $rootScope.$on("PROJECT_BOX_CLICK", function(){
        console.log("on project box click")

        if($scope.selected == true ) { $scope.selected = false }
    })

  });
