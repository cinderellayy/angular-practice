'use strict';
var app = angular.module('phonecatControllers', []);

app.controller('PhoneListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
        $scope.phones = data;
    });
    $scope.orderProp = 'age';
}]);

app.controller('PhoneDetailCtrl', ['$scope', '$http', '$routeParams',
    function($scope, $http, $routeParams) {
        $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
            $scope.phone = data;
        });
    }
]);
