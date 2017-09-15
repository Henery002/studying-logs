<?php
	//1、
	$uname=$_REQUEST['uname'];
	//2、
	$db=['tom','mary'];
	for($i=0;$i<count($db);$i++){
		if($db[$i]===$uname){
			break;
		}
	}
	//3、
	//4、
	if($i===count($db)){ 
		echo "succeed";		//验证通过
	}else{
		echo "failed";		//验证不通过
	}
?>