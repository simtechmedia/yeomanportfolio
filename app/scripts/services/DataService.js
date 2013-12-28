'use strict';

angular.module('simangApp')
    .service('DataService', function DataService($http, $rootScope, $log) {

        this.majorPost = [];      // Major Posts
        this.minorPost = [];      // Minor Posts
        this.data = [];      // All Posts
        this.loadedData = false;

        this.getPortfolioItems = function () {

            var _this = this;

            $http.jsonp("http://www.simtechmedia.com/?json=1&post_type=portfolio&callback=JSON_CALLBACK")
                .success(function (data) {
                    console.log("processing data...");

                    _this.data = data.posts;

                    for (var i = 0; i < _this.data.length; i++) {

                        if (_this.data[i].custom_fields.portfolio_type == "major") {
                            _this.majorPost.push(_this.data[i])
                        } else {
                            _this.minorPost.push(_this.data[i])
                        }
//                      console.log(console.log(_this.data.posts[i]))
                    }

                    _this.loadedData = true;

                    $rootScope.$broadcast('DATA_LOADED');

                }).error(function (data, status, headers, config) {
                    $log.error("Could not get data");
                })
        }
    });
