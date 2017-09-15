/**************/
var mysql = require('mysql');
console.log(mysql);

//1、链接Mysql服务器
var conn = mysql.createConnection({
	host: 		'127.0.0.1',
	user: 		'root',
	password: 	'',			//无密码
	database: 	'tarena',
	//port: 		
});
//2、提交sql语句	
	//用``才能实现代码换行
var sql = `INSERT INTO users VALUES(
	NULL,'kingsoft','4656'
)`;
conn.query(sql,function(err,result){
	//3、查看执行结果
	//console.log(arguments);
	if(err) throw err;
	console.log('操作影响的行数：'+result.affectedRows);
	console.log('INSERT产生的自增编号：'+result.insertId);

	//4、关闭链接
	conn.end();
});