'use strict';
angular.module('simangApp')
    .directive('fade', function ($animate) {
        return function ( scope, element, attrs ) {

            console.log("found fade directive")

            var evalScope = function (newVal) {

                console.log("eval scope")
                if(newVal) {
                    $animate.addClass(element, "fade");
                } else {
                    $animate.removeClass(element, "fade");
                }
            }
            scope.$watch( "isHidden" ,  evalScope );

        }
    });