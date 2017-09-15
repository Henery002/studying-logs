/**
 * TODO 当前的JS文件 - 作为Worker文件
 * TODO 将计数的逻辑编写在当前的Worker文件中
 */
var num = 0;//TODO 用于计数的变量
function postNum(){
    /*
      TODO 将计数结果传递给HTML页面
      TODO postMessage()方法
      TODO 注意:Worker文件具有全局对象 - Worker对象
     */
    postMessage(num);
    num++;
    setTimeout(postNum,1000);
}
postNum();