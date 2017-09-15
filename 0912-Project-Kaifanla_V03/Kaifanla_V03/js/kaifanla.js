/**
 * Created by Administrator on 2016/3/20.
 */
angular.module('kaifanla',[/*'ng'*/]).
    controller('parentCtr',function($scope/*,$location*/){
        $scope.jump = function(routPath){
            //$location.path(routPath);
            //新方式   JQM
            $.mobile.changePage(routPath,{transition:'slide'});
        };
        $(document).on('pagecreate',function(event){
            var page = event.target;
            //获取当前元素对应的作用域对象
            var scope = $(page).scope();
            //获取注入器对象
            var injector = $(page).injector();
            //调用注入器，注入$compile服务，为程序提供$compile服务
            injector.invoke(function($compile){
                //编译并链接DOM节点
                $compile($(page))(scope);
                scope.$digest();
            });
        })
    }).controller('startCtr',function($scope){

    }).controller('mainCtr',function($scope,$http){
        /*加载数据*/
        $scope.hasMore = true;   //是否还有更多数据可供加载
        //$scope.dishList = [];  //用于保存所有菜品数据的数组
        //控制器初始化/页面加载时，从服务器读取最前面的5条记录
        $http.get('../data/dish_getbypage.php?start=0').
            success(function(data){
                $scope.dishList = data;//$scope.dishList.concat(data);
            });
        //“加载更多”按钮的单击事件处理函数：每点击一次，加载更多的5条数据
        $scope.loadMore = function(){
            $http.get('../data/dish_getbypage.php?start='+$scope.dishList.length).
                success(function(data){
                    if(data.length < 5){  //服务器返回的菜品数量不足5条
                        $scope.hasMore = false;
                    }
                    $scope.dishList = $scope.dishList.concat(data);
                });
        };
        /*****************************************************/
        //定义一个方法，将传过来的id存储起来，然后跳转到detail
        $scope.showDetail = function(id){
            //通过localStorage方法存储id
            localStorage.setItem('id',id);
            $scope.jump('detail.html');
            console.log('id is '+id);
        };
        /*****************************************************/
        //监视搜索框中的内容是否改变——监视 kw Model变量
        $scope.$watch('kw', function(){
            if( $scope.kw ){
                $http.get('../data/dish_getbykw.php?kw='+$scope.kw).
                    success(function(data){
                        $scope.dishList = data;
                    })
            }
        })
    }).controller('detailCtr',function($scope,$http){
        //读取路由URL中的参数
        //console.log($routeParams.dishid)
        $http.get('../data/dish_getbyid.php?id='+localStorage.getItem('id')).
            success(function(data){
                //console.log('接收到服务器返回的菜品详情：')
                //console.log(data);
                $scope.dish = data[0];
            })
    }).controller('orderCtr',function($scope,$http,$rootScope){
        //console.log($routeParams.dishid);
        //定义order对象，用于保存order数据
        $scope.order = {"did":localStorage.getItem('id')};
        $scope.submitOrder = function(){
            //$scope.succMsg = '订餐成功！您的订单编号为：5。您可以在用户中心查看订单状态。';
           //$scope.errMsg = '订餐失败！错误码为：404';
            //console.log($scope.order);
            var str = jQuery.param($scope.order);
            console.log(str);
            $http.get('../data/order_add.php?'+str).
                success(function(data){
                    //console.log(data[0].msg);
                    console.log('已提交');
                    if(data[0].msg == 'succ'){
                        $scope.succMsg = '订餐成功！您的订单编号为：'+data[0].did+'。您可以在用户中心查看订单状态。';
                        //记载用户手机号，用于查询订单
                        $rootScope.phone = $scope.order.phone;
                    }else {
                        $scope.errMsg = '订餐失败！错误码为：'+data[0].reason;
                    }
                    //console.log($scope.succMsg);
                    //console.log($scope.errMsg);
                });
        }
    }).controller('myorderCtr',function($scope,$http,$rootScope){
        //console.log($rootScope.phone);
        $http.get('../data/order_getbyphone.php?phone='+$rootScope.phone).
            success(function(data){
                 $scope.orderList = data;
                console.log(data);
        });
        //点击图片跳转到详情页方法
        $scope.showDetail = function(){

        };
        /* TODO 以下路由配置方案可删掉 */
    })/*.config(function($routeProvider){
        $routeProvider.
            when('/start',{
                templateUrl: 'tpl/start.html',
                controller: 'startCtr'
            }).
            when('/main',{
                templateUrl:'tpl/main.html',
                controller:'mainCtr'
            }).
            when('/detail/:dishid',{
                templateUrl:'tpl/detail.html',
                controller:'detailCtr'
            }).
            when('/order/:dishid',{
                templateUrl:'tpl/order.html',
                controller:'orderCtr'
            }).
            when('/myorder',{
                templateUrl:'tpl/myorder.html',
                controller:'myorderCtr'
            }).
            otherwise({
                redirectTo:'/start'
            })
    })*/