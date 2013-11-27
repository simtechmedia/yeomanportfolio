'use strict';
angular.module('simangApp')
    .directive('fade', function ($animate) {
        return function ( scope, element, attrs ) {

            $animate.addClass(element, "fade");

            /*
            var evalScope = function (newVal) {
                if(newVal) {
                    $animate.addClass(element, "fade");
                } else {
                    $animate.removeClass(element, "fade");
                }
            }
            scope.$watch( "isHidden" ,  evalScope );
            */
        }
    });