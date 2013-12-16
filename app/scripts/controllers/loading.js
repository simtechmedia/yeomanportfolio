'use strict';

angular.module('simangApp')
  .controller('LoadingCtrl', function ($scope) {
        $scope.loading      = true;	

        $scope.$on('DATA_LOADED', function (event) {
            $scope.loading = false;
        });

  });
