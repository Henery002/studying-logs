SET names utf8;
drop database if exists tarena;
create database tarena charset=utf8;
	use tarena;
create table users(	
	uid		INT primary key auto_increment,
	uname	varchar(32),
	upwd	varchar(32)
);
insert into users values(
	null,'tom','123'
);
insert into users values(
	null,'mary','123243'
);
select * from users;