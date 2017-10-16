(function () {
    "use strict";
   angular.module('ksApp')
       .directive('ksThree', function () {
       return {
           restrict: 'E',
           templateUrl: "./templates/ksThree.html"
       }
   })
}());