<?php
/*****PHP中的数组******/
///PHP5.4+
$arr = [1, 3, 5];
///PHP5.3-
$arr = array(1, 3, 5);


//第一种形式的数组：索引数组：下标是数字
$arr = [10, 30, 50];
#echo $arr[0];
#echo $arr[2];
//echo $arr[10];  运行时错误
//echo $arr;  运行时错误
//var_dump($arr);
//添加新元素
$arr[3] = 70;
$arr[ count($arr) ] = 90;
$arr[] = 100;	//追加新元素
//遍历数组
/*
for($i=0; $i<count($arr); $i++){
	echo "$i - $arr[$i] <br>";
}
*/
foreach($arr as $i=>$v){
	echo "$i : $v <br>";
}


echo '<hr>';
//第二种形式的数组：关联数组：下标是字符串
$arr = ['eid'=>101, 'ename'=>'Tom', 'age'=>20, 'salary'=>5000];
//echo $arr['ename'];
//echo $arr['salary'];
#echo $arr;  //运行时错误
#echo $arr[0];	//运行时错误
$arr['addr'] = '朝阳区';
//var_dump($arr);

//echo count($arr);	//5
####遍历关联数组不能使用for
####只能使用foreach
/*
foreach($arr as $v){	//只遍历值
	echo "$v<br>";
}
*/
foreach($arr as $key=>$val){  //遍历下标和值
	echo "$key <br>";
}


