(function () {
    "use strict";
    angular.module('ksApp')
        .directive('ksTwo', function () {
            return {
                restrict: 'E',
                templateUrl: "./templates/ksTwo.html"
            }
        })
}());