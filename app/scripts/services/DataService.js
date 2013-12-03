'use strict';

angular.module('simangApp')
  .service('DataService', function DataService($http, $rootScope, $log) {

        this.majorPost    =[];
        this.minorPost    =[];

        this.getPortfolioItems = function() {

            var _this = this;

            $http.jsonp("http://localhost/simtechmedia/?json=1&post_type=portfolio&callback=JSON_CALLBACK")
                .success(function(data) {
                 console.log("processing data...");

                    var postData = data.posts;

                    for( var i = 0 ; i < postData.length ; i++ ) {

                        if(postData[i].custom_fields.portfolio_type == "major")  {
                            _this.majorPost.push(postData[i])
                        } else {
                            _this.minorPost.push(postData[i])
                        }

//                      console.log(console.log(_this.data.posts[i]))
                    }

                 $rootScope.$broadcast('DATA_LOADED');

            }).error(function(data,status,headers,config) {

                $log.error("Could not get data");


            })
        }


  });
