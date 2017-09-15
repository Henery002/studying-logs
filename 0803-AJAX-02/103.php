<?php
	/*****使用PHP向SQL服务器插入数据******/
	//1、连接数据库
	$conn=mysqli_connect('127.0.0.1','root','','tarena1605',3306);		//IP也可写为 localhost
	//2、提交SQL命令
	$sql="SET NAMES UTF8";
	$sql="INSERT INTO trn_class VALUES(456,'财经1511班','邵老师')";
	$result=mysqli_query($conn,$sql);
	//3、查看执行结果
	if($result){
		echo '<h1>新班级记录添加成功！</h1>';
	}else{
		echo "<h1>新班级记录添加失败！请检查SQL:$sql</h1>";
	}
?>