'use strict';

angular.module('simangApp')
  .controller('PageCtrl', function ($scope, $rootScope, $location) {
        $scope.loading          = true;
        $scope.backAvailable    = false;

        $scope.goBack = function() {
            $location.path("/");
            $scope.backAvailable    = false;
        }

        // Listens for Changes for the routing
        $rootScope.$on('$locationChangeSuccess', function () {
//            console.log('$locationChangeSuccess changed!' + $location.path() );
            if($location.path() == "/"){
                $scope.backAvailable    = false;
            } else {
                $scope.backAvailable    = true;
            }
        });
        $scope.$on('DATA_LOADED', function (event) {
            $scope.loading = false;
        });
  });
