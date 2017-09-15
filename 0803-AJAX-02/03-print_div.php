<!DOCTYPE html>
 <head>
  <title> new document </title>
  <meta charset="utf-8" />
  <style>
	div{
		width:50px;
		height:50px;
		margin:10px;
		float:left;
		border:1px solid #999;
	}
  </style>
 </head>
 <body>
	<h1>使用PHP输出100个随机颜色的DIV</h1>
	<h2>客户端脚本(js)与服务器端脚本(php)的区别</h2>
	<?php
		for($i=0;$i<100;$i++){
			$r=rand(0,256);
			$g=rand(0,256);
			$b=rand(0,256);
			echo ('<div style="background:rgb('.$r.','.$g.','.$b.')">'.$i.'</div>');
		}
	?>	
 </body>
</html>