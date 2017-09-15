AA<hr>BB
<?php
  $age = 20;		#一个PHP变量
  echo($age);		#输出
  echo('<br>');
  echo($age);		#输出
?>

30<br>30
<hr>
<table border="1" width="100%">
	<tbody>
		<tr>
			<td>1111</td>
		</tr>
	</tbody>
</table>

<hr>
<?php
  echo '<table border="1" width="100%">';
  echo '<tbody>';
  echo '	<tr>';
  echo '		<td>2222</td>';
  echo '	</tr>';
  echo '</tbody>';
  echo '</table>';
?>

<hr>
<table border="1" width="100%">
	<tbody>
		<?php
		for($i=0; $i<5; $i++){
			echo('<tr><td>'.$i.'</td></tr>');
		}
		?>
	</tbody>
</table>