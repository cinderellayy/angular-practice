var app = angular.module('phonecatApp', []);

app.controller('PhoneListCtrl', ['$scope', function($scope) {
    $scope.phones = [{
        "name": "Nokie",
        "snippet": "Fast just got faster with Nexus S.",
        'age': 1
    }, {
        "name": "Motorola",
        "snippet": "The Next, Next Generation tablet.",
        "age": 3
    }, {
        "name": "iPhone",
        "snippet": "The Next, Next Generation tablet.",
        "age": 2
    }];
    $scope.orderProp = 'age';
}]);
