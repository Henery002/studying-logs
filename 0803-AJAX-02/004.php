<!DOCTYPE html>
 <head>
  <title> new document </title>
  <meta charset="utf-8" />
  <link rel="stylesheet" href="" />
 </head>
 <body>
 <h1>九九乘法表</h1>
	<table width='540' height='20' border='1'>
		<?php
			for($i=1;$i<=9;$i++){
				echo('<tr>');
				for($j=1,$str='';$j<=$i;$j++){
					echo('<td>'.$i.'*'.$j."=".($i*$j).'</td>');
				}
				echo('</tr>');
			}
		?>
	</table>
 </body>
</html>