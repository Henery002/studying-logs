SET NAMES UTF8;
DROP DATABASE IF EXISTS dangdang;
CREATE DATABASE dangdang CHARSET UTF8;
USE dangdang;
CREATE TABLE dd_book(
	bid 		INT(10) PRIMARY KEY AUTO_INCREMENT,
	name 		VARCHAR(32) NOT NULL,
	pic 		VARCHAR(32),
	price 		FLOAT(5,2),
	pubdate 	DATE,
	isOnSale 	false
);
INSERT INTO dd_book VALUES(200101,'数据结构','img/datastruct.jpg',52.50,'2015-02-02',false);
INSERT INTO dd_book VALUES(NULL,'操作系统','img/operating system.jpg',35.00,'2016-10-23',true);
INSERT INTO dd_book VALUES(NULL,'组成原理','img/zuchenyuanli.jpg',50.00,'2012-09-10',false);
SELECT * FROM dd_book;