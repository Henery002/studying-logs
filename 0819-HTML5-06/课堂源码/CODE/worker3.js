/**
 * TODO 用于计数器最终版的Worker文件
 */
//TODO 接收HTML页面发送的num值
addEventListener("message",function(event){
    //TODO 得到num值
    var num = event.data;
    postNum();
    function postNum(){
        postMessage(num);
        num++;
        setTimeout(postNum,1000);
    }
});