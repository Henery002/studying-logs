/**
 * Created by Administrator on 2016/08/19.
 */
/*
* TODO 用于计数器最终版的worker文件
* */
//TODO 接收HTML页面发送的num值
addEventListener("message",function(event) {
    //TODO 得到num值
    var num = event.data;
    postNum();
    function postNum() {
        postMessage(num);
        num++;
        //console.log(event.data);
        setTimeout(postNum,1000);
    }
})