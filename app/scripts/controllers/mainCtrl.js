'use strict';

angular.module('simangApp')
    .controller('MainCtrl', function ($scope, $log, DataService) {

        $scope.majorPosts   = [];

        $scope.isHiden      = false;
        $scope.fader        = function () {
            $scope.isHidden = !$scope.isHidden;
        }

        $scope.loading      = true;

        // Get Portfolio Items From Service
        DataService.getPortfolioItems();

        $scope.$on('DATA_LOADED', function (event) {
            console.log("data loaded on controller");

            $log.log(DataService.majorPost);

            $scope.createDataArray(DataService.majorPost, $scope.majorPosts );
//            $scope.

            $scope.loading = false;
        });

        $scope.createDataArray = function ( dataSource , arrayTarget) {

            for( var i = 0 ; i < dataSource.length ; i++ ) {

                var thumbnail ;

                // Gets Thumbnail image that has been marked as "FI" in the description
                for ( var j = 0 ; j < dataSource[i].attachments.length ; j++ ) {
                    if ( dataSource[i].attachments[j].description == "fi" ) { thumbnail = dataSource[i].attachments[j].url  }
                }

                console.log ( thumbnail );


            }
        };

    });
