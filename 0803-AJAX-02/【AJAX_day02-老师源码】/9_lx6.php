<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
  <style>
	.box {
		width: 50px;
		height: 50px;
		display: inline-block;
		margin: 5px;
	}
  </style>
 </head>
 <body>
	<h1>使用PHP输出的随机DIV</h1>
	<h2>客户端脚本(JS)与服务器端脚本(PHP)的区别</h2>
	<?php
	for($i=0; $i<100; $i++){
		$r = rand(0,256);
		$g = rand(0,256);
		$b = rand(0,256);
		echo '<div class="box" style="background: rgb('.$r.','.$g.','.$b.')">'.$i.'</div>';
	}
	?>
	<hr>
 </body>
</html>
