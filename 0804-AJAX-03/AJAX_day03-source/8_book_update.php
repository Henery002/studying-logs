<?php
/**修改数据库中的指定书籍**/

//1 接收客户端提交的书籍
$bid = $_REQUEST['bid'];
$name = $_REQUEST['name'];
$price = $_REQUEST['price'];
$isOnsale = $_REQUEST['isOnsale'];
$pic = $_REQUEST['pic'];
$birthday = time()*1000;

//2 连接数据库  mysqli_connect
$conn = mysqli_connect('127.0.0.1','root','','dangdang',3306);

//3 提交SQL 
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "UPDATE dd_book SET name='$name',price='$price',pic='$pic',isOnsale='$isOnsale',birthday='$birthday'  WHERE bid='$bid'";
$result = mysqli_query($conn, $sql);
 
//4 查看执行结果		15:33~15:37
if($result){
	echo '<h1>修改成功</h1>';
	echo '修改语句影响的行数为：'.mysqli_affected_rows($conn);
}else{
	echo '<h1>修改失败</h1>';
	echo "可能原因-SQL语法错误：$sql";
}

echo '<hr>';
echo '<a href="7_book_select.php">查看书籍列表</a>';
