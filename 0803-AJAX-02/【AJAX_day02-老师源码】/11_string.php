<?php
/****string*****/

#######+只做数学加法########
#echo 'ABCD'+'XYZ';	//0
#echo '23A5BCD'+'123XYZ';	//146


$ename = 'Tom';
$addr = "万寿路2号";

######注意两种引号的区别#####
#echo '姓名：'+$ename+'住址：'; //0
#echo '姓名：'.$ename.'住址：'.$addr.'<br>'; //姓名：Tom住址：万寿路2号
#echo '姓名：$ename 住址：$addr <br>';//姓名：$ename 住址：$addr 

#echo "姓名：$ename 住址：$addr <br>"; //姓名：Tom 住址：万寿路2号 

echo "姓名：$ename 住址：$addr<br>"; //姓名：Tom 住址：万寿路2号 

//$my住址 = '海淀区';