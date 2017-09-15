SET NAMES UTF8;
DROP DATABASE IF EXISTS Tarena1605;
CREATE DATABASE Tarena1605 CHARSET UTF8;
USE Tarena1605;
CREATE TABLE trn_class(
	cid 	INT(4) PRIMARY KEY,
	name 	VARCHAR(16) NOT NULL,
	headerTeacher 	VARCHAR(8)
);
INSERT INTO trn_class VALUES(
	1605,'前端开发1班','吴老师'
);
INSERT INTO trn_class VALUES(
	1604,'UID设计1班','苍老师'
);
INSERT INTO trn_class VALUES(
	1603,'UED会计学院1班','小泽老师'
);
CREATE TABLE trn_student(
	sid			INT(10) PRIMARY KEY AUTO_INCREMENT,
	name 		VARCHAR(8) NOT NULL,
	sex			CHAR(2),
	birthday 	DATE,
	score 		FLOAT(5,1),
	stuClass 	INT(4)
);
INSERT INTO trn_student VALUES(
	1001,'马琳','男','1987-10-02',89.5,1605
);
INSERT INTO trn_student VALUES(
	NULL,'马龙','男','1987-02-02',89.5,1605
);
INSERT INTO trn_student VALUES(
	NULL,'王浩','男','1988-10-12',76.5,1604
);
INSERT INTO trn_student VALUES(
	NULL,'丁宁','女','1990-09-25',90.5,1604
);
INSERT INTO trn_student VALUES(
	NULL,'许昕','男','1987-07-02',88.5,1603
);
INSERT INTO trn_student VALUES(
	NULL,'张继科','男','1990-09-25',80.0,1605
);
INSERT INTO trn_student VALUES(
	NULL,'刘诗雯','女','1987-00-02',82.0,1605
);
SELECT * FROM trn_class;
SELECT * FROM trn_student;
SELECT * FROM trn_student WHERE stuClass=1605; 
SELECT * FROM trn_student WHERE stuClass=(
	SELECT cid FROM trn_class WHERE name='UID设计1班'
);
