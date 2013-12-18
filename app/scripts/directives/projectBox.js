'use strict';

angular.module('simangApp')
  .directive('projectBox', function () {
    return {
//      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
//        element.text('this is the projectBox directive');

         element.bind("click", function(e){
//             console.log("project click");
//             console.log(element)
             angular.element(element.find('view')).addClass("opacity1");
         })
      }
    };
  });
