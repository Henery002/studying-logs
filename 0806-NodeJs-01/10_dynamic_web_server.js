/**********一个完整的动态Web服务器************/
/*使用Node.js相关模块，谁想爱你一款动态服务器*/
var  http = require('http');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql');

//1、创建一个HTTPServer
var server = http.createServer();
//2、绑定request事件的监听函数
server.on('request',function(request,response){
	//解析请求URL，获取其请求的URL地址
	var urlObj = url.parse(request.url,true);	//true拿到查询字符串
	//console.log(urlObj);
	//判定
	var suffix = urlObj.pathname.substring(urlObj.pathname.lastIndexOf('.'));
	console.log(suffix); 		//拿到请求资源的后缀名，形如 .html	.do
	//据此做判定
	if(suffix==='.html'){		//静态html请求
		doWithStaticRequest();	//函数调用
	}else if(suffix==='.do'){	//动态do请求
		doWithDynamicRequest();	//函数调用
	}
	function doWithStaticRequest(){
		//查找完整的文件名，读取内容发送给客户端	此处忽略文件不存在的情况（404）
		var fileName = __dirname+'/htdocs'+urlObj.pathname;
		fs.readFile(fileName, (err,data) => {
			response.write(data);
			response.end();			//静态请求到此结束
		})
	}
	function doWithDynamicRequest(){
		if(urlObj.pathname==='/register.do'){
			doRegister();
		}else if(urlObj.pathname==='/login.do'){
			doLogin();
		}
	}
	//处理注册函数
	function doRegister(){
		//读取客户端URL中提交的用户名/密码
		//console.log(urlObj);
		var uname = urlObj.query.userName;
		var upwd = urlObj.query.userPwd;
		//链接MySQL服务器，执行INSETR操作
		var conn = mysql.createConnection({
			host: 		'127.0.0.1',
			user: 		'',
			password: 	'',
			database: 	''
		});
		var sql = `INSERT INTO users VALUES(NULL,'${uname}','${upwd}')`;
		conn.query(sql, (err, result ) =>{
			response.setHeader('Content-Type','text/html;charset=UTF-8');
			response.end('注册成功！您的用户编号为：'+result.insertId);
			conn.end();
		});
	}
	//处理登陆函数
	function doLogin(){

	}
})
//3、开始监听客户端指定的端口
server.listen(80,function(){
	console.log('HttpServer开始监听80端口...');
})


