'use strict';

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatControllers',
    'phonecatFilters'
]);

phonecatApp.config(['$routeProvider', function($routeProvider) {
    // body...
    $routeProvider.when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
    }).
    when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).
    when('/phones/:phoneId/:age', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
    }).
    otherwise({
        redirectTo: '/phones'
    });
}]);
