/**
 * Created by Administrator on 2016/09/03.
 */
var app = angular.module('myApp',[]);
//����һ������:$calc������һ��add������������ĺͣ�������
app.factory('$calc',function(){
    return {
        add:function(x,y){
            return x + y;
        }
    }
})
//������������    ͨ������ʽ����ע��ķ�ʽ
//�ڶ���������ͬ��������   function(){}������һ�����飬����������������һ�У���Ϊ����ʽ�����һ�����������Ǻ����壡����
app.controller('myCtrl',["$scope","$calc",function($scope,$calc){
    $scope.result = 0;
    $scope.x = 0;
    $scope.y = 0;
    $scope.add = function(){
        $scope.result = $calc.add($scope.x,$scope.y);
    }
}]);