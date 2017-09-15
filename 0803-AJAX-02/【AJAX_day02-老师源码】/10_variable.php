<?php
#声明变量
$name = 10;
#echo $name;	//输出变量的值
var_dump($name);	//输出变量的类型和值

$name = '一二';
#echo $name;	//输出变量的值
var_dump($name);	//输出变量的类型和值

$name = true;
var_dump($name);	//输出变量的类型和值


/********************************/
#声明常量   PHP5.4+
const PI = 3.14;
echo PI;
var_dump(PI);
//PI = 3.1;   常量不能修改值

#声明常量   PHP5.3-
define('AUTHOR_NAME', 'lwh');
echo AUTHOR_NAME;



/********************************/
#查看PHP解释器的版本
phpinfo();








