/*******练习使用URL模块********/
	//引入url模块
var url=require('url');
	//把URL字符串解析为对象
var str='http://admimnn:123@127.0.0.1:8080/news/1.html?pno=2&psize=5#chapter3';
var obj=url.parse(str,true);	//加上参数true后，表示在解析时使用query.parse，解析出对象
console.log(str);
console.log(obj);		//解析出来的是一个url对象







