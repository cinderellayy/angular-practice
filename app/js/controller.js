var app = angular.module('test',[]);

app.controller('PhoneListCtrl',['$scope',function($scope){
	$scope.phones = [
    {"name": "Nokie",
     "snippet": "Fast just got faster with Nexus S."},
    {"name": "Motorola",
     "snippet": "The Next, Next Generation tablet."},
    {"name": "iPhone",
     "snippet": "The Next, Next Generation tablet."}
  ];
}]);

