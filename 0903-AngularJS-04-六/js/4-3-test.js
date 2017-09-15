/**
 * Created by Administrator on 2016/09/03.
 */
var app = angular.module('myApp',[]);
//定义一个服务:$calc，它有一个add方法计算参数的和，并返回
app.factory('$calc',function(){
    return {
        add:function(x,y){
            return x + y;
        }
    }
})
//控制器的声明    通过行内式依赖注入的方式
//第二个参数不同于以往的   function(){}，而是一个数组，里面有三个参数在一行，称为行内式。最后一个参数必须是函数体！！！
app.controller('myCtrl',["$scope","$calc",function($scope,$calc){
    $scope.result = 0;
    $scope.x = 0;
    $scope.y = 0;
    $scope.add = function(){
        $scope.result = $calc.add($scope.x,$scope.y);
    }
}]);