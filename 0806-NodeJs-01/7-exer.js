/********练习-创建静态Web服务器*********/
var  http=require('http');
var server=http.createServer();
server.on('request',function(){
	console.log('WebServer服务器接收到了一个请求消息...');
	var url=require('url');
	console.log(url);
	//console.log(request.parse());
	response.statusCode=200;
	response.setHeader('Content-Type','text/html;charset=UTF-8');
	response.write('<h1>您现在访问的是我的静态Web服务器！</h1>');
	response.end();
});
server.listen(80,function(){
	console.log('WebServer服务器开始监听80端口...');
});