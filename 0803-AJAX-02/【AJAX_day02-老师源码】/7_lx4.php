<!doctype html>
<html lang="en">
 <head>
  <meta charset="UTF-8">
 </head>
 <body>
  <h1>九九乘法表</h1>
  <table width="100%" border="1">
  	<tbody>
	  <?php
	  for($i=1; $i<=9; $i++){
	    echo '<tr>';
		for($j=1; $j<=$i; $j++){
		  echo '<td>'.$i.'*'.$j.'='.($i*$j).'</td>';
		}
	    echo '</tr>';
	  }
	  ?>
	</tbody>
  </table>
 </body>
</html>
