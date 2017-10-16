/**
 *  Created by David Prentice on 6/20/2015.
 *  All Rights Reserved, 2015.
 */
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