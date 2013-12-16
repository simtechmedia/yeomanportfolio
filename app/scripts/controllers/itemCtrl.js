'use strict';

angular.module('simangApp')
.controller('ItemController', function ($scope, $route, $routeParams, DataService) {

	$scope.helloWorld = $routeParams.name;


	$scope.populateView = function() {

		console.log("populating view");
		console.log(DataService.minorPost)

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
