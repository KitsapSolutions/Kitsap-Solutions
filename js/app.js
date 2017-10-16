/**
 *  Created by David Prentice on 6/14/2015.
 *  All Rights Reserved, 2015.
 */
(function () {
    "use strict";
var ksApp = angular.module('ksApp', ['ui.router']);

    ksApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $stateProvider
                .state("home", {url: "/", templateUrl: "./templates/home.html"})
                .state("about", {url: "/about", templateUrl: "./templates/about.html"})
                .state("contact", {url: "/contact", templateUrl: "./templates/contact.html"})
                .state("forensics", {url: "/forensics", templateUrl: "./templates/forensics.html"})
                .state("security", {url: "/security", templateUrl: "./templates/security.html"})
                .state("social", {url: "/social", templateUrl: "./templates/social.html"})
                .state("technology", {url: "/technology", templateUrl: "./templates/technology.html"})
                .state("internet", {url: "/internet", templateUrl: "./templates/internet.html"})
                .state("management",{url: "/management", templateUrl: "./templates/management.html"})
                .state("bidboard", {url: "/bidboard", templateUrl: "./templates/bidboard.html"});
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true);
        }]);
}());