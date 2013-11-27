'use strict';

angular.module('simangApp')
    .controller('MainCtrl', function ($scope, $log, DataService) {

        $scope.isHiden = false;

        $scope.fader = function () {
            console.log("faderrrr");
            $scope.isHidden = !$scope.isHidden;

        }

        $scope.loading = true;

        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        // Get Portfolio Items From Service
        DataService.getPortfolioItems();

        $scope.$on('DATA_LOADED', function (event, track) {
            console.log("data loaded on controller");
            $scope.loading = false;
        });
    });
