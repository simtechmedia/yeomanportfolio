'use strict';

angular.module('simangApp')
  .directive('major', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the majorDir directive');

          var onDataLoad = function(){
              if ( scope.data != undefined ) {
                  console.log("major has data");
              }
          }

          scope.$watch( "data" ,  onDataLoad );
      }
    };
  });
