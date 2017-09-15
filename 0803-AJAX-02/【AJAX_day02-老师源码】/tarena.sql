#设置后面的SQL命令所用编码
SET NAMES UTF8;
#试着删除一个数据库(如果存在的话)：tarena
DROP DATABASE IF EXISTS tarena;
#创建一个新的数据库：tarena，使用UTF8字符集
CREATE DATABASE tarena CHARSET=UTF8;
#开始使用tarena数据库
USE tarena;

#创建一个班级表，保存班级信息：trn_class
#cid  name   headTeacher
CREATE TABLE trn_class(
  cid INT PRIMARY KEY,
  name VARCHAR(16),
  headTeacher VARCHAR(8)
);

#向班级班中插入三个班级的数据
INSERT INTO trn_class VALUES(
  101, '软件0801班', '王老师'
);
INSERT INTO trn_class VALUES(
  206, '软件0802班', '张老师'
);
INSERT INTO trn_class VALUES(
  808, '软件0803班', '刘老师'
);

#创建一个学生表，保存学生信息:trn_student
#sid  name  sex  birthday  score  stuClass
CREATE TABLE trn_student(
  sid INT PRIMARY KEY AUTO_INCREMENT, #自增列
  name VARCHAR(16),
  sex VARCHAR(1),
  score FLOAT(4,1),
  stuClass INT
);

#向学生表中插入5个学生信息
INSERT INTO trn_student VALUES(
  NULL, '大旭', '男', 650, 206
);
INSERT INTO trn_student VALUES(
  NULL, '东东', '男', 660, 101
);
INSERT INTO trn_student VALUES(
  NULL, '丁丁', '女', 670, 206
);

#查询出所有班级
SELECT cid,name,headTeacher FROM trn_class;

#查询出所有学生
SELECT * FROM trn_student;

#查询出206号班级所有的学生
SELECT * FROM trn_student
WHERE stuClass=206;

#查询出“软件0801班”所有的学生
SELECT * FROM trn_student
WHERE stuClass=(
  SELECT cid FROM trn_class
  WHERE name='软件0801班'
);