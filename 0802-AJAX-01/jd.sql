/*多行注释*/
#单行注释
/**
	tbb
**/

#show databases;
#SHOW DATABASES;
#show DataBAses;

/**************************/
#设置后面要执行的SQL语句的编码方式
SET NAMES UTF8;		#注意编码方式中，UTF8中没有 - 

/**  服务器=>DATABASE=>TABLE=>ROW=>COLUMN  **/
#试着删除一个数据库（如果存在）
DROP DATABASE IF EXISTS jd;
#创建一个数据库，并指定其中保存数据的编码方式
CREATE DATABASE jd CHARSET=UTF8;
#CREATE DATABASE Henery CHARSET=UTF8;

#进入指定的数据库
USE jd;

#创建表
CREATE TABLE products(
	id INT PRIMARY KEY,	#编号，主键，不能重复
	name VARCHAR(32),	#名称，64个字符 
	price FLOAT(10,2),	#价格，包括小数位共10位
	pic VARCHAR(64),	#图片路径，如img/p101.png 
	birthday DATE,		#生产日期 
	isOnSale BOOLEAN	#是否特价
);

#插入数据行
INSERT INTO products VALUES(
	101,
	'美年达',
	3.50,
	'img/p101.jpg',
	'2016-08-02',
	TRUE		#FALSE/1/0都可以
);
INSERT INTO products(id, name, price, pic,birthday, isOnSale) VALUES(
	102,
	'百事可乐',
	5.50,
	'img/p102.jpg',
	'2016-08-23',76 
	TRUE		#FALSE/1/0都可以
);
INSERT INTO products(id, name, price, pic,birthday, isOnSale) 
	VALUES(
		103,
		'可口可乐小子',
		2.50,
		'img/p103.jpg',
		'2016-02-19',
		FALSE		#FALSE/1/0都可以
	);
INSERT INTO products(id, name, price, pic,birthday, isOnSale) VALUES(
	255,
	'芬达',
	8.50,
	'img/p6066.jpg',
	'2015-12-19',
	1		#FALSE/1/0都可以
);
#删除数据行
#DELETE FROM products;	#删除所有记录行
DELETE FROM products 
	WHERE id=101; 		#删除一行记录

#修改数据行
UPDATE products
	SET name='百事可乐不可乐', price='15', isOnSale=TRUE 	#TRUE可用引号
		WHERE id=102;

#查询数据
SELECT id,name,price,pic,birthday,isOnSale FROM products;
SELECT id,name,price FROM products 
	WHERE id=103;		#根据条件查询特定的行

/********
练习：
试着删除库：tarena
重建数据库：tarena
进入库：
创建保存部门信息的表 ：dept-编号、名称、所在地
添加3个部门记录：
创建保存员工信息的表：emp-编号、姓名、性别、照片、生日、工资、电话、员工所在部门
添加5个员工信息：

查询所有部门信息
查询所有员工信息
查询10部门所有员工信息
查询研发部所有员工信息

*******/