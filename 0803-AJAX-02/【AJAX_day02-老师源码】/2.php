<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <title>Document</title>
 </head>
 <body>
  <h1>这是我的第一个服务器端PHP网页</h1>
  <p>作者：李文华</p>
  <hr>
  <?php
	$msg = 'hello';	/*定义一个PHP变量*/
	echo($msg);		#向客户端输出变量的值
  ?>
  <hr><hr>
  <?php
	for($i=0; $i<50; $i++){
		echo($i . $msg); //.表字符串拼接
	}
  ?>

 </body>
</html>
