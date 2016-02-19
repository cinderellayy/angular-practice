'use strict';
var app = angular.module('phonecatControllers', []);

app.controller('PhoneListCtrl', ['$scope', '$http',function($scope,$http) {
    $http.get('phones/phones.json').success(function (data) {
    	$scope.phones = data;
    });
    $scope.orderProp = 'age';
}]);

app.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
     $scope.age = $routeParams.age;
  }]);
