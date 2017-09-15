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
SET NAMES UTF8;
#试着删除库：tarena
DROP DATABASE IF EXISTS tarena;
#重建数据库：tarena
CREATE DATABASE tarena CHARSET UTF8;
#进入数据库
USE tarena;
#创建保存部门信息的表
CREATE TABLE depart(
	id		INT  PRIMARY KEY,
	name 	VARCHAR(32),
	palce 	VARCHAR(32)
);
#添加3个部门记录
INSERT INTO depart VALUES(101, '产品部', '上海市浦东新区');
INSERT INTO depart VALUES(50 , '人事部', '江苏省南京市白下路');
INSERT INTO depart VALUES(202, '宣传部', '江苏省苏州市昆山市');
#创建保存员工信息的表
CREATE TABLE emp(
	id 			INT  PRIMARY KEY,
	name 		VARCHAR(8),
	sex 		CHAR(2),
	photo 		VARCHAR(32),
	birthday 	date,
	salary 		FLOAT(8,2),
	tel 		CHAR(11),
	departId	INT
);
#添加5个员工信息
INSERT INTO emp VALUES(
	1201,'马琳','男','img/malin.jpg',
	'1987-05-11',5500.00,15575562000,101
);
INSERT INTO emp VALUES(
	1202,'马龙','男','img/malong.jpg',
	'1989-10-10',5000.00,18756555555,101
);
INSERT INTO emp VALUES(
	1205,'刘诗雯','女','img/liushiwen.jpg',
	'1992-03-24',4000.00,18855555555,50
);
INSERT INTO emp VALUES(
	1210,'福原爱','女','img/fuyuanai.avi',
	'1992-02-02',6000.50,12205585555,202
);
INSERT INTO emp VALUES(
	1505,'张继科','男','img/zhangjk.png',
	'1988-04-30',6825.00,13725568560,50
);

#查询所有部门信息
SELECT * FROM depart;

#查询所有员工信息
SELECT * FROM emp;

#查询50号部门所有员工信息
SELECT * FROM emp WHERE departId=50;

#查询宣传部所有员工信息
SELECT * FROM emp WHERE departId=(
	SELECT id FROM depart WHERE name='人事部'
);