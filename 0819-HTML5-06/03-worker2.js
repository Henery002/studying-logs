/**
 * Created by Administrator on 2016/08/19.
 */
/*
* TODO 用于worker的双向通信
* */
//TODO 1、绑定onmessage事件，接收HTML页面传递过来的消息
addEventListener('message',function(event){
    //TODO 1.1、接收HTML页面传递的消息
    var value = event.data;
    //TODO 1.2、根据接收到的内容处理
    switch(value){
        case "你在哪里？":
            //TODO 返回对应得消息
            postMessage("东莞");
            break;
        case "你在那里做什么？":
            postMessage("当经纪人啊");
            break;
        default:
            postMessage('你说啥？没听懂...');
            break;
    }
})