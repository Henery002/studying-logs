<?php
/**从数据库中删除一个指定的书籍**/

//1 接收客户端提交的书籍编号
$bid = $_REQUEST['bid'];

//2 连接数据库  mysqli_connect
$conn = mysqli_connect('127.0.0.1','root','','dangdang',3306);

//3 提交SQL   mysqli_query
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "DELETE FROM dd_book WHERE bid=$bid";
$result = mysqli_query($conn, $sql);
 
//4 查看执行结果 
if($result){
	echo '<h1>删除成功</h1>';
	echo '删除语句影响的行数为：'.mysqli_affected_rows($conn);
}else{
	echo '<h1>删除失败</h1>';
	echo "可能原因-SQL语法错误：$sql";
}

echo '<hr>';
echo '<a href="7_book_select.php">查看书籍列表</a>';
