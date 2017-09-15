/**
 * TODO 用于Worker的双向通信
 * TODO Worker文件中具有全局对象 - Worker对象
 */
//TODO 1.绑定 onmessage 事件
addEventListener("message",function(event){
    //TODO a.接收HTML页面传递的消息
    var value = event.data;
    //TODO b.根据接收的内容进行处理
    switch(value){
        case "i am zhangwuji":
            //TODO 返回对应的消息
            postMessage("i am xiaona");
            break;
        case "how are you":
            postMessage("how are you too");
            break;
    }
});