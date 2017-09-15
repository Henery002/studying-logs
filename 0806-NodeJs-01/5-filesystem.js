/*********使用fs模块读(写)文件中的内容********/
	//引入fs模块
var fs=require('fs');
	//读取一个文件中所有的内容
	//获取当前脚本文件(.js)所在的目录
var jsDir = __dirname;
var fileName=jsDir+'/htdocs/5-index.html';		//拼接
fs.readFile(fileName, /*function*/(err,data) => {	//匿名函数两种写法
	console.log('文件读取完成...');
	console.log(data);		//Buffer(内存缓冲区)    获得Buffer对象
	//console.log(err);
	console.log(data.toString());	
});

	//向文件中写出内容
var fileName = __dirname+'/htdocs/my.log';
fs.writeFile(fileName, 'body{margin:0;}',function(){
	console.log('文件写出完成...');
});		//规定文件中的内容

console.log('脚本执行完成...');		//按速度，会先执行


