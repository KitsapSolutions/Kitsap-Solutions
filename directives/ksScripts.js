(function () {
    'use strict';
    angular
        .module('ksApp')
        .directive('ksScripts', function () {
        return {
            restrict: 'E',
            templateUrl: "./templates/scripts.html"
        };
    });
})();