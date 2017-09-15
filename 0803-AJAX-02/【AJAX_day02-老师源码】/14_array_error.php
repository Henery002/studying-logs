<?php

/***数组应用中的常见错误***/

$emp = ['ename'=>'Tom', 'age'=>30];

echo '姓名：'.$emp['ename'].' 年龄：'.$emp['age'].'<br>';  //ename的单引号必需的

echo "姓名：".$emp['ename']." 年龄：".$emp['age']."<br>";  //ename的单引号必需的

echo "姓名：$emp[ename] 年龄：$emp[age] <br>";  			//ename不能写单引号

