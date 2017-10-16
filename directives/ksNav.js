(function () {
    "use strict";
    angular.module('ksApp')
        .directive('ksNav', function () {
            return {
                restrict: 'E',
                templateUrl: "./templates/ksNav.html"
            }
        })
}());