/**
 * Created by Administrator on 2016/08/19.
 */
/*
* TODO 当前的js文件，作为worker文件
* TODO 将计数逻辑编写在当前的worker文件中
* */
var num = 0;    //TODO 用于计数的变量
function postNum(){
    /*
    * TODO 将计数结果传递给HTML页面
    *       postMessage()方法
    *       注意：worker文件具有全局对象-worker对象
    * */
    postMessage(num);
    num ++;
    setTimeout(postNum,1000);
}
//TODO 手动调用该方法
postNum();