<!DOCTYPE html>
 <head>
  <title> PHP </title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="" />
  <link rel="stylesheet" href="../js/jquery-ui.css">
  <style>
	
  </style>
  <script></script>
 </head>
 <body>
	<h2>我的第一个服务器端网页</h2>
	<p>PHP动态网页</p>
	<p>魏范光</p>
	<hr><hr><hr>
	<?php
		$msg = 'Hello';		/*定义一个php变量*/
		echo($msg);			#向客户端输出变量的值
	?>
	<hr><hr>
	<?php
		for($i=0;$i<50;$i++){
			echo($i . $msg);	// . 表示字符串拼接
		}
	?>
 </body>
</html>