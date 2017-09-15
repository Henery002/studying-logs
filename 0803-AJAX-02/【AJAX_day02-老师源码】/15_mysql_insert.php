<?php
/**使用PHP向MySQL服务器插入数据**/

//1连接数据库
$conn = mysqli_connect('127.0.0.1','root',"",'tarena', 3306);
#var_dump($conn);

//2提交SQL命令
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "INSERT INTO trn_class VALUES(113,'财经1511班', '邵老师')";
$result = mysqli_query($conn, $sql);

//3查看执行结果
if($result){
	echo '<h1>新班级记录添加成功</h1>';
}else {
	echo "<h1>新班级记录添加失败！请检查SQL：$sql </h1>";
}
