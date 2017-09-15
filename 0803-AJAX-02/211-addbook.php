<?php
	//1
	$conn = mysqli_connect('localhost','root',"",'dangdang',3306);
	//2
	$sql = "SET NAMES UTF8";
	mysqli_query($conn,$sql);

	$sql = "INSERT INTO dd_book VALUES(NULL,'离散数学','img/maths.png',40.00,'2001-10-01',true)";
	$result = mysqli_query($conn,$sql);
	//3
	if($result){
		echo '<h1>新记录添加成功！</h1>';
	}else{
		echo '<h1>新记录添加失败！请检查SQL：'.$sql.'</h1>';
	}
?>