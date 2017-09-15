<?php
$list = [
	[101, 'Tom', 20, '1350134567'],
	[102, 'Mary', 21, '1350134569'],
	[103, 'John', 22, '1350134568']
];
?>
<h1>员工信息表</h1>
<table width="100%" border="1">
<thead>
	<tr>
		<th>编号</th>
		<th>姓名</th>
		<th>年龄</th>
		<th>电话</th>
	</tr>
</thead>
<tbody>
  <?php
  //获取数组中元素的个数： count($arr)
  for($i=0; $i<count($list); $i++){
	$emp = $list[$i];
	echo '<tr>';
	echo '	<td>'.$emp[0].'</td>';
	echo '	<td>'.$emp[1].'</td>';
	echo '	<td>'.$emp[2].'</td>';
	echo '	<td>'.$emp[3].'</td>';
	echo '</tr>';
  }
  ?>
</tbody>
</table>
