'use strict';

angular.module('simangApp')
  .service('DataService', function DataService($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function


        this.getPortfolioItems = function() {

            $http.jsonp("http://localhost/simtechmedia/?json=1&post_type=portfolio&callback=JSON_CALLBACK")
                .success(function(data){
                 console.log("processing data...");
                 $rootScope.$broadcast('DATA_LOADED');

            }).error(function(data,status,headers,config) {




            })
        }

        this.processData= function(data) {

        }

  });
