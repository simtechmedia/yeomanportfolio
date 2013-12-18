'use strict';

angular.module('simangApp')
.controller('ItemController', function ($scope, $route, $rootScope, $routeParams, $location, DataService) {

	$scope.helloWorld = $routeParams.name;

    $scope.pageData;

	$scope.populateView = function() {

		console.log("populating view");

        // Get the Data using the slug
        var slug = $location.path().substr(1,$location.path().length-1);

        for( var i = 0 ;  i < DataService.data.length ; i++ )
        {
            if( slug == DataService.data[i].slug) {
                $scope.pageData = DataService.data[i];
                break;
            }
        }
	}

	$scope.$on('DATA_LOADED', function (event) {
		$scope.populateView();
	});

	console.log(DataService.loadedData)

	// Check To see if the data is loaded or the user went straight 
	// to this page
	if ( DataService.loadedData === false ) {
		DataService.getPortfolioItems();
	} else {
		$scope.populateView();
	}

});
