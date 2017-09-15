/**
 * Created by Administrator on 2016/08/26.
 */
/*
* TODO 模拟Bootstrap底层的javascript逻辑
*   1、通过js方法
*   2、通过
* */
/*
* TODO 模拟js方法：
*   调用方式
*   分析
*       jquery方法的调用方式
*           $.方法名()     --  全局函数
*           $().方法名()   --  对象方法
* */
$.fn.extend({
    //TODO type参数   --  表示当前的操作
    alert:function(type){
        //TODO 关闭当前的警告框
        if(type == "close"){
            //TODO 问题：如何得到当前的警告框标签
            $(this).parent().css('display','none');
        }
    }
})