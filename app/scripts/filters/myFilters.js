'use strict';

angular.module('simangApp')
  .filter('antiDash', function () {
    return function(input) {
        if( input==null || input.length === 0 ){
            return null;
        }else{
            return input.replace("&#8211;", "-");
        }
    }
  });
