angular.module("testApp", [])
    .directive("sayHello", function () {
        return {
            template: '<p>Hello this is a directive</p>'
        };
    });

//
// angular.module('LazyLoadTest',[])
//     .controller('myCtrl',function($scope){
//         console.log('myCtrl is loading');
//         $scope.test ='hello this is lazyloaded!!';
//     });
