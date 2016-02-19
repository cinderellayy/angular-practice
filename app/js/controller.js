'use strict';
var app = angular.module('phonecatControllers', []);

app.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';


}])

app.controller('PhoneDetailCtrl', ['$scope', 'Phone', '$routeParams',
    function($scope, Phone, $routeParams) {
        $scope.phone = Phone.get({ phoneId: $routeParams.phoneId }, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });



        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }
]);


