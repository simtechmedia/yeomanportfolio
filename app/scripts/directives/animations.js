'use strict';
angular.module('simangApp')
    .directive('fadeIn', function () {
        return {
            link: function (scope, element, attrs) {
                console.log("fade in directive found");
                element.text('this is the fadeIn directive');
            }
        };
    });