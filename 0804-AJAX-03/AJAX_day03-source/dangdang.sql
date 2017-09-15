#设置后续的SQL语句编码
SET NAMES UTF8;
#试着删除数据库dangdang
DROP DATABASE IF EXISTS dangdang;
#创建数据库dangdang，指定保存数据时的字符集
CREATE DATABASE dangdang CHARSET=UTF8;
#进入dangdang
USE dangdang;

#创建保存书籍信息的表： dd_book
#bid(自增主键)  name  price  birthday  isOnsale
CREATE TABLE dd_book(
  bid INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(64),
  price FLOAT(6,2),
  birthday BIGINT,    #日期用大整数表示
  isOnsale BOOL,
  pic VARCHAR(64)
);

#添加一本书籍的信息	
INSERT INTO dd_book VALUES(
  NULL, '西游记','35.5','1234234313223',TRUE,'img/1.jpg'
);
#添加一本书籍的信息
INSERT INTO dd_book VALUES(
  NULL, '水浒传','45.5','1254234313224',FALSE,'img/2.jpg'
);
#添加一本书籍的信息
INSERT INTO dd_book VALUES(
  NULL, '三国志','45.5','1238234313225',TRUE,'img/3.jpg'
);
#删除编号为1的书籍记录
#DELETE FROM dd_book WHERE bid=1;
#修改编号为3的书籍记录
#UPDATE dd_book SET name='三国演义',price='55.5'
#WHERE bid=3;

#查询出所有的书籍记录
SELECT * FROM dd_book;
#查询出编号为3的书籍记录
SELECT * FROM dd_book WHERE bid=3;