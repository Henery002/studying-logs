/*******使用Node.js链接MySQL服务器，执行查询操作*******/
var mysql = require('mysql');
//console.log(mysql);

//1、链接Mysql服务器
var conn = mysql.createConnection({
	host: 		'127.0.0.1',
	user: 		'root',
	password: 	'',			//无密码
	database: 	'tarena',
	//port: 		
});

//2、提交sql语句
	//``号可以使其中内容使用单双引号、换行
var sql = ` SELECT * FROM users WHERE uname='tom' AND upwd='123' `;
conn.query(sql,function(err,rows){
	//3、查看执行结果
	//console.log(arguments);
	if(err) throw err;
	if(rows.length>0){
		console.log(rows[0].uid);
		console.log(rows[0].uname);
		console.log(rows[0].upwd);
	}else{
		console.log('没有查询到任何记录行');		//若uname输入错误，则输出该语句
	}
	//4、关闭链接
	conn.end();
});