<?php
/**从数据库中查询所有的书籍**/

//1 连接数据库
$conn = mysqli_connect('127.0.0.1','root','','dangdang',3306);

//2 提交SQL
$sql = "SET NAMES UTF8";
mysqli_query($conn,$sql);

$sql = "SELECT * FROM dd_book";
$result = mysqli_query($conn, $sql);

/**
mysqli_query()函数的返回值：
执行失败(如SQL语法错误)： FALSE
执行成功：
	DML执行成功：TRUE
	DQL执行成功：object(查询结果描述对象)
**/

//var_dump($result);  //描述对象，并不真的包含查询结果集

if($result){//object=>true 执行成功
	//$row = mysqli_fetch_row($result);
	//var_dump($row);//返回索引数组

	/*
	$row = mysqli_fetch_assoc($result);
	var_dump($row);//返回关联数组 0
	
	$row = mysqli_fetch_assoc($result);
	var_dump($row);//返回关联数组 1
	
	$row = mysqli_fetch_assoc($result);
	var_dump($row);//返回关联数组 2
	
	$row = mysqli_fetch_assoc($result);
	var_dump($row);//NULL
	*/

	/*
	while(true){
		$row = mysqli_fetch_assoc($result);
		if($row===null){
			break;
		}
		var_dump($row);
	}
	*/

	while( ($row=mysqli_fetch_assoc($result))!==null ){
		var_dump($row);
	}

}else{
	echo '<h1>查询失败</h1>';
	echo "可能原因-SQL语法错误：$sql";
}
