/*********练习QueryString模块的使用***********/
	//require():全局函数，用于引入一个模块
var querys = require('querystring');	//引号中是官方规定的名字：querystring
	//解析查询字符串中的数据
var str = 'stuName=Tom&chinese=90&math=80'; 
var object = querys.parse(str);	//把查询字符串解析为对象
console.log(object);
	//输出内容及计算总分		//node.js支持parseInt方法
console.log(`姓名:${object.stuName} 语文:${object.chinese} 数学:${object.math} 总分：${parseInt(object.chinese)+parseInt(object.math)}`);

	//把一个对象转换为查询字符串的形式
var user = {userName:'东东',userPwd:'123456+789',userAge:18};
var str = querys.stringify(user);		//使变为字符串
console.log(str);









