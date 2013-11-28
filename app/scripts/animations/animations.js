'use strict';
angular.module('simangApp')
    .animation('.fader', function() {
        return {
            addClass : function(element, className ) {
                console.log('adding class for fadein')
//                TweenMax.set(element, { opacity:0 });
                TweenMax.to(element, 1, { opacity:1});
            },
            removeClass:function(element, className ) {
                console.log(element);
                console.log("removing class for fadout")
                TweenMax.to(element, 1, { opacity:0.5});
            }
        }
    })