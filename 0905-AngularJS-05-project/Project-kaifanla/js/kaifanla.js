/**
 * Created by Administrator on 2016/09/05.
 */
//定义模块
var app = angular.module('kaiFanLa',["ng","ngRoute"]);
/*//定义start控制器
    app.controller('startCtrl',function($scope,$location){
        $scope.jump = function(){
            $location.path('/start');
        }
    });
    //定义main控制器
    app.controller('mainCtrl',function($scope,$location){
        $scope.jump = function(){
            $location.path('/start');
        }
    });
    //定义detail控制器
    app.controller('detailCtrl',function($scope,$location){
        $scope.jump = function(){
            $location.path('/start');
        }
    });
    //定义order控制器
    app.controller('orderCtrl',function($scope,$location){
        $scope.jump = function(){
            $location.path('/start');
        }
    });
    //定义myOrder控制器
    app.controller('myOrderCtrl',function($scope,$location){
        $scope.jump = function(){
            $location.path('/start');
        }
    });
*/
//定义父控制器
app.controller('parentCtrl',function ($scope, $location) {
    $scope.jump = function(path){
        $location.path(path);
    }
})
//配置路由词典
app.config(function($routeProvider){
    $routeProvider.when("/start",{templateUrl:"tpl/start.html"})
                  .when("/main",{templateUrl:"tpl/main.html"})
                  .when("/detail",{templateUrl:"tpl/detail.html"})
                  .when("/order",{templateUrl:"tpl/order.html"})
                  .when("/myOrder",{templateUrl:"tpl/myOrder.html"})
                  .otherwise({redirectTo:"/main"});
});