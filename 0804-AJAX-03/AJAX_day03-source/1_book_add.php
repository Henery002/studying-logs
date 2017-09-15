<?php
/**把一个新书的信息添加入数据库**/

//1 创建书籍信息	
$name = '红楼梦';
$price = 66.5;
$birthday = time()*1000;#获得当前系统时间
$isOnsale = 0;
$pic = 'img/4.jpg';

//2 连接数据库  mysqli_connect
$conn = mysqli_connect('127.0.0.1','root','','dangdang',3306);

//3 提交SQL   mysqli_query
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "INSERT INTO dd_book VALUES(NULL,'$name',$price,$birthday,$isOnsale,'$pic')";
#echo $sql;
$result = mysqli_query($conn, $sql);
 
//4 查看执行结果  if()...
if($result){
	echo '<h1>执行成功</h1>';
	echo '新记录在数据库中的编号为：'.mysqli_insert_id($conn);#获得$conn刚刚执行的INSERT语句创建的自增编号
}else{
	echo '<h1>执行失败</h1>';
	echo "可能原因-SQL语法错误：$sql";
}


echo '<hr>';
echo '<a href="7_book_select.php">查看书籍列表</a>';








