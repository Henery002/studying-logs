/********使用HTTP模块创建一个最简单的Web服务器*********/
	//引用HTTP模块
var http = require('http');
	//1、创建一个Web服务器对象
var server = http.createServer();

	//2、为Web服务器绑定处理客户端请求消息的方法
server.on('request',function(request,response){		//非jQuery中的on
	console.log('WebServer接收到一个请求...');	
	//console.log(request);	
	console.log(request.method);
	console.log(request.url.parse());
			//request这里封装着请求消息--读取
			//response用于封装响应消息--写出
	response.statusCode=200;			//响应状态码
	//response.statusCode=404;
	response.setHeader('Content-Type','text/html;charset=UTF-8');	//内容类型：Content-Type
	response.write('<h1>欢迎访问我的Web服务器</h1>');	//响应主体
	//response.write('<h1>页面不存在！</h1>');
	response.end();			//输出完成
});												
	//3、Web服务器监听指定的端口	=>	开始上班
server.listen(80,function(){
	console.log('WebServer开始监听80端口...');
});			//监听80端口




