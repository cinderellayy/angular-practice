'use strict';
var app = angular.module('phonecatControllers', []);

app.controller('PhoneListCtrl', ['$scope', '$http', 'Phone', function($scope, $http, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    //初始化数组，以便为每一个ng-model分配一个对象
    var i = 0;
    $scope.items = []; // 存储所有列表
    $scope.buyclick = function(phone) {
        var flag = 0;
        var item;
        for (var i = $scope.items.length; i > 0; i--) {
            item = $scope.items[i - 1];
            if (item.id == phone.id) {
                flag = 1;
                item.number = phone.number;

            }
        }
        if (flag == 0) {
            if (!phone.number) {
                phone.number = 1;
            }
            $scope.items.push(phone);

        }
        $scope.calc();
        $scope.buyshow = true;
    };
    $scope.numberchange = function(phone) {
            $scope.calc();
        }
        /**
         * 计算总价
         */
    $scope.calc = function() {
        // $scope.items 
        $scope.sum = 0;
        $scope.items.forEach(function(val, index) {
            $scope.sum += val.number * val.price;
        });

    }

    $scope.submit = function() {
        // body...

        var array = [];

        console.log($scope.items);
        for (var i = 0; i < $scope.items.length; i++) {

            var item = $scope.items[i];
            array.push({
                id: item.id,
                name: item.name,
                number: item.nubmer
            });
        }

        $http({ 
            method: 'GET', 
            url: './data.json'
        },{
            data: angular.toJson(array)

        }).
            then(function(response) {
                alert('success')
            }, function(response) {
                alert('failed');
            });
    };

    //   var req = {
    //       method: 'GET',
    //       url: './data.json',
    //       data: {
    //           purchas:  array
    //       }
    //   }
    //   var deferred = $scope.defer();  
    //   $http(req).then(function(res) {  
    //   deferred.resolve(res);  
    // }, function(res) {  
    //   deferred.resolve(res);  
    // });  

// }
}]);

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
app.directive('priceFormat', function() {
    // Runs during compile
    var num = /^[1-9]*[1-9][0-9]*$/;
    return {
        scope: {
            number: '=ngModel'

        },
        link: function(scope, element, attrs) {
            // body...
            element.on('blur', function(argument) {
                // body...
                if (!num.test(scope.number)) {
                    element.addClass("red");
                } else {
                    element.removeClass("red");
                }
                console.log(scope.number);
            });



        },
        restrict: 'A'

    };
});
