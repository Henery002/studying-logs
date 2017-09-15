/******使用Node.js实现一款静态Web服务器*******/
var http = require('http');
var url = require('url');
var fs = require('fs');		//引入三个模块

	//1、创建server对象
var server=http.createServer();
	//2、绑定request事件监听函数
server.on('request', (request,response) => {	//回调函数的新写法
	//console.log('WebServer服务器')
	//解析请求URL
	var urlObj=url.parse(request.url,true);	//加上参数true后，表示在解析时使用query.parse，解析出对象
	//console.log(urlObj);
	var fileName=__dirname+'/htdocs'+urlObj.pathname;	//拼接出完整的路径名
	//判断请求的资源在服务器上是否存在
	if(fs.existsSync(fileName)){
		console.log('客户端请求的资源在服务器上存在');
		writeFileResponse();
	}else{
		console.log('客户端请求的资源在服务器上不存在');
		write404Response();
	}
	function writeFileResponse(){
		//读取被请求的文件，输出给客户端
		fs.readFile(fileName,function(err,data){	//数据在data里
			response.setHeader('Content-Type','text/html;charset=UTF-8');
			response.write(data/*.toString*/);
			response.end();
		})
	}
	function write404Response(){
		//向客户端输出一个404响应消息
		response.statusCode=404;
		response.setHeader('Content-Type','text/html;charset=UTF-8');
		response.write('<h2>您请求的资源不存在</h2>');
		response.end();
	}
})
	//3、监听端口
server.listen(80, () => {	//端口、回调函数(两种方式--ES6新特性)
	console.log('WebServer开始监听80端口...');
});